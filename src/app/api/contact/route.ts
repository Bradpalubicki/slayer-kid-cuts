import { NextRequest, NextResponse } from "next/server";

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Send to Slack
async function sendToSlack(contact: ContactData) {
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!slackWebhookUrl) {
    console.log("Slack webhook not configured");
    return;
  }

  const subjectLabels: Record<string, string> = {
    booking: "Booking Question",
    reschedule: "Reschedule Request",
    pricing: "Pricing Inquiry",
    mobile: "Mobile Service",
    party: "Birthday Party",
    other: "General Inquiry",
  };

  const message = {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "New Contact Form Submission",
          emoji: true,
        },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*From:*\n${contact.name}` },
          { type: "mrkdwn", text: `*Subject:*\n${subjectLabels[contact.subject] || contact.subject}` },
          { type: "mrkdwn", text: `*Email:*\n${contact.email}` },
          { type: "mrkdwn", text: `*Phone:*\n${contact.phone || "Not provided"}` },
        ],
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Message:*\n${contact.message}`,
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: { type: "plain_text", text: "Reply via Email" },
            url: `mailto:${contact.email}?subject=Re: ${subjectLabels[contact.subject] || contact.subject}`,
          },
        ],
      },
    ],
  };

  try {
    await fetch(slackWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });
  } catch (error) {
    console.error("Failed to send to Slack:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const contact: ContactData = await request.json();

    // Validate required fields
    if (!contact.name || !contact.email || !contact.subject || !contact.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send to Slack
    await sendToSlack(contact);

    // In production, also save to database
    // await db.contacts.create(contact);

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting us! We'll respond within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
