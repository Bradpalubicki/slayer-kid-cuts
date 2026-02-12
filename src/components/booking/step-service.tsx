"use client";

import { Plus, X, Shield, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SERVICES, type ServiceOption } from "@/lib/booking-utils";

export interface ChildFormData {
  name: string;
  age: string;
  service: ServiceOption | null;
  specialNeeds: boolean;
  specialNeedsNotes: string;
}

interface StepServiceProps {
  childEntries: ChildFormData[];
  updateChildren: (childEntries: ChildFormData[]) => void;
  onNext: () => void;
}

export default function StepService({
  childEntries,
  updateChildren,
  onNext,
}: StepServiceProps) {
  function addChild() {
    updateChildren([
      ...childEntries,
      { name: "", age: "", service: null, specialNeeds: false, specialNeedsNotes: "" },
    ]);
  }

  function removeChild(index: number) {
    updateChildren(childEntries.filter((_, i) => i !== index));
  }

  function selectService(childIndex: number, service: ServiceOption) {
    const updated = [...childEntries];
    updated[childIndex] = {
      ...updated[childIndex],
      service: updated[childIndex].service?.id === service.id ? null : service,
    };
    updateChildren(updated);
  }

  const canAdvance = childEntries.some((c) => c.service !== null);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Choose Your Services</h2>
        <p className="text-sm text-gray-500 mt-1">
          Select a service for each child. One family at a time — your full attention, always.
        </p>
      </div>

      {childEntries.map((child, childIdx) => (
        <div key={childIdx} className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700">
              Child {childIdx + 1}
              {child.service && (
                <span className="ml-2 font-normal text-[#5B8A8A]">
                  — {child.service.name}
                </span>
              )}
            </h3>
            {childEntries.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-red-500 h-7 px-2"
                onClick={() => removeChild(childIdx)}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICES.map((service) => {
              const isSelected = child.service?.id === service.id;
              const Icon = service.featured ? Shield : Scissors;

              return (
                <Card
                  key={service.id}
                  className={cn(
                    "cursor-pointer transition-all border-2",
                    isSelected
                      ? "border-[#5B8A8A] bg-[#5B8A8A]/5 shadow-md"
                      : "border-gray-100 hover:border-[#5B8A8A]/30 hover:shadow-sm"
                  )}
                  onClick={() => selectService(childIdx, service)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                            isSelected ? "bg-[#5B8A8A]/10" : "bg-gray-100"
                          )}
                        >
                          <Icon
                            className={cn(
                              "w-5 h-5",
                              isSelected ? "text-[#5B8A8A]" : "text-gray-400"
                            )}
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-sm text-gray-900">
                              {service.name}
                            </h4>
                            {service.featured && (
                              <Badge className="bg-[#5B8A8A]/10 text-[#5B8A8A] border-[#5B8A8A]/20 text-[10px] px-1.5 py-0">
                                Recommended
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {service.duration}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <span
                        className={cn(
                          "text-lg font-bold flex-shrink-0",
                          isSelected ? "text-[#5B8A8A]" : "text-gray-400"
                        )}
                      >
                        {service.price}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full border-dashed border-gray-300 text-gray-500 hover:text-[#5B8A8A] hover:border-[#5B8A8A]/30"
        onClick={addChild}
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Another Child
      </Button>

      <div className="flex justify-end">
        <Button
          onClick={onNext}
          disabled={!canAdvance}
          className="bg-[#5B8A8A] hover:bg-[#4A7272] text-white rounded-full px-8"
        >
          Next: Pick a Time
        </Button>
      </div>
    </div>
  );
}
