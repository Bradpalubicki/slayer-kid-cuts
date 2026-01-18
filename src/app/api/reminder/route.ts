import { NextRequest, NextResponse } from "next/server";

// This endpoint would be called by a cron job (e.g., Vercel Cron, Railway, etc.)
// to send appointment reminders

interface Appointment {
  id: string;
  parentName: string;
  childName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  locationType: "salon" | "mobile";
  address?: string;
}

async function sendSMSReminder(appointment: Appointment, hoursUntil: number) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !twilioPhone) {
    console.log("Twilio not configured");
    return;
  }

  const timeWord = hoursUntil === 24 ? "tomorrow" : "in 2 hours";
  const location =
    appointment.locationType === "salon"
      ? "at our salon (1234 Fun Street, Las Vegas)"
      : `at your home${appointment.address ? ` (${appointment.address})` : ""}`;

  const message = `Hi ${appointment.parentName}! Reminder: ${appointment.childName}'s haircut is ${timeWord} at ${appointment.time} ${location}.

Reply CONFIRM to confirm, RESCHEDULE to change, or CANCEL to cancel.

See you soon! - Little Roots Studio`;

  try {
    await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          To: appointment.phone,
          From: twilioPhone,
          Body: message,
        }),
      },
    );
  } catch (error) {
    console.error("Failed to send SMS reminder:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verify cron secret
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { type } = await request.json();

    // In production, fetch appointments from database
    // const appointments24h = await db.appointments.findMany({
    //   where: { date: tomorrow, reminderSent24h: false }
    // });
    // const appointments2h = await db.appointments.findMany({
    //   where: { datetime: within2Hours, reminderSent2h: false }
    // });

    // Mock appointments for demo
    const mockAppointments: Appointment[] = [];

    let sentCount = 0;

    if (type === "24h") {
      for (const apt of mockAppointments) {
        await sendSMSReminder(apt, 24);
        sentCount++;
      }
    } else if (type === "2h") {
      for (const apt of mockAppointments) {
        await sendSMSReminder(apt, 2);
        sentCount++;
      }
    }

    return NextResponse.json({
      success: true,
      remindersSent: sentCount,
      type,
    });
  } catch (error) {
    console.error("Reminder error:", error);
    return NextResponse.json(
      { error: "Failed to send reminders" },
      { status: 500 },
    );
  }
}

// GET endpoint for Vercel Cron
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type") || "24h";

  // Reuse POST logic
  return POST(
    new NextRequest(request.url, {
      method: "POST",
      body: JSON.stringify({ type }),
      headers: request.headers,
    }),
  );
}
