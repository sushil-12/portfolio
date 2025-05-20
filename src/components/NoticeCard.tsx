"use client";

import React from 'react';

type NoticeCardProps = {
  title: string;
  description: string;
  link: string;
};

export default function NoticeCard({ title, description, link }: NoticeCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-card mb-2">
      <div className="font-semibold text-gray-900 mb-1">{title}</div>
      <div className="text-gray-500 text-sm mb-2">{description}</div>
      <a href={link} className="text-primary text-xs font-medium hover:underline">See more</a>
    </div>
  );
} 