"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-background font-poppins">
      {/* Left Side: Visual & Branding */}
      <div className="relative hidden w-1/2 flex-col justify-between bg-main-II p-12 text-white lg:flex">
        {/* Background Animation/Overlay */}
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/auth-bg.png"
            alt="Educational Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-main-II via-main-II/80 to-main/40" />
        </div>

        {/* Top Logo/Name */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-main-yellow shadow-lg shadow-main-yellow/20">
            <GraduationCap className="h-7 w-7 text-main-yellow" />
          </div>
          <span className="text-3xl font-semibold tracking-tight">
            Doveying
          </span>
        </div>

        {/* Middle Message */}
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold leading-tight">
            Empowering <span className="text-main-yellow">Teachers</span>,<br />
            Inspiring the Future.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/80">
            Join thousands of educators managing their classrooms with ease on
            the Doveying platform. Your impact starts here.
          </p>
        </div>

        {/* Bottom Footer or Quote */}
        <div className="relative z-10 text-sm opacity-70">
          &copy; {new Date().getFullYear()} Doveying Education Platform. All
          rights reserved.
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex w-full flex-col justify-center bg-white px-8 md:px-24 lg:w-1/2">
        <div className="mx-auto w-full max-w-md">
          {/* Mobile Header (Visible only on small screens) */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-main">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-main-II">
              Doveying
            </span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-main-II">
              Teacher Portal
            </h2>
            <p className="mt-2 text-muted-foreground">
              Please enter your credentials to access your dashboard.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground group-focus-within:text-main transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="teacher@school.com"
                  className="pl-10 h-12 border-slate-200 transition-all focus:border-main focus:ring-main/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-main hover:text-main-II transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground group-focus-within:text-main transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 h-12 border-slate-200 transition-all focus:border-main focus:ring-main/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-main transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-main focus:ring-main"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none text-muted-foreground select-none cursor-pointer"
              >
                Remember me for 30 days
              </label>
            </div>

            <Button
              onClick={() => router.replace("/teacher/dashboard")}
              className="w-full h-12 text-base font-semibold bg-main hover:bg-main-II text-white transition-all shadow-lg shadow-main/20 rounded-sm"
            >
              Sign In to Dashboard
            </Button>
          </form>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Newly hired teacher?{" "}
            <Link
              href="/signup"
              className="font-semibold text-main-II hover:text-main"
            >
              Request Access
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
