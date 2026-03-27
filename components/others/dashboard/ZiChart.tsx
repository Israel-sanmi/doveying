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

      <div className={cn("flex flex-col gap-4", height)}>
        <div
          className={cn(
            "flex items-stretch justify-start gap-1 h-full overflow-x-auto no-scrollbar pb-2",
          )}
        >
          {data.map((point, i) => (
            <div
              key={i}
              className="flex-none w-8 flex flex-col items-center gap-2 group"
            >
              <div className="w-full relative bg-slate-50 rounded-t-sm overflow-hidden flex-1 flex items-end">
                <div
                  className={cn(
                    "w-full transition-all group-hover:opacity-80 absolute bottom-0 z-0",
                    barBgColor,
                    "h-full",
                  )}
                />
                <div
                  className={cn(
                    "w-[85%] mx-auto rounded-t-sm transition-all group-hover:scale-y-105 relative z-10",
                    point.highlight ? "bg-amber-500" : barColor,
                  )}
                  style={{ height: `${point.value}%` }}
                />
              </div>
              <span className="text-[7px] font-bold text-slate-400 uppercase group-hover:text-slate-800 transition-colors truncate w-full text-center">
                {point.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZiChart;
