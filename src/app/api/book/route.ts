import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Types for booking
interface ChildData {
  name: string;
  age: string;
  service: {
    id: string;
    name: string;
    price: string;
    priceNum: number;
    duration: string;
  };
  addOns: Array<{
    id: string;
    name: string;
    price: string;
    priceNum: number;
  }>;
  specialNeeds: boolean;
  specialNeedsNotes?: string;
}

interface BookingData {
  children: ChildData[];
  locationType: "salon" | "mobile";
  date: string;
  time: string;
  parentName: string;
  phone: string;
  email: string;
  address?: string;
  notes?: string;
  total: number;
}

// Slack webhook for notifications
async function sendSlackNotification(booking: BookingData, bookingId: string) {
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!slackWebhookUrl) {
    console.log("Slack webhook not configured, skipping notification");
    return;
  }

  const childrenSummary = booking.children
    .map((child) => {
      const addOnsText =
        child.addOns.length > 0
          ? ` + ${child.addOns.map((a) => a.name).join(", ")}`
          : "";
      const specialNeedsText = child.specialNeeds ? " ⚠️ SENSORY-FRIENDLY" : "";
      return `• ${child.name} (age ${child.age}): ${child.service.name}${addOnsText}${specialNeedsText}`;
    })
    .join("\n");

  const message = {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `🎉 New Booking: ${booking.children.length} ${booking.children.length > 1 ? "children" : "child"}!`,
          emoji: true,
        },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Booking ID:*\n${bookingId}` },
          { type: "mrkdwn", text: `*Total:*\n$${booking.total}` },
          { type: "mrkdwn", text: `*Date:*\n${booking.date}` },
          { type: "mrkdwn", text: `*Time:*\n${booking.time}` },
          {
            type: "mrkdwn",
            text: `*Location:*\n${booking.locationType === "salon" ? "🏠 Salon" : "🚗 Mobile Visit"}`,
          },
        ],
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Children:*\n${childrenSummary}`,
        },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Parent:*\n${booking.parentName}` },
          { type: "mrkdwn", text: `*Phone:*\n${booking.phone}` },
          { type: "mrkdwn", text: `*Email:*\n${booking.email}` },
        ],
      },
    ],
  };

  if (booking.address) {
    message.blocks.push({
      type: "section",
      fields: [{ type: "mrkdwn", text: `*Address:*\n${booking.address}` }],
    });
  }

  if (booking.notes) {
    message.blocks.push({
      type: "section",
      fields: [{ type: "mrkdwn", text: `*Notes:*\n${booking.notes}` }],
    });
  }

  // Flag special needs bookings
  const hasSpecialNeeds = booking.children.some((c) => c.specialNeeds);
  if (hasSpecialNeeds) {
    message.blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `⚠️ *SENSORY-FRIENDLY ACCOMMODATIONS REQUESTED*\n${booking.children
          .filter((c) => c.specialNeeds)
          .map(
            (c) => `${c.name}: ${c.specialNeedsNotes || "No specific notes"}`,
          )
          .join("\n")}`,
      },
    });
  }

  try {
    await fetch(slackWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });
  } catch (error) {
    console.error("Failed to send Slack notification:", error);
  }
}

// Send SMS confirmation via Twilio
async function sendSMSConfirmation(booking: BookingData, bookingId: string) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !twilioPhone) {
    console.log("Twilio not configured, skipping SMS");
    return;
  }

  const childrenNames = booking.children.map((c) => c.name).join(", ");
  const message = `Hi ${booking.parentName}! Your Little Roots Studio appointment is confirmed! ✂️

📅 ${booking.date} at ${booking.time}
👶 ${childrenNames}
📍 ${booking.locationType === "salon" ? "1234 Fun Street, Las Vegas" : "Mobile visit to your home"}
💰 Total: $${booking.total}

Booking ID: ${bookingId}

