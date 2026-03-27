"use client";

import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Bell,
  User,
  LogOut,
  Settings,
  UserPlus,
  ChevronRight,
  Check,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NextLink from "next/link";
import { CiMail } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { FaBell } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    title: "New User Registered",
    description: "John (ngachtrychphac.hg.u.y.n....",
    time: "3 days ago",
    type: "user",
  },
  {
    id: 2,
    title: "New User Registered",
    description: "test (you-n-us@naver.com) has...",
    time: "1 week ago",
    type: "user",
  },
  {
    id: 3,
    title: "New User Registered",
    description: "test (test123123@test1.com) ha...",
    time: "1 week ago",
    type: "user",
  },
];

const DashboardHeader = () => {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center bg-main px-4 text-white shadow-md">
      {/* Sidebar Toggle */}
      <div className="flex items-center gap-2">
        <SidebarTrigger className="h-10 w-10 text-white transition-colors rounded-md" />
      </div>

      <div>
        <h1 className="font-semibold text-lg">Greenland Hall College</h1>
      </div>

      <div className="ml-auto flex items-center gap-3">
        {/* Notifications */}{" "}
        <button className="h-10  w-10 flex items-center justify-center">
          <MdOutlineMailOutline className="h-7 w-7 text-white" />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-10 bg-white w-10 flex items-center justify-center rounded-md transition-colors relative group outline-none">
              <FaBell className="h-5 w-5 text-main group-hover:scale-110 transition-transform" />
              <div className="absolute top-2 right-2 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[10px] text-whit">
                5
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-80 p-0 font-poppins shadow-sm border-slate-100"
            align="end"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-50">
              <h3 className="text-sm font-semibold text-slate-900">
                Notifications
              </h3>
              <button className="text-[10px] font-semibold text-main hover:underline uppercase ">
                Mark All Read
              </button>
            </div>
            <div className="max-h-[350px] overflow-y-auto">
              {notifications.map((n) => (
                <DropdownMenuItem
                  key={n.id}
                  className="flex items-start gap-4 p-4 cursor-pointer focus:bg-slate-50 border-b border-slate-50 last:border-0 rounded-none"
                >
                  <div className="h-10 w-10 rounded-full bg-main/10 flex items-center justify-center shrink-0">
                    <UserPlus className="h-5 w-5 text-main" />
                  </div>
                  <div className="space-y-1 overflow-hidden">
                    <h4 className="text-xs font-semibold text-slate-900 truncate">
                      {n.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed truncate">
                      {n.description}
                    </p>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-tighter">
                      {n.time}
                    </p>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
            <div className="p-3 bg-slate-50/50 text-center border-t border-slate-50">
              <button className="inline-flex items-center gap-2 text-[10px] font-semibold text-slate-900 hover:text-main transition-colors uppercase ">
                View All Notifications <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex font-poppins items-center gap-3 ml-2 p-1 px-2 rounded-sm transition-all cursor-pointer group">
              <div className="text-left hidden lg:block leading-tight">
                <p className="text-sm font-semibold text-left truncate max-w-[150px]">
                  Stones
                </p>
                <p className="text-xs text-white/80 truncate max-w-[200px]">
                  raymond1122@gmail.com
                </p>
              </div>
              <Avatar className="h-10 w-10 rounded-full bg-white transition-all border-2 border-white/20">
                <AvatarImage src="/avatar-placeholder.png" alt="User" />
                <AvatarFallback className="bg-white text-main font-semibold text-xs">
                  RS
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 font-poppins"
            align="end"
            forceMount
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Stones</p>
                <p className="text-xs leading-none text-muted-foreground">
                  raymond1122@gmail.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => router.push("/login")}
              className="text-red-600 cursor-pointer focus:text-red-600 focus:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
