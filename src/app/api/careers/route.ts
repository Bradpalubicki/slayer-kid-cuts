import { NextRequest, NextResponse } from "next/server";

interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ApplicationData = await request.json();

    if (!data.name || !data.email || !data.phone || !data.experience) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (data.experience.length > 5000 || (data.message && data.message.length > 5000)) {
      return NextResponse.json(
        { error: "Message too long" },
        { status: 400 },
      );
    }

    // Send Slack notification
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhookUrl) {
      const message = {
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "💼 New Job Application!",
              emoji: true,
            },
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*Name:*\n${data.name}` },
              { type: "mrkdwn", text: `*Email:*\n${data.email}` },
              { type: "mrkdwn", text: `*Phone:*\n${data.phone}` },
            ],
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Experience:*\n${data.experience}`,
            },
          },
        ],
      };

      if (data.message) {
        message.blocks.push({
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Why Little Roots:*\n${data.message}`,
          },
        } as typeof message.blocks[number]);
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

    return NextResponse.json({
      success: true,
      message: "Application received! We'll be in touch.",
    });
  } catch (error) {
    console.error("Careers form error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}
