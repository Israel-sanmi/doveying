"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const students = [
  {
    name: "Esther Uche",
    absent: "2x",
    lastTest: "56%",
    avatar: "/avatars/esther.png",
  },
  {
    name: "David Yusuf",
    late: "3x",
    lastTest: "62%",
    avatar: "/avatars/david.png",
  },
];

const AttentionCard = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold tracking-tight text-slate-800">
          Needs Attention
        </h3>
        <Link
          href="#"
          className="text-xs font-semibold text-slate-400 hover:text-main transition-colors uppercase "
        >
          View All
        </Link>
      </div>

      <div className="space-y-4 flex-1">
        {students.map((student) => (
          <div
            key={student.name}
            className="flex items-center gap-4 p-3 rounded-xl border border-slate-50 bg-slate-50/30 hover:bg-slate-50 transition-all group"
          >
            <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
              <AvatarImage src={student.avatar} alt={student.name} />
              <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">
                {student.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-slate-800 truncate">
                {student.name}
              </h4>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight">
                  {student.absent
                    ? `Absent: ${student.absent}`
                    : `Late: ${student.late}`}
                </span>
                <div className="h-1 w-1 rounded-full bg-slate-200" />
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight">
                  Last Test:{" "}
                  <span
                    className={cn(
                      parseInt(student.lastTest) < 60
                        ? "text-red-500"
                        : "text-amber-500",
                    )}
                  >
                    {student.lastTest}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="#"
        className="mt-6 flex items-center justify-end gap-1 text-[10px] font-bold text-slate-400 uppercase  group hover:text-main transition-colors"
      >
        View All{" "}
        <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
};

export default AttentionCard;
