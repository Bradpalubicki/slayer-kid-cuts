"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import type { ChildFormData } from "./step-service";

interface StepDetailsProps {
  childEntries: ChildFormData[];
  parentName: string;
  phone: string;
  email: string;
  notes: string;
  updateChildren: (childEntries: ChildFormData[]) => void;
  updateDetails: (fields: { parentName?: string; phone?: string; email?: string; notes?: string }) => void;
  onNext: () => void;
  onBack: () => void;
}

const AGE_OPTIONS = [
  "Under 1", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17",
];

export default function StepDetails({
  childEntries,
  parentName,
  phone,
  email,
  notes,
  updateChildren,
  updateDetails,
  onNext,
  onBack,
}: StepDetailsProps) {
  function updateChild(index: number, field: Partial<ChildFormData>) {
    const updated = [...childEntries];
    updated[index] = { ...updated[index], ...field };
    updateChildren(updated);
  }

  const canAdvance =
    parentName.trim() !== "" &&
    phone.trim().length >= 10 &&
    email.includes("@") &&
    childEntries.every((c) => c.name.trim() !== "" && c.age !== "");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Your Details</h2>
        <p className="text-sm text-gray-500 mt-1">
          Tell us about you and your child so Carla can prepare the perfect experience.
        </p>
      </div>

      {/* Parent info */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-700">Parent / Guardian</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="parentName">Full Name *</Label>
            <Input
              id="parentName"
              value={parentName}
              onChange={(e) => updateDetails({ parentName: e.target.value })}
              placeholder="Your name"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => updateDetails({ phone: e.target.value })}
              placeholder="(702) 555-1234"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => updateDetails({ email: e.target.value })}
            placeholder="you@email.com"
            required
          />
        </div>
      </div>

      {/* Children info */}
      {childEntries.map((child, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-700">
            Child {idx + 1}
            {child.service && (
              <span className="ml-1 font-normal text-gray-400">
                — {child.service.name}
              </span>
            )}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor={`childName-${idx}`}>Child&apos;s Name *</Label>
              <Input
                id={`childName-${idx}`}
                value={child.name}
                onChange={(e) => updateChild(idx, { name: e.target.value })}
                placeholder="First name"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor={`childAge-${idx}`}>Age *</Label>
              <select
                id={`childAge-${idx}`}
                value={child.age}
                onChange={(e) => updateChild(idx, { age: e.target.value })}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
              >
                <option value="">Select age</option>
                {AGE_OPTIONS.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id={`sensory-${idx}`}
              checked={child.specialNeeds}
              onCheckedChange={(checked) =>
                updateChild(idx, { specialNeeds: checked === true })
              }
              className="mt-0.5"
            />
            <div className="flex flex-col gap-1">
              <Label htmlFor={`sensory-${idx}`} className="text-sm cursor-pointer">
                My child needs sensory accommodations
              </Label>
              <p className="text-xs text-gray-400">
                Carla will adjust lighting, sound, and approach for comfort.
              </p>
            </div>
          </div>

          {child.specialNeeds && (
            <div className="flex flex-col gap-1.5 pl-7">
              <Label htmlFor={`sensoryNotes-${idx}`}>
                Sensory notes <span className="text-gray-400">(optional)</span>
              </Label>
              <Textarea
                id={`sensoryNotes-${idx}`}
                value={child.specialNeedsNotes}
                onChange={(e) =>
                  updateChild(idx, { specialNeedsNotes: e.target.value })
                }
                placeholder="Tell us about sensitivities, comforts, favorites, anything that helps..."
                rows={3}
              />
            </div>
          )}
        </div>
      ))}

      {/* Additional notes */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="notes">
          Additional Notes <span className="text-gray-400">(optional)</span>
        </Label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => updateDetails({ notes: e.target.value })}
          placeholder="Anything else Carla should know?"
          rows={2}
        />
      </div>

      {/* Intake callout */}
      <Card className="border-[#D4E5E5] bg-[#D4E5E5]/20">
        <CardContent className="p-4 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#5B8A8A] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600">
            After booking, you&apos;ll receive the full intake questionnaire so Carla can
            prepare the space specifically for your child.
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="rounded-full px-6"
        >
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!canAdvance}
          className="bg-[#5B8A8A] hover:bg-[#4A7272] text-white rounded-full px-8"
        >
          Next: Review
        </Button>
      </div>
    </div>
  );
}
