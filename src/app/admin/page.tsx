"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  AlertTriangle,
  Star,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Phone,
  Mail,
  Scissors,
  Brain,
  Crown,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data - In production, this would come from your database via API
const mockStats = {
  totalBookings: 247,
  bookingsChange: 12.5,
  revenue: 8420,
  revenueChange: 18.3,
  newClients: 34,
  newClientsChange: -5.2,
  retention: 89,
  retentionChange: 2.1,
};

const mockTopStylists = [
  {
    name: "Carla",
    bookings: 156,
    revenue: 5200,
    rating: 4.9,
    specialty: "Sensory-Friendly",
  },
  {
    name: "Maya",
    bookings: 52,
    revenue: 1820,
    rating: 4.8,
    specialty: "Creative Styles",
  },
  {
    name: "Jordan",
    bookings: 39,
    revenue: 1400,
    rating: 4.7,
    specialty: "First Haircuts",
  },
];

const mockAtRiskClients = [
  {
    name: "Emma S.",
    lastVisit: "45 days ago",
    visits: 8,
    predictedChurn: 78,
    phone: "(702) 555-0123",
  },
  {
    name: "Liam T.",
    lastVisit: "52 days ago",
    visits: 5,
    predictedChurn: 85,
    phone: "(702) 555-0456",
  },
  {
    name: "Sophia M.",
    lastVisit: "38 days ago",
    visits: 12,
    predictedChurn: 62,
    phone: "(702) 555-0789",
  },
  {
    name: "Noah K.",
    lastVisit: "61 days ago",
    visits: 3,
    predictedChurn: 92,
    phone: "(702) 555-0321",
  },
  {
    name: "Olivia R.",
    lastVisit: "40 days ago",
    visits: 6,
    predictedChurn: 71,
    phone: "(702) 555-0654",
  },
];

const mockRecentBookings = [
  {
    client: "Jackson W.",
    service: "Kids Haircut",
    time: "2:00 PM",
    stylist: "Carla",
    type: "salon",
    specialNeeds: true,
  },
  {
    client: "Ava B.",
    service: "First Haircut",
    time: "2:30 PM",
    stylist: "Carla",
    type: "salon",
    specialNeeds: false,
  },
  {
    client: "Mason L.",
    service: "Sensory-Friendly Haircut",
    time: "4:00 PM",
    stylist: "Carla",
    type: "mobile",
    specialNeeds: false,
  },
  {
    client: "Isabella C.",
    service: "Kids Haircut",
    time: "5:00 PM",
    stylist: "Maya",
    type: "salon",
    specialNeeds: false,
  },
];

