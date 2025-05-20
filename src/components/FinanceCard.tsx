"use client";

import React from 'react';

type FinanceCardProps = {
  icon: React.ReactNode;
  amount: string;
  label: string;
  active?: boolean;
};

export default function FinanceCard({ icon, amount, label, active }: FinanceCardProps) {
  return (
    <div className={`flex flex-col items-center bg-white rounded-2xl p-6 shadow-card min-w-[160px] min-h-[140px] ${active ? 'border-2 border-primary' : 'border border-gray-100'}`}>
      <div className="mb-2">{icon}</div>
      <div className="text-2xl font-bold mb-1">{amount}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
} 