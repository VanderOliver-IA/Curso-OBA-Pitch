"use client";

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { siteData } from '@/data/site-content';

export function FinancialChart() {
  return (
    <div className="h-[400px] w-full bg-slate-800/20 p-6 rounded-3xl border border-white/5 backdrop-blur-sm">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={siteData.financeiro.projection} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }}
            tickFormatter={(value) => `R$ ${value / 1000}k`}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(255,255,255,0.02)' }}
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '12px',
              fontSize: '12px',
              color: '#fff'
            }}
            itemStyle={{ color: '#14b8a6' }}
          />
          <Bar dataKey="revenue" radius={[6, 6, 0, 0]} barSize={32}>
            {siteData.financeiro.projection.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 5 ? '#14b8a6' : '#1e293b'} stroke={index === 5 ? 'none' : 'rgba(255,255,255,0.1)'} strokeWidth={1} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
