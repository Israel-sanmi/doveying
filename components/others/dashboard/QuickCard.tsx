import React from "react";
import { TrendingDown, TrendingUp, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickCardProps {
  title: string;
  value: string;
  description?: string;
  trend?: string;
  isNegative?: boolean;
}

const QuickCard = ({
  title,
  value,
  description,
  trend,
  isNegative,
}: QuickCardProps) => (
  <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50 transition-all hover:shadow-md hover:shadow-slate-200/60 group relative overflow-hidden">
    <div className="flex items-center justify-between h-8">
      <h3 className="text-sm font-medium text-slate-400 capitalize tracking-tight">
        {title}
      </h3>
      {trend && (
        <span
          className={cn(
            "flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-sm border",
            isNegative
              ? "text-red-500 bg-red-50 border-red-100"
              : "text-emerald-500 bg-emerald-50 border-emerald-100",
          )}
        >
          {isNegative ? (
            <TrendingDown className="h-3 w-3" />
          ) : (
            <TrendingUp className="h-3 w-3" />
          )}
          {trend}
        </span>
      )}
    </div>

    <div className="mt-4">
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-slate-900 tracking-tight">
          {value}
        </span>
      </div>

      {description && (
        <div className="mt-4 space-y-1">
          <p
            className={cn(
              "text-sm font-medium flex items-center gap-1",
              isNegative ? "text-red-500" : "text-emerald-500",
            )}
          >
            {description}
            {isNegative ? (
              <TrendingDown className="h-3 w-3 rotate-45" />
            ) : (
              <TrendingUp className="h-3 w-3" />
            )}
          </p>
          <p className="text-xs text-slate-400 font-medium tracking-tight">
            Based on total sales revenue
          </p>
        </div>
      )}
    </div>
  </div>
);

export default QuickCard;
