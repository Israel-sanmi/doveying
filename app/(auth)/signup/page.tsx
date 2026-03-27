"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, GraduationCap, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-background font-poppins text-main-II">
      {/* Left Side: Visual & Branding (Matching Login) */}
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
            Start Your <span className="text-main-yellow">Teaching</span>
            <br />
            Journey Today.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/80">
            Create an account to join our global community of educators and
            start transforming the learning experience for your students.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="relative z-10 text-sm opacity-70">
          &copy; {new Date().getFullYear()} Doveying Education Platform. All
          rights reserved.
        </div>
      </div>

      {/* Right Side: Signup Form */}
      <div className="flex w-full flex-col justify-center bg-white px-8 md:px-24 lg:w-1/2">
        <div className="mx-auto w-full max-w-md py-12">
          {/* Mobile Header */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-main">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-main-II">
              Doveying
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-main-II">
              Create Account
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fill in your details to get started with Doveying.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <Label htmlFor="fullname">Full Name</Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground group-focus-within:text-main transition-colors">
                  <User className="h-5 w-5" />
                </div>
                <Input
                  id="fullname"
                  type="text"
                  placeholder="John Doe"
                  className="pl-10 h-11 border-slate-200 transition-all focus:border-main focus:ring-main/20 rounded-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground group-focus-within:text-main transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className="pl-10 h-11 border-slate-200 transition-all focus:border-main focus:ring-main/20 rounded-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground group-focus-within:text-main transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 h-11 border-slate-200 transition-all focus:border-main focus:ring-main/20 rounded-sm"
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
              <p className="text-[11px] text-muted-foreground mt-1">
                Minimum 8 characters with letters and numbers.
              </p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground group-focus-within:text-main transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 h-11 border-slate-200 transition-all focus:border-main focus:ring-main/20 rounded-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-main transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <Button className="w-full h-12 mt-4 text-base font-semibold bg-main hover:bg-main-II text-white transition-all shadow-lg shadow-main/20 rounded-sm">
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground leading-relaxed">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-main">
              Terms of Service
            </Link>{" "}
            &{" "}
            <Link href="/privacy" className="underline hover:text-main">
              Privacy Policy
            </Link>
            .
          </p>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-main hover:text-main-II transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
