"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const AIInsightCard = () => {
  return (
    <div className="space-y-4">
      {/* Timeline Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
        <div className="space-y-3 flex-1">
          <div className="flex gap-1 h-8 items-end">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-1 rounded-full",
                  i % 5 === 0
                    ? "h-6 bg-green-500"
                    : i % 3 === 0
                      ? "h-4 bg-orange-400"
                      : "h-2 bg-slate-100",
                )}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] font-semibold text-slate-400 uppercase ">
            <span>2024-10-07</span>
            <span>2024-11-06</span>
          </div>
        </div>
        <div className="ml-4">
          <Avatar className="h-14 w-14 ring-4 ring-slate-50">
            <AvatarImage src="/avatars/teacher-ade.png" alt="Mr. Ade" />
            <AvatarFallback className="bg-main text-white font-semibold">
              MA
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* AI Button Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center min-h-[140px]">
        <Button className="bg-main hover:bg-main-II text-white font-semibold h-12 px-10 rounded-xl shadow-lg shadow-main/20 flex items-center gap-2 group transition-all hover:scale-105 active:scale-95">
          <Sparkles className="h-5 w-5 group-hover:animate-pulse" />
          <span>Get Insight From AI</span>
        </Button>
      </div>
    </div>
  );
};

export default AIInsightCard;
