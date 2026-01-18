import { NextRequest, NextResponse } from "next/server";

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

  const childrenSummary = booking.children.map(child => {
    const addOnsText = child.addOns.length > 0
      ? ` + ${child.addOns.map(a => a.name).join(", ")}`
      : "";
    const specialNeedsText = child.specialNeeds ? " ⚠️ SENSORY-FRIENDLY" : "";
    return `• ${child.name} (age ${child.age}): ${child.service.name}${addOnsText}${specialNeedsText}`;
  }).join("\n");

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
          { type: "mrkdwn", text: `*Location:*\n${booking.locationType === "salon" ? "🏠 Salon" : "🚗 Mobile Visit"}` },
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
  const hasSpecialNeeds = booking.children.some(c => c.specialNeeds);
  if (hasSpecialNeeds) {
    message.blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `⚠️ *SENSORY-FRIENDLY ACCOMMODATIONS REQUESTED*\n${booking.children.filter(c => c.specialNeeds).map(c => `${c.name}: ${c.specialNeedsNotes || "No specific notes"}`).join("\n")}`,
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

  const childrenNames = booking.children.map(c => c.name).join(", ");
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
      }
    );

    if (!response.ok) {
      throw new Error(`Twilio API error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Failed to send SMS:", error);
  }
}

// Send email confirmation
async function sendEmailConfirmation(booking: BookingData, bookingId: string) {
  // This would integrate with SendGrid, Resend, or similar
  console.log("Email confirmation would be sent to:", booking.email, "Booking ID:", bookingId);
}

export async function POST(request: NextRequest) {
  try {
    const booking: BookingData = await request.json();

    // Validate required fields
    if (!booking.children || booking.children.length === 0 || !booking.date || !booking.time || !booking.parentName || !booking.phone || !booking.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate each child has required info
    for (const child of booking.children) {
      if (!child.name || !child.age || !child.service) {
        return NextResponse.json(
          { error: "Each child must have name, age, and service selected" },
          { status: 400 }
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
      { status: 500 }
    );
  }
}
