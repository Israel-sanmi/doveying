"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { FaApple } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white font-poppins selection:bg-blue-500/30">
      {/* Left Side: Auth & Branding */}
      <div className="flex w-full flex-col justify-between p-8 md:p-12 lg:w-[45%] xl:w-[40%] relative overflow-hidden">
        {/* Grid Background Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Branding */}
        <div className="relative z-10 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white overflow-hidden">
            <GraduationCap className="h-5 w-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">doveying</span>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 my-auto py-12 flex flex-col items-center text-center">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#1a1a1a] border border-white/5 shadow-2xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-linear-to-br from-white to-gray-400">
              <GraduationCap className="h-6 w-6 text-black" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Join the <span className="text-blue-500">Future</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-sm">
            Create your account and start transforming education today.
          </p>

          {!showEmailForm ? (
            <div className="w-full max-w-sm space-y-3">
              <Button
                variant="outline"
                className="w-full h-12 bg-white text-black hover:bg-gray-100 border-none flex items-center justify-center gap-3 text-base font-semibold transition-all rounded-sm"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <div className="flex gap-3">
                {/* <Button
                  variant="outline"
                  className="flex-1 h-12 bg-[#1a1a1a] border-white/5 hover:bg-[#252525] hover:border-white/10 text-white rounded-sm flex justify-center"
                >
                  <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Button> */}
                <Button
                  variant="outline"
                  className="flex-1 h-12 bg-[#1a1a1a] border-white/5 hover:bg-[#252525] hover:border-white/10 text-white rounded-sm flex justify-center"
                >
                  <FaApple className="text-white w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12 bg-[#1a1a1a] border-white/5 hover:bg-[#252525] hover:border-white/10 text-white rounded-sm flex justify-center"
                >
                  <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Button>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => setShowEmailForm(true)}
                  variant="ghost"
                  className="w-full h-14 bg-[#1a1a1a]/50 text-gray-300 hover:text-white hover:bg-[#252525] border border-white/5 flex items-center justify-center gap-3 text-base rounded-sm transition-all"
                >
                  <Mail className="h-5 w-5 opacity-70" />
                  Continue with Email
                </Button>
              </div>
            </div>
          ) : (
            <form
              className="w-full max-w-sm space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2 text-left">
                <Label htmlFor="fullname" className="text-gray-400 font-medium">
                  Full Name
                </Label>
                <Input
                  id="fullname"
                  placeholder="John Doe"
                  className="h-12 bg-[#1a1a1a] border-white/5 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 rounded-sm"
                  required
                />
              </div>
              <div className="space-y-2 text-left">
                <Label htmlFor="email" className="text-gray-400 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@school.com"
                  className="h-12 bg-[#1a1a1a] border-white/5 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 rounded-sm"
                  required
                />
              </div>
              <div className="space-y-2 text-left">
                <Label htmlFor="password" className="text-gray-400 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="h-12 bg-[#1a1a1a] border-white/5 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 rounded-sm pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                onClick={() => router.replace("/teacher/dashboard")}
                className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-sm transition-all shadow-lg shadow-blue-500/20"
              >
                Create Account
              </Button>

              <button
                type="button"
                onClick={() => setShowEmailForm(false)}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors pt-2"
              >
                Back to social registration
              </button>
            </form>
          )}

          <div className="mt-8">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-500 hover:text-blue-400 font-semibold transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-xs text-gray-600 text-center">
          By signing up, you agree to our <br />
          <Link href="/terms" className="underline hover:text-gray-400">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-gray-400">
            Privacy Policy
          </Link>
          .
        </div>
      </div>

      {/* Right Side: Featured Card (Identical to Login for consistency) */}
      <div className="hidden lg:flex w-[55%] xl:w-[60%] p-6 items-center justify-center bg-[#0a0a0a]">
        <div className="relative w-full h-full max-w-4xl max-h-[850px] bg-linear-to-br from-[#00c6ff] via-[#0072ff] to-[#00c6ff] rounded-[40px] overflow-hidden flex flex-col items-center justify-center p-12 shadow-2xl border border-white/10 group">
          {/* Decorative Elements */}
          {/* <div className="absolute top-0 right-0 p-8">
            <div className="flex items-center gap-2 bg-[#ff5c00] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
              <span className="bg-white/20 w-4 h-4 rounded-sm flex items-center justify-center">D</span>
              Doveying S26
            </div>
          </div> */}

          <div className="text-center mb-10 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
            <h2 className="text-5xl font-extrabold tracking-tight mb-4 text-white drop-shadow-md">
              10M+ Lessons Delivered 📚
            </h2>
            <p className="text-white/80 text-xl font-medium">
              Empowering teachers across 150+ countries.
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-[#0a0a0a] transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-blue-500/40">
            <Image
              src="/auth-mockup.png"
              alt="Platform Showcase"
              fill
              className="object-cover"
              priority
            />
            {/* Mockup Browser Controls */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-sm bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-sm bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-sm bg-green-500/50" />
              </div>
              <div className="mx-auto w-1/2 h-6 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center">
                <Lock className="h-3 w-3 text-white/20 mr-2" />
                <span className="text-[10px] text-white/30 truncate">
                  app.doveying.com
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          {/* <div className="absolute bottom-0 left-0 right-0 p-12 flex items-center justify-center gap-6">
             <button className="h-10 w-10 rounded-sm bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <ChevronLeft className="h-5 w-5 text-white" />
             </button>
             <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-sm bg-white/30" />
                <div className="w-6 h-1.5 rounded-sm bg-white shadow-lg" />
                <div className="w-1.5 h-1.5 rounded-sm bg-white/30" />
             </div>
             <button className="h-10 w-10 rounded-sm bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <ChevronRight className="h-5 w-5 text-white" />
             </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