Reply RESCHEDULE to change or CANCEL to cancel. See you soon! 🎉`;

  try {
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          To: booking.phone,
          From: twilioPhone,
          Body: message,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Twilio API error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Failed to send SMS:", error);
  }
}

// Send email confirmation via Resend
async function sendEmailConfirmation(booking: BookingData, bookingId: string) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.log("Resend not configured, skipping email");
    return;
  }

  const resend = new Resend(resendKey);
  const childrenRows = booking.children
    .map(
      (c) =>
        `<tr>
          <td style="padding:8px 12px;border-bottom:1px solid #eee">${c.name} (age ${c.age})</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee">${c.service.name}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:right">${c.service.price}</td>
        </tr>`,
    )
    .join("");

  const sensoryNotes = booking.children
    .filter((c) => c.specialNeeds)
    .map((c) => `<li><strong>${c.name}:</strong> ${c.specialNeedsNotes || "Accommodations requested"}</li>`)
    .join("");

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;color:#333">
      <div style="background:linear-gradient(135deg,#5B8A8A,#7BA3A3);padding:32px;text-align:center;border-radius:16px 16px 0 0">
        <h1 style="color:white;margin:0;font-size:24px">Booking Confirmed!</h1>
        <p style="color:rgba(255,255,255,0.9);margin:8px 0 0">Little Roots Studio</p>
      </div>

      <div style="padding:32px;background:#fff;border:1px solid #eee;border-top:none">
        <p style="font-size:16px">Hi ${booking.parentName},</p>
        <p>Your appointment at Little Roots Studio has been received! Carla will confirm via text shortly.</p>

        <div style="background:#F8F6F3;border-radius:12px;padding:20px;margin:20px 0">
          <p style="margin:0 0 4px;font-size:14px;color:#5B8A8A;font-weight:600">BOOKING ID</p>
          <p style="margin:0;font-size:20px;font-weight:bold;font-family:monospace;color:#5B8A8A">${bookingId}</p>
        </div>

        <div style="margin:20px 0">
          <p style="font-weight:600;margin-bottom:4px">📅 ${booking.date} at ${booking.time}</p>
          <p style="margin:0;color:#666">📍 2895 N Green Valley Pkwy, Suite G, Henderson, NV 89014</p>
        </div>

        <table style="width:100%;border-collapse:collapse;margin:20px 0">
          <thead>
            <tr style="background:#F8F6F3">
              <th style="padding:8px 12px;text-align:left;font-size:13px;color:#666">Child</th>
              <th style="padding:8px 12px;text-align:left;font-size:13px;color:#666">Service</th>
              <th style="padding:8px 12px;text-align:right;font-size:13px;color:#666">Price</th>
            </tr>
          </thead>
          <tbody>${childrenRows}</tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="padding:8px 12px;font-weight:bold">Total</td>
              <td style="padding:8px 12px;text-align:right;font-weight:bold;color:#5B8A8A">$${booking.total}</td>
            </tr>
          </tfoot>
        </table>

        ${sensoryNotes ? `
        <div style="background:#FFF8E1;border-left:4px solid #F9A825;padding:12px 16px;border-radius:0 8px 8px 0;margin:20px 0">
          <p style="font-weight:600;margin:0 0 8px">Sensory Accommodations Noted:</p>
          <ul style="margin:0;padding-left:20px">${sensoryNotes}</ul>
        </div>
        ` : ""}

        <div style="margin:28px 0 0">
          <h3 style="color:#5B8A8A;margin-bottom:12px">What Happens Next</h3>
          <ol style="padding-left:20px;color:#555;line-height:1.8">
            <li><strong>Carla will confirm</strong> your appointment via text</li>
            <li><strong>Complete the intake questionnaire</strong> so she can prepare the space for your child</li>
            <li><strong>On arrival</strong>, text (702) 917-2350 for the suite entry code</li>
          </ol>
        </div>

        <div style="text-align:center;margin:28px 0">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSetWpeKLI6A_HaWhivbO3BuWvgoVwqDgtrJzz7jqU-GLdP5EQ/viewform"
             style="display:inline-block;background:#5B8A8A;color:white;padding:14px 28px;border-radius:50px;text-decoration:none;font-weight:600;font-size:16px">
            Complete Intake Form
          </a>
        </div>

        <hr style="border:none;border-top:1px solid #eee;margin:24px 0">
        <p style="font-size:13px;color:#999;text-align:center">
          If your child is unable to complete the haircut, you will not be charged.<br>
          Questions? Text or call (702) 917-2350
        </p>
      </div>

      <div style="padding:16px;text-align:center;color:#999;font-size:12px">
        Little Roots Studio · 2895 N Green Valley Pkwy #G · Henderson, NV 89014
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "Little Roots Studio <bookings@littleroots.studio>",
      to: booking.email,
      subject: `Booking Confirmed — ${booking.date} at ${booking.time}`,
      html,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const booking: BookingData = await request.json();

    // Validate required fields
    if (
      !booking.children ||
      booking.children.length === 0 ||
      !booking.date ||
      !booking.time ||
      !booking.parentName ||
      !booking.phone ||
      !booking.email
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate each child has required info
    for (const child of booking.children) {
      if (!child.name || !child.age || !child.service) {
        return NextResponse.json(
          { error: "Each child must have name, age, and service selected" },
          { status: 400 },
        );
      }
    }

    // Generate booking ID
    const bookingId = `SKC-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // In production, save to database here
    // await db.bookings.create({ ...booking, id: bookingId });

    // Send notifications in parallel
    await Promise.all([
      sendSlackNotification(booking, bookingId),
      sendSMSConfirmation(booking, bookingId),
      sendEmailConfirmation(booking, bookingId),
    ]);

    return NextResponse.json({
      success: true,
      bookingId,
      message: "Booking confirmed! You'll receive a confirmation text shortly.",
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 },
    );
  }
}
