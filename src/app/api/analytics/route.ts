import { NextRequest, NextResponse } from "next/server";

// Types for analytics
interface StylistStats {
  name: string;
  bookings: number;
  revenue: number;
  rating: number;
  specialty: string;
}

interface AtRiskClient {
  id: string;
  name: string;
  phone: string;
  email: string;
  lastVisit: Date;
  totalVisits: number;
  avgDaysBetweenVisits: number;
  predictedNextVisit: Date;
  daysPastPredicted: number;
  churnRisk: number;
}

interface ServiceStats {
  name: string;
  count: number;
  revenue: number;
  percentage: number;
}

// In production, these would query your database
// This is a mock implementation showing the data structure

function calculateChurnRisk(daysSinceLastVisit: number, avgDaysBetweenVisits: number, totalVisits: number): number {
  // Simple churn prediction algorithm
  // Risk increases as days since last visit exceeds typical interval
  const daysOverdue = daysSinceLastVisit - avgDaysBetweenVisits;

  if (daysOverdue <= 0) return 10; // Not overdue

  // Base risk calculation
  let risk = Math.min(95, 30 + (daysOverdue * 1.5));

  // Adjust based on loyalty (total visits)
  if (totalVisits > 10) risk -= 15;
  else if (totalVisits > 5) risk -= 10;
  else if (totalVisits < 3) risk += 10;

  return Math.max(10, Math.min(95, Math.round(risk)));
}

function predictNextAppointment(lastVisit: Date, avgDaysBetweenVisits: number): Date {
  const predicted = new Date(lastVisit);
  predicted.setDate(predicted.getDate() + avgDaysBetweenVisits);
  return predicted;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const timeRange = searchParams.get("timeRange") || "30d";
  const type = searchParams.get("type") || "overview";

  // Calculate date range
  const now = new Date();
  const startDate = new Date();

  switch (timeRange) {
    case "7d":
      startDate.setDate(now.getDate() - 7);
      break;
    case "30d":
      startDate.setDate(now.getDate() - 30);
      break;
    case "90d":
      startDate.setDate(now.getDate() - 90);
      break;
    case "1y":
      startDate.setFullYear(now.getFullYear() - 1);
      break;
  }

  // Mock data - In production, query your database
  if (type === "overview") {
    return NextResponse.json({
      stats: {
        totalBookings: 247,
        bookingsChange: 12.5,
        revenue: 8420,
        revenueChange: 18.3,
        newClients: 34,
        newClientsChange: -5.2,
        retentionRate: 89,
        retentionChange: 2.1,
        avgTicket: 34.10,
        sensoryFriendlyBookings: 45,
      },
      timeRange,
      generatedAt: new Date().toISOString(),
    });
  }

  if (type === "stylists") {
    const stylists: StylistStats[] = [
      { name: "Slayer", bookings: 156, revenue: 5200, rating: 4.9, specialty: "Sensory-Friendly" },
      { name: "Maya", bookings: 52, revenue: 1820, rating: 4.8, specialty: "Creative Styles" },
      { name: "Jordan", bookings: 39, revenue: 1400, rating: 4.7, specialty: "First Haircuts" },
    ];

    return NextResponse.json({ stylists, timeRange });
  }

  if (type === "at-risk") {
    // Mock client data - In production, query clients and calculate risk
    const mockClients = [
      { id: "1", name: "Emma S.", phone: "(702) 555-0123", email: "emma@example.com", lastVisitDays: 45, totalVisits: 8, avgDays: 28 },
      { id: "2", name: "Liam T.", phone: "(702) 555-0456", email: "liam@example.com", lastVisitDays: 52, totalVisits: 5, avgDays: 35 },
      { id: "3", name: "Sophia M.", phone: "(702) 555-0789", email: "sophia@example.com", lastVisitDays: 38, totalVisits: 12, avgDays: 25 },
      { id: "4", name: "Noah K.", phone: "(702) 555-0321", email: "noah@example.com", lastVisitDays: 61, totalVisits: 3, avgDays: 30 },
      { id: "5", name: "Olivia R.", phone: "(702) 555-0654", email: "olivia@example.com", lastVisitDays: 40, totalVisits: 6, avgDays: 28 },
    ];

    const atRiskClients: AtRiskClient[] = mockClients.map(client => {
      const lastVisit = new Date();
      lastVisit.setDate(lastVisit.getDate() - client.lastVisitDays);

      const predictedNext = predictNextAppointment(lastVisit, client.avgDays);
      const daysPastPredicted = Math.max(0, Math.floor((now.getTime() - predictedNext.getTime()) / (1000 * 60 * 60 * 24)));

      return {
        id: client.id,
        name: client.name,
        phone: client.phone,
        email: client.email,
        lastVisit,
        totalVisits: client.totalVisits,
        avgDaysBetweenVisits: client.avgDays,
        predictedNextVisit: predictedNext,
        daysPastPredicted,
        churnRisk: calculateChurnRisk(client.lastVisitDays, client.avgDays, client.totalVisits),
      };
    });

    // Sort by churn risk (highest first)
    atRiskClients.sort((a, b) => b.churnRisk - a.churnRisk);

    return NextResponse.json({
      atRiskClients,
      totalAtRisk: atRiskClients.filter(c => c.churnRisk >= 60).length,
      timeRange
    });
  }

  if (type === "services") {
    const services: ServiceStats[] = [
      { name: "Kids Haircuts", count: 124, revenue: 3100, percentage: 50 },
      { name: "Sensory-Friendly", count: 45, revenue: 1350, percentage: 18 },
      { name: "First Haircuts", count: 32, revenue: 1120, percentage: 13 },
      { name: "Mom & Dad Cuts", count: 28, revenue: 840, percentage: 11 },
      { name: "VIP Home Service", count: 18, revenue: 2700, percentage: 8 },
    ];

    return NextResponse.json({ services, timeRange });
  }

  if (type === "retention") {
    // Retention cohort analysis
    const cohorts = [
      { month: "Aug 2024", newClients: 45, retained30: 38, retained60: 32, retained90: 28 },
      { month: "Sep 2024", newClients: 52, retained30: 44, retained60: 39, retained90: 35 },
      { month: "Oct 2024", newClients: 48, retained30: 42, retained60: 37, retained90: 33 },
      { month: "Nov 2024", newClients: 61, retained30: 55, retained60: 48, retained90: null },
      { month: "Dec 2024", newClients: 38, retained30: 35, retained60: null, retained90: null },
    ];

    return NextResponse.json({
      cohorts,
      overallRetention: 89,
      avgLifetimeValue: 245,
      timeRange
    });
  }

  return NextResponse.json({ error: "Invalid type parameter" }, { status: 400 });
}

// POST endpoint to send outreach messages to at-risk clients
export async function POST(request: NextRequest) {
  try {
    const { clientId, type, message } = await request.json();

    if (!clientId || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, this would:
    // 1. Look up client contact info from database
    // 2. Send SMS via Twilio or email via SendGrid
    // 3. Log the outreach attempt
    // 4. Update client record

    console.log(`Sending ${type} outreach to client ${clientId}: ${message}`);

    // Mock response
    return NextResponse.json({
      success: true,
      message: `${type === "sms" ? "SMS" : "Email"} sent successfully`,
      clientId,
    });
  } catch (error) {
    console.error("Outreach error:", error);
    return NextResponse.json(
      { error: "Failed to send outreach" },
      { status: 500 }
    );
  }
}
