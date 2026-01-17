"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, MessageSquare, Car, Home, Scissors, CheckCircle2, ChevronRight, ChevronLeft, Sparkles, Plus, Trash2, Heart, Shield, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

type ServiceType = {
  id: string;
  name: string;
  duration: string;
  price: string;
  priceNum: number;
  description: string;
  icon: typeof Scissors;
};

type AddOnType = {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  description: string;
};

type ChildType = {
  id: string;
  name: string;
  age: string;
  serviceId: string;
  addOns: string[];
  specialNeeds: boolean;
  specialNeedsNotes: string;
};

type TimeSlot = {
  time: string;
  available: boolean;
};

const services: ServiceType[] = [
  { id: "kids-cut", name: "Kids Haircut", duration: "30 min", price: "$25", priceNum: 25, description: "Standard haircut for children", icon: Scissors },
  { id: "first-cut", name: "First Haircut Package", duration: "45 min", price: "$35", priceNum: 35, description: "Includes certificate & keepsake", icon: Baby },
  { id: "sensory-friendly", name: "Sensory-Friendly Cut", duration: "45 min", price: "$30", priceNum: 30, description: "Extra patience for sensitive kids", icon: Shield },
  { id: "mobile-cut", name: "Mobile Home Visit", duration: "45 min", price: "$40", priceNum: 40, description: "We come to your home!", icon: Car },
];

const addOns: AddOnType[] = [
  { id: "tinsel", name: "Hair Tinsel", price: "$10", priceNum: 10, description: "Sparkly strands that last weeks" },
  { id: "temp-color", name: "Temporary Color", price: "$8", priceNum: 8, description: "Fun wash-out color streaks" },
  { id: "braids", name: "Braids/Styling", price: "$15", priceNum: 15, description: "Creative braids or updo" },
  { id: "glitter", name: "Glitter Spray", price: "$5", priceNum: 5, description: "Magical sparkle finish" },
];

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 9; hour < 18; hour++) {
    const hour12 = hour > 12 ? hour - 12 : hour;
    const ampm = hour >= 12 ? "PM" : "AM";
    slots.push({
      time: `${hour12}:00 ${ampm}`,
      available: Math.random() > 0.3,
    });
    slots.push({
      time: `${hour12}:30 ${ampm}`,
      available: Math.random() > 0.3,
    });
  }
  return slots;
};

