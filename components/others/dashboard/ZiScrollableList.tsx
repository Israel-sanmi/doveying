"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ListItem {
  id: string | number;
  title: string;
  subtitle: string;
  extra?: string;
  avatar?: string;
  fallback?: string;
  variant?: "success" | "warning" | "default";
}

interface ZiScrollableListProps {
  title: string;
  items: ListItem[];
  maxHeight?: string;
  showViewAll?: boolean;
}

const ZiScrollableList = ({
  title,
  items,
  maxHeight = "max-h-[300px]",
  showViewAll = true,
}: ZiScrollableListProps) => {
  return (
    <div className="bg-white rounded-sm border border-slate-100 shadow-sm flex flex-col overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-slate-50">
        <h3 className="text-sm font-semibold text-main uppercase ">{title}</h3>
        {showViewAll && (
          <Link
            href="#"
            className="text-[10px] font-semibold text-slate-400 hover:text-main transition-colors uppercase  px-2 py-1 rounded-sm border border-slate-100"
          >
            View All
          </Link>
        )}
      </div>

      <div
        className={cn(
          "overflow-y-auto scrollbar-none p-2 space-y-1",
          maxHeight,
        )}
      >
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-between p-3 rounded-sm hover:bg-slate-50 transition-all cursor-pointer border border-transparent hover:border-slate-100 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-white ring-2 ring-slate-50">
                  <AvatarImage src={item.avatar} alt={item.title} />
                  <AvatarFallback className="bg-slate-100 text-slate-600 font-bold text-[10px]">
                    {item.fallback || item.title.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-xs font-semibold text-slate-800 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-semibold tracking-wide uppercase mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <div className="text-right flex items-center gap-2">
                {item.extra && (
                  <span
                    className={cn(
                      "text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase ",
                      item.variant === "success"
                        ? "bg-main/10 text-main border border-main/20"
                        : item.variant === "warning"
                          ? "bg-amber-50 text-amber-600 border border-amber-100"
                          : "bg-slate-50 text-slate-500 border border-slate-100",
                    )}
                  >
                    {item.extra}
                  </span>
                )}
                <ChevronRight className="h-3 w-3 text-slate-300 group-hover:text-slate-500 transition-colors" />
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center bg-slate-50/50 rounded-xl m-2 border border-dashed border-slate-200">
            <p className="text-[10px] font-bold text-slate-400 uppercase ">
              No scheduled items
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZiScrollableList;
