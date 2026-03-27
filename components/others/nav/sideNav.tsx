"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ChevronRight } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarInset,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import DashboardHeader from "./DashboardHeader";
import { HiAcademicCap, HiOutlineAcademicCap } from "react-icons/hi";
import { BiSpreadsheet } from "react-icons/bi";

const navItems = [
  {
    title: "Dashboard",
    url: "/teacher/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Academics",
    url: "/teacher/academics",
    icon: HiOutlineAcademicCap,
  },
  {
    title: "Curriculum",
    url: "/teacher/curriculum",
    icon: BiSpreadsheet,
    items: [{ title: "Lesson Plans", url: "/teacher/curriculum/lessons" }],
  },
];

export function SideNav({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="flex  min-h-screen w-full bg-slate-50 font-poppins">
        {/* Sidebar Component */}
        <Sidebar className="border-r border-slate-200 bg-white">
          <SidebarHeader className="h-16 flex items-center px-3">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-semibold tracking-tight text-main">
                Doveying
              </span>
            </Link>
          </SidebarHeader>

          <SidebarContent className="px-3 font-poppins py-2 scrollbar-none">
            <SidebarMenu className="gap-1">
              {navItems.map((item) => {
                const hasSub = item.items && item.items.length > 0;
                const isActive =
                  pathname === item.url ||
                  item.items?.some((sub) => pathname === sub.url);

                if (hasSub) {
                  return (
                    <Collapsible
                      key={item.title}
                      asChild
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            isActive={isActive}
                            className="h-11 px-3"
                          >
                            <item.icon
                              className={cn(
                                "h-9 w-9",
                                isActive ? "text-white" : "text-black",
                              )}
                            />
                            <span
                              className={cn(
                                "font-medium ",
                                isActive ? "text-white" : "text-slate-900",
                              )}
                            >
                              {item.title}
                            </span>
                            <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub className="border-l border-slate-200 ml-4 pl-2 my-1">
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === subItem.url}
                                >
                                  <Link href={subItem.url}>
                                    {subItem.title}
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="h-11 px-3"
                    >
                      <Link href={item.url} className="flex items-center gap-3">
                        <item.icon
                          className={cn(
                            "h-9 w-9",
                            isActive ? "text-white" : "text-black",
                          )}
                        />
                        <span
                          className={cn(
                            "font-medium",
                            isActive ? "text-white" : "text-black",
                          )}
                        >
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* Content Area */}
        <SidebarInset className="flex w-full flex-col bg-slate-50">
          <DashboardHeader />
          <div className="flex-1 overflow-auto p-2">
            <div className="bg-slate-50">{children}</div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
