"use client";

import React from "react";
import { Users, CheckCircle2, TrendingUp, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricProps {
  label: string;
  value: string | number;
  trend?: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

const MetricCard = ({
  label,
  value,
  trend,
  icon: Icon,
  iconColor,
  iconBg,
}: MetricProps) => (
  <div className="flex items-center justify-between p-5 bg-white rounded-sm border border-slate-100 shadow-sm">
    <div className="space-y-2">
      <p className="text-xs font-semibold text-slate-400 uppercase ">{label}</p>
      <div className="flex items-center gap-2">
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          {value}
        </h3>
        {trend && (
          <span className="text-xs font-semibold text-main bg-main/10 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
            <TrendingUp className="h-2.5 w-2.5" />
            {trend}
          </span>
        )}
      </div>
    </div>
    <div className={cn("p-3 rounded-sm", iconBg, iconColor)}>
      <Icon className="h-5 w-5" />
    </div>
  </div>
);

const ZiMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MetricCard
        label="Live Assessments"
        value="39"
        icon={CheckCircle2}
        iconColor="text-green-600"
        iconBg="bg-green-50"
      />
      <MetricCard
        label="Registered Candidates"
        value="24"
        trend="83.3%"
        icon={Users}
        iconColor="text-blue-600"
        iconBg="bg-blue-50"
      />
      <MetricCard
        label="Average Pass Rate"
        value="11.8%"
        trend="this cycle"
        icon={TrendingUp}
        iconColor="text-amber-600"
        iconBg="bg-amber-50"
      />
    </div>
  );
};

export default ZiMetrics;
