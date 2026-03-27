"use client";

import React from "react";
import { Sparkles, Activity, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZiFeaturedCard = () => {
  return (
    <div className="relative bg-main rounded-sm p-4 text-white overflow-hidden shadow-xl min-h-[320px] flex flex-col justify-between">
      {/* Background Pattern Dots */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="h-1 w-1 bg-white rounded-full" />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="bg-white text-main text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1.5 uppercase  border border-main">
            <div className="h-1.5 w-1.5 bg-main rounded-sm animate-pulse" />
            Monitoring Live
          </span>
        </div>

        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight leading-tight">
            AI Interactive Analysis
          </h2>
          <p className="text-white font-semibold text-sm">
            Real-time Curriculum Insights
          </p>
        </div>

        <div className="flex items-end gap-12">
          <div className="space-y-1">
            <h3 className="text-4xl font-bold">7</h3>
            <p className="text-[10px] font-bold text-white uppercase ">
              Active Students
            </p>
          </div>
          <div className="space-y-1 text-right ml-auto">
            <h3 className="text-4xl font-bold flex items-baseline gap-1">
              42<span className="text-xl">m</span>
            </h3>
            <p className="text-[10px] font-bold text-white uppercase ">
              Avg Duration
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button className="bg-white text-main font-bold h-12 px-4 rounded-sm shadow-lg shadow-main/20 flex items-center gap-2 group transition-all hover:scale-105 active:scale-95">
          <Sparkles className="h-5 w-5" />
          <span>Get Insight From AI</span>
        </Button>
      </div>
    </div>
  );
};

export default ZiFeaturedCard;
