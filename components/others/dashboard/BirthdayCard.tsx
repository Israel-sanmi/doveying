"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Cake } from "lucide-react";

const birthdays = [
  {
    id: "3",
    name: "Janet Ekene",
    date: "09/11",
    class: "U15 AA",
    avatar: "/avatars/janet.png",
  },
  {
    id: "3-2",
    name: "Nuru Bello",
    date: "10/11",
    class: "U15 AB",
    avatar: "/avatars/nuru.png",
  },
  {
    id: "9",
    name: "Ebuka Ani",
    date: "11/11",
    class: "U15 ZA",
    avatar: "/avatars/ebuka.png",
  },
];

const BirthdayCard = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6 text-slate-900">
        <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
          <Cake className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight">
          Birthday in My Class
        </h3>
      </div>

      <div className="space-y-4">
        {birthdays.map((student) => (
          <div
            key={student.id}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-slate-50">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback className="bg-main/10 text-main font-semibold">
                  {student.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">
                  {student.name}
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  Student ID: {student.id.split("-")[0]}
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">
                {student.date}: {student.class}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayCard;
