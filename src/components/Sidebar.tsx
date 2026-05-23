"use client";

import React, { useState, useEffect } from "react";
import { siteData } from "@/data/site-content";
import * as LucideIcons from "lucide-react";

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const currentIndex = siteData.navigation.findIndex(item => item.id === activeSection) + 1;
  const progress = (currentIndex / siteData.navigation.length) * 100;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-white/5 flex flex-col p-6 z-50">
      <div className="mb-10">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          OBA <span className="text-accent-teal">Online</span>
        </h1>
        <p className="text-xs text-slate-500">Plano Estratégico</p>
      </div>

      <nav className="flex-1 space-y-1">
        {siteData.navigation.map((item) => {
          const Icon = (LucideIcons as any)[item.icon] || LucideIcons.HelpCircle;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive 
                  ? "bg-accent-teal/10 text-accent-teal" 
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon size={18} className={isActive ? "text-accent-teal" : "text-slate-500 group-hover:text-slate-300"} />
              <span className="text-sm font-medium">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-teal shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex justify-between text-[10px] text-slate-500 mb-2 uppercase tracking-wider font-bold">
          <span>Progresso</span>
          <span>{currentIndex} / {siteData.navigation.length}</span>
        </div>
        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent-teal transition-all duration-500 ease-out shadow-[0_0_10px_rgba(20,184,166,0.3)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
