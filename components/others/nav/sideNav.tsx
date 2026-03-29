"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ChevronRight,
  GraduationCap,
  BookOpen,
  FileText,
  Globe,
  Activity,
  DollarSign,
  BarChart3,
  Users,
  Settings,
  Monitor,
  Ticket
} from "lucide-react";

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
// Removed hi and bi icons for consistency with lucide-react

const navItems = [
  {
    title: "Dashboard",
    url: "/teacher/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Academics",
    url: "/teacher/academics",
    icon: GraduationCap,
    items: [
      { title: "Classes", url: "/teacher/academics/classes" },
      { title: "Students", url: "/teacher/academics/students" },
    ],
  },
  {
    title: "Curriculum",
    url: "/teacher/curriculum",
    icon: BookOpen,
    items: [
      { title: "Lessons", url: "/teacher/curriculum/lessons" },
      { title: "Pedagogy AI", url: "/teacher/curriculum/pedagogy-ai" },
    ],
  },
  {
    title: "Exams",
    url: "/teacher/exams",
    icon: FileText,
    items: [
      { title: "Manage Exams", url: "/teacher/exams/manage" },
      { title: "All Exams", url: "/teacher/exams/all" },
      { title: "Pending Results", url: "/teacher/exams/pending-results" },
      { title: "Declared Results", url: "/teacher/exams/declared-results" },
    ],
  },
  {
    title: "IELTS",
    url: "/teacher/ielts",
    icon: Globe,
    items: [
      { title: "IELTS Module", url: "/teacher/ielts/module" },
      { title: "All Mock Tests", url: "/teacher/ielts/mock-tests" },
      { title: "Create New Test", url: "/teacher/ielts/create-test" },
      { title: "Student Results", url: "/teacher/ielts/results" },
    ],
  },
  {
    title: "Operations",
    url: "/teacher/operations",
    icon: Activity,
    items: [
      { title: "Health", url: "/teacher/operations/health" },
      { title: "Attendance", url: "/teacher/operations/attendance" },
      { title: "Live Monitoring", url: "/teacher/operations/live-monitoring" },
    ],
  },
  {
    title: "Finance",
    url: "/teacher/finance",
    icon: DollarSign,
    items: [
      { title: "Payments", url: "/teacher/finance/payments" },
      { title: "Pending Payments", url: "/teacher/finance/pending" },
      { title: "Successful Payments", url: "/teacher/finance/successful" },
      { title: "Rejected Payments", url: "/teacher/finance/rejected" },
      { title: "Initiated Payments", url: "/teacher/finance/initiated" },
      { title: "All History", url: "/teacher/finance/history" },
      { title: "Coupons", url: "/teacher/finance/coupons" },
    ],
  },
  {
    title: "Analytics",
    url: "/teacher/analytics",
    icon: BarChart3,
    items: [
      { title: "Reports", url: "/teacher/analytics/reports" },
      { title: "Subscription History", url: "/teacher/analytics/subscriptions" },
      { title: "Exam History", url: "/teacher/analytics/exams" },
      { title: "Log History", url: "/teacher/analytics/logs" },
    ],
  },
  {
    title: "Management",
    url: "/teacher/management",
    icon: Users,
    items: [
      { title: "Manage Users", url: "/teacher/management/users" },
      { title: "Support Tickets", url: "/teacher/management/tickets" },
      { title: "Fees", url: "/teacher/management/fees" },
    ],
  },
  {
    title: "Settings",
    url: "/teacher/settings",
    icon: Settings,
    items: [
      { title: "Proctoring", url: "/teacher/settings/proctoring" },
      { title: "Maintenance", url: "/teacher/settings/maintenance" },
      { title: "Tools", url: "/teacher/settings/tools" },
    ],
  },
  {
    title: "CMS Manager",
    url: "/teacher/cms",
    icon: Monitor,
    items: [
      { title: "Homepage Editor", url: "/teacher/cms/homepage" },
      { title: "Page Manager", url: "/teacher/cms/pages" },
      { title: "Menu Manager", url: "/teacher/cms/menus" },
      { title: "Header Editor", url: "/teacher/cms/header" },
      { title: "Footer Editor", url: "/teacher/cms/footer" },
      { title: "Testimonials", url: "/teacher/cms/testimonials" },
    ],
  },
  {
    title: "Support Tickets",
    url: "/teacher/support",
    icon: Ticket,
    items: [
      { title: "Pending Tickets", url: "/teacher/support/pending" },
      { title: "Closed Tickets", url: "/teacher/support/closed" },
      { title: "Answered Tickets", url: "/teacher/support/answered" },
      { title: "All Tickets", url: "/teacher/support/all" },
    ],
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
