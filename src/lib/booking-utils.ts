import { isSunday, isMonday, isBefore, startOfDay, addDays } from "date-fns";

// ------------------------------------------------------------------
// Service definitions
// ------------------------------------------------------------------

export interface ServiceOption {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  duration: string;
  durationMin: number;
  description: string;
  featured: boolean;
}

export const SERVICES: ServiceOption[] = [
  {
    id: "sensory-friendly",
    name: "Sensory-Friendly Haircut",
    price: "$45",
    priceNum: 45,
    duration: "60 min",
    durationMin: 60,
    description:
      "Full sensory accommodations, intake questionnaire, calm environment, and patience at every step.",
    featured: true,
  },
  {
    id: "kids-haircut",
    name: "Kids Haircut",
    price: "$30",
    priceNum: 30,
    duration: "30 min",
    durationMin: 30,
    description: "Calm, private haircut experience. One family at a time.",
    featured: false,
  },
  {
    id: "buzz-cut",
    name: "Buzz Cut / Ends Trimmed",
    price: "$20",
    priceNum: 20,
    duration: "15–20 min",
    durationMin: 20,
    description:
      "Quick buzz cut or ends trim in a sensory-friendly environment.",
    featured: false,
  },
  {
    id: "bang-trim",
    name: "Bang Trim",
    price: "$15",
    priceNum: 15,
    duration: "10–15 min",
    durationMin: 15,
    description: "Quick bang trim in a calm, private suite.",
    featured: false,
  },
];

// ------------------------------------------------------------------
// Business hours
// ------------------------------------------------------------------

export const BUSINESS_HOURS = {
  openHour: 10, // 10:00 AM
  lunchStart: 13, // 1:00 PM
  lunchEnd: 14, // 2:00 PM
  closeHour: 18, // 6:00 PM
};

// ------------------------------------------------------------------
// Date helpers
// ------------------------------------------------------------------

/** Disable Sun, Mon, past dates, and today (need 1-day lead time) */
export function isDateDisabled(date: Date): boolean {
  const tomorrow = addDays(startOfDay(new Date()), 1);
  if (isBefore(startOfDay(date), tomorrow)) return true;
  if (isSunday(date) || isMonday(date)) return true;
  return false;
}

// ------------------------------------------------------------------
// Time slot generation
// ------------------------------------------------------------------

function formatTime(hour: number, min: number): string {
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `${displayHour}:${min.toString().padStart(2, "0")} ${period}`;
}

/**
 * Generate available time slots based on total appointment duration.
 * Slots are 30-min increments. Excludes slots where the appointment
 * would bleed into the lunch break (1–2 PM) or past closing (6 PM).
 */
export function generateTimeSlots(totalDurationMin: number): { morning: string[]; afternoon: string[] } {
  const { openHour, lunchStart, lunchEnd, closeHour } = BUSINESS_HOURS;
  const morning: string[] = [];
  const afternoon: string[] = [];

  // Morning: 10:00 AM to 1:00 PM
  for (let hour = openHour; hour < lunchStart; hour++) {
    for (const min of [0, 30]) {
      const slotStartMin = hour * 60 + min;
      const slotEndMin = slotStartMin + totalDurationMin;
      if (slotEndMin <= lunchStart * 60) {
        morning.push(formatTime(hour, min));
      }
    }
  }

  // Afternoon: 2:00 PM to 6:00 PM
  for (let hour = lunchEnd; hour < closeHour; hour++) {
    for (const min of [0, 30]) {
      const slotStartMin = hour * 60 + min;
      const slotEndMin = slotStartMin + totalDurationMin;
      if (slotEndMin <= closeHour * 60) {
        afternoon.push(formatTime(hour, min));
      }
    }
  }

  return { morning, afternoon };
}

// ------------------------------------------------------------------
// Price / duration calculation
// ------------------------------------------------------------------

export function calculateTotals(children: Array<{ service: ServiceOption | null }>) {
  let totalPrice = 0;
  let totalDuration = 0;
  for (const child of children) {
    if (child.service) {
      totalPrice += child.service.priceNum;
      totalDuration += child.service.durationMin;
    }
  }
  return { totalPrice, totalDuration };
}
