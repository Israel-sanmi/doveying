"use client";

import React from "react";
import {
  Search,
  Plus,
  ExternalLink,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";
import ZiMetrics from "@/components/others/dashboard/ZiMetrics";
import ZiFeaturedCard from "@/components/others/dashboard/ZiFeaturedCard";
import ZiScrollableList from "@/components/others/dashboard/ZiScrollableList";
import ZiChart from "@/components/others/dashboard/ZiChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const birthdays = [
  {
    id: 1,
    title: "Janet Ekene",
    subtitle: "U15 AA • Today",
    extra: "Party",
    variant: "warning" as const,
  },
  {
    id: 2,
    title: "Nuru Bello",
    subtitle: "U15 AB • Tomorrow",
    extra: "12 Nov",
  },
  { id: 3, title: "Ebuka Ani", subtitle: "U15 ZA • Friday", extra: "14 Nov" },
];

const topPerformers = [
  {
    id: 101,
    title: "Amara Okoro",
    subtitle: "Academic Excellance",
    extra: "98%",
    variant: "success" as const,
  },
  {
    id: 102,
    title: "Kelechi Iheanacho",
    subtitle: "Best Behaved",
    extra: "Gold",
    variant: "success" as const,
  },
  {
    id: 103,
    title: "Zainab Musa",
    subtitle: "Perfect Attendance",
    extra: "100%",
    variant: "success" as const,
  },
];

const attendanceData = [
  { label: "Mon", value: 92 },
  { label: "Tue", value: 88 },
  { label: "Wed", value: 95 },
  { label: "Thu", value: 85, highlight: true },
  { label: "Fri", value: 90 },
];

const assessmentData = [
  { label: "Test 1", value: 75 },
  { label: "Test 2", value: 82 },
  { label: "Test 3", value: 68 },
  { label: "Test 4", value: 91 },
  { label: "Test 5", value: 85, highlight: true },
];

const TeacherDashboard = () => {
  return (
    <main className="flex-1 space-y-4 p-3 font-poppins ">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b bg-white rounded-sm p-2 shadow-sm border-slate-50">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
              Dashboard
            </h1>
            <p className="text-xs font-semibold text-slate-400 uppercase ">
              Overview & Analysis
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search curriculum..."
              className="pl-10 h-10 bg-slate-50 border-slate-100 rounded-sm text-sm font-medium focus-visible:ring-main/20"
            />
          </div>
          {/* <Button className="h-10 px-3 bg-main hover:bg-main/90 text-white font-semibold rounded-sm flex items-center gap-2 shadow-lg shadow-main/10">
            <Plus className="h-4 w-4" />
            <span>New Task</span>
          </Button> */}
        </div>
      </div>

      {/* Metrics Row */}
      <ZiMetrics />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left/Main Column - 2/3 wide */}
        <div className="xl:col-span-2 space-y-4">
          <ZiFeaturedCard />

          <div className="flex flex-col gap-1">
            <ZiChart
              title="Student Attendance"
              description="Weekly presence tracking"
              data={attendanceData}
              barColor="bg-main"
              barBgColor="bg-main/5"
              legend={[{ label: "Presence", color: "bg-main" }]}
              height="h-40"
            />
            <ZiChart
              title="Formative Assessment"
              description="Average test scores"
              data={assessmentData}
              barColor="bg-emerald-600"
              barBgColor="bg-emerald-50"
              legend={[{ label: "Average", color: "bg-emerald-600" }]}
              height="h-40"
            />
          </div>
        </div>

        {/* Right Sidebar Column - 1/3 wide */}
        <div className="space-y-4">
          {/* AI Risk Detection Card */}
          {/* <div className="bg-white rounded-sm border border-slate-100 p-4 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-slate-900 uppercase ">
                AI Risk Detection
              </h3>
              <span className=" text-main text-[10px] font-semibold px-2 py-0.5 ">
                All Clear
              </span>
            </div>
            <div className="p-4 bg-slate-50 rounded-sm flex items-center gap-4 border border-slate-100">
              <ShieldCheck className="h-10 w-10 text-main" />

              <p className="text-[10px] font-semibold text-slate-500 leading-relaxed uppercase tracking-tight">
                No cheating risks detected at this moment. Overall candidate
                integrity is high.
              </p>
            </div>
          </div> */}

          <ZiScrollableList title="Upcoming Birthdays" items={birthdays} />

          <ZiScrollableList
            title="Top Performers"
            items={topPerformers}
            maxHeight="max-h-[350px]"
          />
          <ZiScrollableList
            title="Needs Attention"
            items={topPerformers}
            maxHeight="max-h-[350px]"
          />
        </div>
      </div>
    </main>
  );
};

export default TeacherDashboard;
