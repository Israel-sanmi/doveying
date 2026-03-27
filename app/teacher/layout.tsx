"use client";

import React from "react";
import { SideNav } from "@/components/others/nav/sideNav";
import DashboardHeader from "@/components/others/nav/DashboardHeader";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SideNav>
     
      {children}
    </SideNav>
  );
}
