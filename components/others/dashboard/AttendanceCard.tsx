"use client";

import React, { useState } from "react";
import { TrendingUp, LayoutGrid, BarChart2, AlignLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const AttendanceCard = () => {
  const [view, setView] = useState("Daily");

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold tracking-tight text-slate-800">
          Attendance
        </h3>
        <div className="flex bg-slate-100/50 p-1 rounded-lg border border-slate-100">
          {["Daily", "Weekly"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                "px-4 py-1.5 text-xs font-semibold rounded-md transition-all",
                view === v
                  ? "bg-white text-slate-800 shadow-sm"
                  : "text-slate-400 hover:text-slate-600",
              )}
            >
              {v}
            </button>
          ))}
          <div className="mx-1 h-4 w-[1px] bg-slate-200 self-center" />
          <div className="flex gap-1 px-1">
            <LayoutGrid className="h-4 w-4 text-slate-400 cursor-pointer hover:text-main transition-colors" />
            <BarChart2 className="h-4 w-4 text-main cursor-pointer" />
            <AlignLeft className="h-4 w-4 text-slate-400 cursor-pointer hover:text-main transition-colors" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        {/* Left Side: Donut & Stats */}
        <div className="space-y-6">
          <div className="relative">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              146 / 165{" "}
              <span className="text-slate-400 text-lg font-semibold">
                (98%)
              </span>
              <span className="ml-2 inline-flex items-center text-xs font-semibold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
                <TrendingUp className="h-3 w-3 mr-1" /> Up
              </span>
            </h2>
            <p className="text-xs font-semibold text-slate-400 mt-1 uppercase ">
              Today this week
            </p>
          </div>

          <div className="flex items-center gap-10">
            {/* Donut Masked SVG */}
            <div className="relative h-36 w-36">
              <svg
                viewBox="0 0 36 36"
                className="h-full w-full transform -rotate-90"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="transparent"
                  stroke="#f1f5f9"
                  strokeWidth="4"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="transparent"
                  stroke="#4dab92"
                  strokeWidth="4"
                  strokeDasharray="75 100"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="transparent"
                  stroke="#ff7657"
                  strokeWidth="4"
                  strokeDasharray="15 100"
                  strokeDashoffset="-75"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="transparent"
                  stroke="#ffcc00"
                  strokeWidth="4"
                  strokeDasharray="5 100"
                  strokeDashoffset="-90"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="transparent"
                  stroke="#0066f5"
                  strokeWidth="4"
                  strokeDasharray="5 100"
                  strokeDashoffset="-95"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-800">88%</span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {[
                { label: "Present", color: "bg-[#4dab92]" },
                { label: "Absent", color: "bg-[#ff7657]" },
                { label: "Late", color: "bg-[#ffcc00]" },
                { label: "Excused", color: "bg-[#0066f5]" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className={cn("h-3 w-3 rounded-full", item.color)} />
                  <span className="text-xs font-semibold text-slate-500">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Bar Chart */}
        <div className="flex flex-col justify-end">
          <div className="flex items-end justify-between h-48 gap-2">
            {[75, 50, 60, 45, 80, 70, 40, 65, 55, 60].map((h, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 flex-1 group"
              >
                <div className="w-full relative bg-slate-50 rounded-lg overflow-hidden h-full flex items-end">
                  <div
                    className={cn(
                      "w-full transition-all duration-500 group-hover:opacity-80",
                      i === 4
                        ? "bg-[#4dab92]"
                        : i === 7
                          ? "bg-[#ffcc00]"
                          : "bg-[#cce0ff]",
                    )}
                    style={{ height: `${h}%` }}
                  />
                </div>
                <span className="text-[8px] font-semibold text-slate-400 rotate-45 lg:rotate-0">
                  0522
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 border-t border-slate-50 pt-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-[#4dab92]" />
              <span className="text-[10px] font-semibold text-slate-500">
                88% Present
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-[#ffcc00]" />
              <span className="text-[10px] font-semibold text-slate-500">
                5% Late
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-[#0066f5]" />
              <span className="text-[10px] font-semibold text-slate-500">
                % Excused
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;