const mockServiceBreakdown = [
  { name: "Kids Haircuts", count: 124, percentage: 50 },
  { name: "Sensory-Friendly", count: 45, percentage: 18 },
  { name: "First Haircuts", count: 32, percentage: 13 },
  { name: "Buzz Cut / Trim", count: 28, percentage: 11 },
  { name: "VIP Home Service", count: 18, percentage: 8 },
];

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("30d");

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold gradient-text">
                Analytics Dashboard
              </h1>
              <p className="text-gray-600">
                Track performance, retention, and revenue
              </p>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <Button variant="outline" size="sm" className="gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total Bookings",
              value: mockStats.totalBookings,
              change: mockStats.bookingsChange,
              icon: Calendar,
              color: "#9B5DE5",
            },
            {
              label: "Revenue",
              value: `$${mockStats.revenue.toLocaleString()}`,
              change: mockStats.revenueChange,
              icon: DollarSign,
              color: "#00F5D4",
            },
            {
              label: "New Clients",
              value: mockStats.newClients,
              change: mockStats.newClientsChange,
              icon: Users,
              color: "#FF6B9D",
            },
            {
              label: "Retention Rate",
              value: `${mockStats.retention}%`,
              change: mockStats.retentionChange,
              icon: TrendingUp,
              color: "#00BBF9",
            },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${metric.color}20` }}
                    >
                      <metric.icon
                        className="w-6 h-6"
                        style={{ color: metric.color }}
                      />
                    </div>
                    <Badge
                      className={`${
                        metric.change >= 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {metric.change >= 0 ? (
                        <ArrowUpRight className="w-3 h-3 mr-1" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3 mr-1" />
                      )}
                      {Math.abs(metric.change)}%
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-sm text-gray-500">{metric.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Top Stylists */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Top Stylists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTopStylists.map((stylist, index) => (
                    <div key={stylist.name} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#9B5DE5] flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{stylist.name}</p>
                          {index === 0 && (
                            <Crown className="w-4 h-4 text-yellow-400" />
                          )}
                        </div>
                        <p className="text-xs text-gray-500">
                          {stylist.specialty}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${stylist.revenue}</p>
                        <p className="text-xs text-gray-500">
                          {stylist.bookings} cuts
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#9B5DE5]" />
                  Service Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockServiceBreakdown.map((service) => (
                    <div key={service.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">
                          {service.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {service.count}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#FF6B9D] to-[#9B5DE5] rounded-full"
                          style={{ width: `${service.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Today's Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-0 shadow-lg h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#00BBF9]" />
                  Today&apos;s Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockRecentBookings.map((booking, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-sm">
                            {booking.client}
                          </p>
                          {booking.specialNeeds && (
                            <Brain className="w-4 h-4 text-[#00F5D4]" />
                          )}
                        </div>
                        <p className="text-xs text-gray-500">
                          {booking.service}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{booking.time}</p>
                        <Badge variant="outline" className="text-xs">
                          {booking.type === "mobile" ? "🚗 Mobile" : "🏠 Salon"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* At-Risk Clients - Retention Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card className="border-0 shadow-lg border-l-4 border-l-[#FF6B9D]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-[#FF6B9D]" />
                <div>
                  <span className="text-xl">Clients At Risk of Churning</span>
                  <p className="text-sm font-normal text-gray-500 mt-1">
                    These kids haven&apos;t booked in a while. Reach out to keep
                    them coming back!
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500 border-b">
                      <th className="pb-3 font-medium">Client</th>
                      <th className="pb-3 font-medium">Last Visit</th>
                      <th className="pb-3 font-medium">Total Visits</th>
                      <th className="pb-3 font-medium">Churn Risk</th>
                      <th className="pb-3 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockAtRiskClients.map((client) => (
                      <tr key={client.name} className="border-b last:border-0">
                        <td className="py-4">
                          <p className="font-semibold">{client.name}</p>
                        </td>
                        <td className="py-4 text-gray-600">
                          {client.lastVisit}
                        </td>
                        <td className="py-4 text-gray-600">
                          {client.visits} visits
                        </td>
                        <td className="py-4">
                          <Badge
                            className={`${
                              client.predictedChurn >= 80
                                ? "bg-red-100 text-red-700"
                                : client.predictedChurn >= 60
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-green-100 text-green-700"
                            }`}
                          >
                            {client.predictedChurn}% risk
                          </Badge>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="gap-1"
                            >
                              <Phone className="w-3 h-3" />
                              Call
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="gap-1"
                            >
                              <Mail className="w-3 h-3" />
                              SMS
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-[#9B5DE5]/5 rounded-xl">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#9B5DE5]" />
                  AI-Powered Prediction
                </h4>
                <p className="text-sm text-gray-600">
                  Based on visit history and average booking intervals, our
                  system predicts when each client is likely to need their next
                  haircut. Clients who go 30+ days past their predicted date are
                  flagged for outreach.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  className="h-auto py-4 flex-col gap-2"
                >
                  <Calendar className="w-6 h-6 text-[#9B5DE5]" />
                  <span>View Full Calendar</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex-col gap-2"
                >
                  <Users className="w-6 h-6 text-[#FF6B9D]" />
                  <span>Client Directory</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex-col gap-2"
                >
                  <Scissors className="w-6 h-6 text-[#00BBF9]" />
                  <span>Manage Services</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex-col gap-2"
                >
                  <BarChart3 className="w-6 h-6 text-[#00F5D4]" />
                  <span>Export Reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
