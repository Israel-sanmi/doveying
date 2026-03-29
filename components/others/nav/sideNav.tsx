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
  Users,
  Settings,
  Monitor,
  Ticket,
  NotebookPen,
  Video,
  MessageSquare,
  UserRound,
  FileBarChart,
  ShieldAlert,
  Bus,
  Award,
  School,
  LifeBuoy,
  Layout,
  CalendarDays,
  Mail,
  Zap
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
    title: "Assignments",
    url: "/teacher/assignments",
    icon: NotebookPen,
    items: [
      { title: "Homeworks", url: "/teacher/assignments/homeworks" },
      { title: "Add Homework", url: "/teacher/assignments/add" },
      { title: "Generate Reports", url: "/teacher/assignments/reports" },
    ],
  },
  {
    title: "Live Classes",
    url: "/teacher/live-classes",
    icon: Video,
    items: [
      { title: "Zoom Live Classes", url: "/teacher/live-classes/zoom" },
      { title: "GMeet Live Classes", url: "/teacher/live-classes/gmeet" },
      { title: "Live Classes", url: "/teacher/live-classes/all" },
      { title: "Live Meeting", url: "/teacher/live-classes/meeting" },
      { title: "Reports", url: "/teacher/live-classes/reports" },
      { title: "Settings", url: "/teacher/live-classes/settings" },
    ],
  },
  {
    title: "Examinations",
    url: "/teacher/exams",
    icon: FileText,
    items: [
      { title: "Manage Exams", url: "/teacher/exams/manage" },
      { title: "All Exams", url: "/teacher/exams/all" },
      { title: "Pending Results", url: "/teacher/exams/pending-results" },
      { title: "Declared Results", url: "/teacher/exams/declared-results" },
      { title: "Exam Schedule", url: "/teacher/exams/schedule" },
      { title: "Print Marksheet", url: "/teacher/exams/print-marksheet" },
    ],
  },
  {
    title: "Curriculum",
    url: "/teacher/curriculum",
    icon: BookOpen,
    items: [
      { title: "Lessons", url: "/teacher/curriculum/lessons" },
      { title: "AI Learning", url: "/teacher/curriculum/ai-learning" },
    ],
  },
  {
    title: "Operations",
    url: "/teacher/operations",
    icon: Activity,
    items: [
      { title: "Attendance", url: "/teacher/operations/attendance" },
      { title: "QR-code Attendance", url: "/teacher/operations/qr-attendance" },
      { title: "Health", url: "/teacher/operations/health" },
      { title: "Live Monitoring", url: "/teacher/operations/live-monitoring" },
    ],
  },
  {
    title: "Finance",
    url: "/teacher/finance",
    icon: DollarSign,
    items: [
      { title: "Payments", url: "/teacher/finance/payments" },
      { title: "Collect Fees", url: "/teacher/finance/collect-fees" },
      { title: "Offline Bank Payments", url: "/teacher/finance/offline-payments" },
      { title: "Search Fees Payment", url: "/teacher/finance/search-payments" },
      { title: "Search Due Fees", url: "/teacher/finance/search-due" },
      { title: "Fees Master", url: "/teacher/finance/fees-master" },
      { title: "Quick Fees", url: "/teacher/finance/quick-fees" },
      { title: "Fees Group", url: "/teacher/finance/fees-group" },
      { title: "Fees Type", url: "/teacher/finance/fees-type" },
      { title: "Fees Discount", url: "/teacher/finance/fees-discount" },
      { title: "Fees Carry Forward", url: "/teacher/finance/fees-carry-forward" },
      { title: "Fees Reminder", url: "/teacher/finance/fees-reminder" },
    ],
  },
  {
    title: "Communication",
    url: "/teacher/communication",
    icon: MessageSquare,
    items: [
      { title: "Notice Board", url: "/teacher/communication/notice-board" },
      { title: "Send Email", url: "/teacher/communication/send-email" },
      { title: "Send SMS", url: "/teacher/communication/send-sms" },
      { title: "Email/SMS Logs", url: "/teacher/communication/logs" },
      { title: "Templates", url: "/teacher/communication/templates" },
      { title: "Calendar", url: "/teacher/communication/calendar" },
      { title: "Holidays", url: "/teacher/communication/holidays" },
    ],
  },
  {
    title: "Students",
    url: "/teacher/students",
    icon: UserRound,
    items: [
      { title: "Student Details", url: "/teacher/students/details" },
      { title: "Admission", url: "/teacher/students/admission" },
      { title: "Online Admission", url: "/teacher/students/online-admission" },
      { title: "Disabled Students", url: "/teacher/students/disabled" },
      { title: "Multi Class Student", url: "/teacher/students/multi-class" },
      { title: "Bulk Delete", url: "/teacher/students/bulk-delete" },
      { title: "Categories", url: "/teacher/students/categories" },
      { title: "Student House", url: "/teacher/students/house" },
    ],
  },
  {
    title: "Reports",
    url: "/teacher/reports",
    icon: FileBarChart,
    items: [
      { title: "Student Info", url: "/teacher/reports/student-info" },
      { title: "Finance", url: "/teacher/reports/finance" },
      { title: "Attendance", url: "/teacher/reports/attendance" },
      { title: "Examinations", url: "/teacher/reports/examinations" },
      { title: "Lesson Plan", url: "/teacher/reports/lesson-plan" },
      { title: "Homework", url: "/teacher/reports/homework" },
      { title: "User Log", url: "/teacher/reports/user-log" },
      { title: "Audit Trail", url: "/teacher/reports/audit-trail" },
    ],
  },
  {
    title: "IELTS",
    url: "/teacher/ielts",
    icon: Globe,
    items: [
      { title: "IELTS Module", url: "/teacher/ielts/module" },
      { title: "Mock Tests", url: "/teacher/ielts/mock-tests" },
      { title: "Create Test", url: "/teacher/ielts/create-test" },
      { title: "Student Results", url: "/teacher/ielts/results" },
    ],
  },
  {
    title: "Behaviour",
    url: "/teacher/behaviour",
    icon: ShieldAlert,
    items: [
      { title: "Assign Incident", url: "/teacher/behaviour/assign-incident" },
      { title: "Incidents", url: "/teacher/behaviour/incidents" },
      { title: "Reports", url: "/teacher/behaviour/reports" },
      { title: "Settings", url: "/teacher/behaviour/settings" },
    ],
  },
  {
    title: "Transport",
    url: "/teacher/transport",
    icon: Bus,
    items: [
      { title: "Routes", url: "/teacher/transport/routes" },
      { title: "Vehicles", url: "/teacher/transport/vehicles" },
      { title: "Pickup Points", url: "/teacher/transport/pickup-points" },
      { title: "Assign Vehicle", url: "/teacher/transport/assign-vehicle" },
      { title: "Fees", url: "/teacher/transport/fees" },
    ],
  },
  {
    title: "Certificates",
    url: "/teacher/certificates",
    icon: Award,
    items: [
      { title: "Student Certificate", url: "/teacher/certificates/student" },
      { title: "Generate Certificate", url: "/teacher/certificates/generate" },
      { title: "ID Cards", url: "/teacher/certificates/id-cards" },
    ],
  },
  {
    title: "Alumni",
    url: "/teacher/alumni",
    icon: School,
    items: [
      { title: "Manage Alumni", url: "/teacher/alumni/manage" },
      { title: "Events", url: "/teacher/alumni/events" },
    ],
  },
  {
    title: "Support",
    url: "/teacher/support",
    icon: LifeBuoy,
    items: [
      { title: "All Tickets", url: "/teacher/support/all" },
      { title: "Pending Tickets", url: "/teacher/support/pending" },
      { title: "Closed Tickets", url: "/teacher/support/closed" },
      { title: "Answered Tickets", url: "/teacher/support/answered" },
    ],
  },
  {
    title: "CMS Manager",
    url: "/teacher/cms",
    icon: Layout,
    items: [
      { title: "Homepage", url: "/teacher/cms/homepage" },
      { title: "Pages", url: "/teacher/cms/pages" },
      { title: "Menu", url: "/teacher/cms/menu" },
      { title: "Header/Footer", url: "/teacher/cms/header-footer" },
      { title: "Testimonials", url: "/teacher/cms/testimonials" },
    ],
  },
  {
    title: "Settings",
    url: "/teacher/settings",
    icon: Settings,
    items: [
      { title: "General", url: "/teacher/settings/general" },
      { title: "Session", url: "/teacher/settings/session" },
      { title: "Notifications", url: "/teacher/settings/notifications" },
      { title: "Proctoring", url: "/teacher/settings/proctoring" },
      { title: "Maintenance", url: "/teacher/settings/maintenance" },
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
