"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-main/20 font-poppins flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-50 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-main rounded-lg shadow-lg shadow-main/20">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Dove<span className="text-main">ying</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="ghost"
              className="font-semibold text-slate-600 hover:text-main"
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-main hover:bg-main-II text-white font-semibold px-6 rounded-sm shadow-lg shadow-main/20">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-6 max-w-4xl leading-[1.1]">
          The Smartest Way to <span className="text-main">Manage</span> Your
          Classroom
        </h1>

        <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mb-12 leading-relaxed">
          Empowering educators with real-time AI insights, seamless attendance
          tracking, and automated academic reporting.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <Link href="/signup" className="w-full">
            <Button className="w-full h-14 bg-main hover:bg-main-II text-white font-bold text-lg rounded-sm shadow-xl shadow-main/20 group transition-all">
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/login" className="w-full">
            <Button
              variant="outline"
              className="w-full h-14 border-slate-200 text-slate-600 font-bold text-lg rounded-sm hover:bg-slate-50"
            >
              Sign In
            </Button>
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 max-w-6xl w-full">
          <div className="p-8 bg-slate-50/50 rounded-sm border border-slate-100 text-left group hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all">
            <div className="h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-main group-hover:text-white transition-colors">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              AI Insights
            </h3>
            <p className="text-slate-400 font-medium text-sm leading-relaxed">
              Get real-time feedback and behavioral analysis for every student
              in your class.
            </p>
          </div>

          <div className="p-8 bg-slate-50/50 rounded-sm border border-slate-100 text-left group hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all">
            <div className="h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-main group-hover:text-white transition-colors">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Secure Integrity
            </h3>
            <p className="text-slate-400 font-medium text-sm leading-relaxed">
              Advanced proctoring and plagiarism detection to ensure high
              academic standards.
            </p>
          </div>

          <div className="p-8 bg-slate-50/50 rounded-sm border border-slate-100 text-left group hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all">
            <div className="h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-main group-hover:text-white transition-colors">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Smart Reports
            </h3>
            <p className="text-slate-400 font-medium text-sm leading-relaxed">
              Automatically generated performance analytics and formative
              assessment graphs.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-slate-50 text-center">
        <p className="text-slate-400 text-xs font-semibold uppercase ">
          © {new Date().getFullYear()} Doveying AI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
