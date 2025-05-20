"use client";
import React from 'react';

type CourseCardProps = {
  title: string;
  icon: React.ReactNode;
  onView: () => void;
};

export default function CourseCard({ title, icon, onView }: CourseCardProps) {
  return (
    <div className="flex flex-col bg-primary/10 rounded-2xl p-4 min-w-[220px]">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-primary font-semibold">{title}</span>
        <span>{icon}</span>
      </div>
      <button
        className="mt-auto bg-primary text-white rounded-full px-4 py-1 font-medium shadow-card hover:bg-primary/90 transition-colors"
        onClick={onView}
      >
        View
      </button>
    </div>
  );
} 