const createEmptyChild = (): ChildType => ({
  id: Math.random().toString(36).substr(2, 9),
  name: "",
  age: "",
  serviceId: "kids-cut",
  addOns: [],
  specialNeeds: false,
  specialNeedsNotes: "",
});

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [locationType, setLocationType] = useState<"salon" | "mobile">("salon");
  const [children, setChildren] = useState<ChildType[]>([createEmptyChild()]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeSlots] = useState<TimeSlot[]>(generateTimeSlots());
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    notes: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateChild = (childId: string, updates: Partial<ChildType>) => {
    setChildren(children.map(child =>
      child.id === childId ? { ...child, ...updates } : child
    ));
  };

  const addChild = () => {
    setChildren([...children, createEmptyChild()]);
  };

  const removeChild = (childId: string) => {
    if (children.length > 1) {
      setChildren(children.filter(child => child.id !== childId));
    }
  };

  const toggleAddOn = (childId: string, addOnId: string) => {
    setChildren(children.map(child => {
      if (child.id !== childId) return child;
      const hasAddOn = child.addOns.includes(addOnId);
      return {
        ...child,
        addOns: hasAddOn
          ? child.addOns.filter(id => id !== addOnId)
          : [...child.addOns, addOnId]
      };
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    children.forEach(child => {
      const service = services.find(s => s.id === child.serviceId);
      if (service) total += service.priceNum;
      child.addOns.forEach(addOnId => {
        const addOn = addOns.find(a => a.id === addOnId);
        if (addOn) total += addOn.priceNum;
      });
    });
    if (locationType === "mobile") total += 15; // Mobile surcharge
    return total;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          children: children.map(child => ({
            name: child.name,
            age: child.age,
            service: services.find(s => s.id === child.serviceId),
            addOns: child.addOns.map(id => addOns.find(a => a.id === id)),
            specialNeeds: child.specialNeeds,
            specialNeedsNotes: child.specialNeedsNotes,
          })),
          locationType,
          date: selectedDate?.toLocaleDateString(),
          time: selectedTime,
          parentName: formData.parentName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          notes: formData.notes,
          total: calculateTotal(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setBookingId(data.bookingId);
        setIsComplete(true);
      }
    } catch (error) {
      console.error("Booking failed:", error);
    }

    setIsSubmitting(false);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const canProceedStep1 = children.every(child => child.name && child.age && child.serviceId);
  const canProceedStep2 = selectedDate && selectedTime;
  const canProceedStep3 = formData.parentName && formData.phone && formData.email && (locationType === "salon" || formData.address);

  if (isComplete) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full gradient-hero mx-auto mb-8 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Booking Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-2">
              We&apos;ve sent a confirmation to {formData.email}
            </p>
            {bookingId && (
              <p className="text-sm text-gray-500 mb-8">Booking ID: {bookingId}</p>
            )}

            <Card className="text-left mb-8">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date & Time</span>
                  <span className="font-semibold">{selectedDate?.toLocaleDateString()} at {selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-semibold">{locationType === "salon" ? "Salon Visit" : "Mobile (Your Home)"}</span>
                </div>
                <div className="border-t pt-4">
                  <p className="text-gray-600 mb-2">Children:</p>
                  {children.map(child => {
                    const service = services.find(s => s.id === child.serviceId);
                    return (
                      <div key={child.id} className="flex justify-between py-1">
                        <span className="font-semibold">{child.name} (age {child.age})</span>
                        <span className="text-gray-600">{service?.name}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg text-[#9B5DE5]">${calculateTotal()}</span>
                </div>
              </CardContent>
            </Card>

            <div className="bg-[#9B5DE5]/10 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-2">What&apos;s Next?</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#9B5DE5] mt-0.5" />
                  <span>You&apos;ll receive a confirmation text and email</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#9B5DE5] mt-0.5" />
                  <span>We&apos;ll send a reminder 24 hours before</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#9B5DE5] mt-0.5" />
                  <span>Reply to any message to reschedule if needed</span>
                </li>
              </ul>
            </div>

            <Button
              onClick={() => window.location.href = "/"}
              className="bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white rounded-full px-8"
            >
              Back to Home
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="bg-[#9B5DE5]/10 text-[#9B5DE5] border-[#9B5DE5]/20 mb-4">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Book Your Appointment
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Schedule a <span className="gradient-text">Fun Haircut!</span>
          </h1>
          <p className="text-xl text-gray-600">
            Book online in just a few clicks - we&apos;ll handle the rest!
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  step >= s
                    ? "bg-gradient-to-r from-[#FF6B9D] to-[#9B5DE5] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              {s < 4 && (
                <div
                  className={`w-16 sm:w-24 h-1 mx-2 rounded transition-all ${
                    step > s ? "bg-gradient-to-r from-[#FF6B9D] to-[#9B5DE5]" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {/* Step 1: Children & Services */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-4">Who&apos;s Getting a Haircut?</h2>
              <p className="text-center text-gray-600 mb-8">Add all children who need haircuts - we love seeing the whole family!</p>

              {/* Location Type */}
              <div className="flex gap-4 justify-center mb-8">
                <button
                  onClick={() => setLocationType("salon")}
                  className={`flex-1 max-w-[200px] p-4 rounded-2xl border-2 transition-all ${
                    locationType === "salon"
                      ? "border-[#9B5DE5] bg-[#9B5DE5]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Home className={`w-8 h-8 mx-auto mb-2 ${locationType === "salon" ? "text-[#9B5DE5]" : "text-gray-400"}`} />
                  <p className="font-semibold">Salon Visit</p>
                  <p className="text-sm text-gray-500">Come to us</p>
                </button>
                <button
                  onClick={() => setLocationType("mobile")}
                  className={`flex-1 max-w-[200px] p-4 rounded-2xl border-2 transition-all ${
                    locationType === "mobile"
                      ? "border-[#00BBF9] bg-[#00BBF9]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Car className={`w-8 h-8 mx-auto mb-2 ${locationType === "mobile" ? "text-[#00BBF9]" : "text-gray-400"}`} />
                  <p className="font-semibold">Mobile Visit</p>
                  <p className="text-sm text-gray-500">We come to you (+$15)</p>
                </button>
              </div>

              {/* Children Cards */}
              {children.map((child, index) => (
                <Card key={child.id} className="border-2 border-gray-100">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#9B5DE5]/10 flex items-center justify-center text-[#9B5DE5] font-bold text-sm">
                          {index + 1}
                        </div>
                        Child {index + 1}
                      </CardTitle>
                      {children.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeChild(child.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Child Info */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Child&apos;s Name</Label>
                        <Input
                          value={child.name}
                          onChange={(e) => updateChild(child.id, { name: e.target.value })}
                          placeholder="Enter name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Age</Label>
                        <Input
                          value={child.age}
                          onChange={(e) => updateChild(child.id, { age: e.target.value })}
                          placeholder="e.g., 5"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label>Select Service</Label>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => updateChild(child.id, { serviceId: service.id })}
                            className={`p-3 rounded-xl border-2 text-left transition-all ${
                              child.serviceId === service.id
                                ? "border-[#9B5DE5] bg-[#9B5DE5]/5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <service.icon className={`w-5 h-5 ${child.serviceId === service.id ? "text-[#9B5DE5]" : "text-gray-400"}`} />
                              <div className="flex-1">
                                <p className="font-semibold text-sm">{service.name}</p>
                                <p className="text-xs text-gray-500">{service.price}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Add-ons */}
                    <div className="space-y-2">
                      <Label>Fun Add-ons (Optional)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {addOns.map((addOn) => (
                          <button
                            key={addOn.id}
                            onClick={() => toggleAddOn(child.id, addOn.id)}
                            className={`p-2 rounded-lg border text-left transition-all text-sm ${
                              child.addOns.includes(addOn.id)
                                ? "border-[#FEE440] bg-[#FEE440]/10"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Sparkles className={`w-4 h-4 ${child.addOns.includes(addOn.id) ? "text-yellow-600" : "text-gray-400"}`} />
                              <span>{addOn.name}</span>
                              <span className="ml-auto text-gray-500">{addOn.price}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Special Needs */}
                    <div className="bg-[#00F5D4]/5 rounded-xl p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={`special-${child.id}`}
                          checked={child.specialNeeds}
                          onCheckedChange={(checked) => updateChild(child.id, { specialNeeds: !!checked })}
                        />
                        <Label htmlFor={`special-${child.id}`} className="flex items-center gap-2 cursor-pointer">
                          <Shield className="w-4 h-4 text-[#00F5D4]" />
                          <span>Sensory-friendly accommodations needed</span>
                        </Label>
                      </div>
                      {child.specialNeeds && (
                        <div className="space-y-2">
                          <Textarea
                            value={child.specialNeedsNotes}
                            onChange={(e) => updateChild(child.id, { specialNeedsNotes: e.target.value })}
                            placeholder="Tell us about any sensory sensitivities, autism, ADHD, or other needs so we can prepare..."
                            className="text-sm"
                          />
                          <Link href="/sensory-friendly" className="text-xs text-[#9B5DE5] hover:underline">
                            Learn about our sensory-friendly approach →
                          </Link>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Add Another Child Button */}
              <Button
                variant="outline"
                onClick={addChild}
                className="w-full rounded-xl border-dashed border-2 py-6 hover:bg-[#9B5DE5]/5 hover:border-[#9B5DE5]"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Another Child
              </Button>

              {/* Running Total */}
              <Card className="bg-gradient-to-r from-[#9B5DE5]/5 to-[#00BBF9]/5">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Estimated Total:</span>
                    <span className="text-2xl font-bold text-[#9B5DE5]">${calculateTotal()}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {children.length} child{children.length > 1 ? "ren" : ""} • {locationType === "mobile" ? "Mobile visit (+$15)" : "Salon visit"}
                  </p>
                </CardContent>
              </Card>

              <div className="flex justify-end pt-6">
                <Button
                  onClick={nextStep}
                  disabled={!canProceedStep1}
                  className="bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white rounded-full px-8"
                >
                  Continue
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-8">Pick a Date & Time</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Calendar */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Select Date</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>

                {/* Time Slots */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Select Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedDate ? (
                      <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.time}
                            disabled={!slot.available}
                            onClick={() => setSelectedTime(slot.time)}
                            className={`p-2 rounded-lg text-sm font-medium transition-all ${
                              selectedTime === slot.time
                                ? "bg-[#9B5DE5] text-white"
                                : slot.available
                                ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                : "bg-gray-50 text-gray-300 cursor-not-allowed"
                            }`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Please select a date first
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={prevStep} className="rounded-full px-8">
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white rounded-full px-8"
                >
                  Continue
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-8">Your Contact Information</h2>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(702) 555-1234"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  {locationType === "mobile" && (
                    <div className="space-y-2">
                      <Label htmlFor="address">Home Address</Label>
                      <div className="relative">
                        <Home className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Full address for mobile visit in Henderson/Las Vegas area"
                          className="pl-10 min-h-[80px]"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Anything else we should know?"
                        className="pl-10 min-h-[80px]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={prevStep} className="rounded-full px-8">
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!canProceedStep3}
                  className="bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white rounded-full px-8"
                >
                  Review Booking
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Review & Confirm */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-8">Review Your Booking</h2>

              <Card>
                <CardContent className="p-6 space-y-6">
                  {/* Date, Time & Location */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-500 mb-2">Date & Time</h3>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#FF6B9D]/10 flex items-center justify-center">
                          <CalendarIcon className="w-5 h-5 text-[#FF6B9D]" />
                        </div>
                        <div>
                          <p className="font-bold">{selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
                          <p className="text-sm text-gray-500">{selectedTime}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-500 mb-2">Location</h3>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#00BBF9]/10 flex items-center justify-center">
                          {locationType === "salon" ? (
                            <Home className="w-5 h-5 text-[#00BBF9]" />
                          ) : (
                            <Car className="w-5 h-5 text-[#00BBF9]" />
                          )}
                        </div>
                        <div>
                          <p className="font-bold">{locationType === "salon" ? "Salon Visit" : "Mobile Visit"}</p>
                          <p className="text-sm text-gray-500">
                            {locationType === "salon" ? "1234 Fun Street, Henderson, NV" : formData.address || "Your home"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Children Summary */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-gray-500 mb-4">Children ({children.length})</h3>
                    <div className="space-y-4">
                      {children.map((child, index) => {
                        const service = services.find(s => s.id === child.serviceId);
                        const childAddOns = child.addOns.map(id => addOns.find(a => a.id === id)).filter(Boolean);
                        return (
                          <div key={child.id} className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#9B5DE5]/10 flex items-center justify-center text-[#9B5DE5] font-bold text-sm">
                                  {index + 1}
                                </div>
                                <div>
                                  <p className="font-bold">{child.name}</p>
                                  <p className="text-sm text-gray-500">Age {child.age}</p>
                                </div>
                              </div>
                              <p className="font-bold text-[#9B5DE5]">{service?.price}</p>
                            </div>
                            <div className="ml-11 mt-2">
                              <p className="text-sm text-gray-600">{service?.name}</p>
                              {childAddOns.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {childAddOns.map(addOn => (
                                    <Badge key={addOn?.id} variant="secondary" className="text-xs">
                                      + {addOn?.name} ({addOn?.price})
                                    </Badge>
                                  ))}
                                </div>
                              )}
                              {child.specialNeeds && (
                                <Badge className="mt-2 bg-[#00F5D4]/10 text-[#00F5D4] border-[#00F5D4]/20">
                                  <Shield className="w-3 h-3 mr-1" /> Sensory-friendly
                                </Badge>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-gray-500 mb-2">Contact Information</h3>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm">
                      <p><span className="text-gray-500">Parent:</span> {formData.parentName}</p>
                      <p><span className="text-gray-500">Phone:</span> {formData.phone}</p>
                      <p><span className="text-gray-500">Email:</span> {formData.email}</p>
                    </div>
                    {formData.notes && (
                      <div className="mt-4">
                        <p className="text-gray-500 text-sm">Notes:</p>
                        <p className="text-sm mt-1">{formData.notes}</p>
                      </div>
                    )}
                  </div>

                  {/* Total */}
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-lg">Total</p>
                        <p className="text-sm text-gray-500">
                          {children.length} child{children.length > 1 ? "ren" : ""}
                          {locationType === "mobile" && " + mobile fee"}
                        </p>
                      </div>
                      <p className="text-3xl font-bold text-[#9B5DE5]">${calculateTotal()}</p>
                    </div>
                  </div>

                  <div className="bg-[#FEE440]/10 rounded-xl p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Confirmation:</strong> You&apos;ll receive a text and email confirmation immediately after booking. We&apos;ll send a reminder 24 hours before your appointment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={prevStep} className="rounded-full px-8">
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white rounded-full px-8"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Booking...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Confirm Booking
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
