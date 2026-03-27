"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DataPoint {
  label: string;
  value: number;
  highlight?: boolean;
}

interface ZiChartProps {
  title: string;
  description: string;
  data: DataPoint[];
  barColor?: string;
  barBgColor?: string;
  legend?: { label: string; color: string }[];
  className?: string;
  height?: string;
}

const ZiChart = ({
  title,
  description,
  data,
  barColor = "bg-main",
  barBgColor = "bg-main/10",
  legend,
  className,
  height = "h-48",
}: ZiChartProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-sm border border-slate-100 p-6 shadow-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-sm font-semibold text-main tracking-tight uppercase ">
            {title}
          </h3>
          <p className="text-[10px] font-semibold text-slate-400 mt-1 uppercase tracking-tight">
            {description}
          </p>
        </div>
        {legend && (
          <div className="flex items-center gap-4 text-[10px] font-semibold uppercase  text-slate-400">
            {legend.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <div className={cn("h-2 w-2 rounded-full", item.color)} />
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={cn("flex items-end justify-between gap-2 px-2", height)}>
        {data.map((point, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center gap-3 group"
          >
            <div className="w-full relative bg-slate-50 rounded-lg overflow-hidden h-full flex items-end">
              <div
                className={cn(
                  "w-full transition-all group-hover:opacity-80 absolute bottom-0",
                  barBgColor,
                  "h-full",
                )}
              />
              <div
                className={cn(
                  "w-[70%] mx-auto rounded-md transition-all group-hover:scale-y-105 z-10",
                  point.highlight ? "bg-amber-500" : barColor,
                )}
                style={{ height: `${point.value}%` }}
              />
            </div>
            <span className="text-[8px] font-bold text-slate-400 uppercase  group-hover:text-slate-800 transition-colors">
              {point.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZiChart;
