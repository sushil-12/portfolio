"use client";
import React from 'react';
import { useTheme } from './ThemeContext';

const COLORS = [
  { name: 'Violet', value: '#7c3aed' },
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Blue', value: '#2563eb' },
  { name: 'Pink', value: '#db2777' },
  { name: 'Green', value: '#22c55e' },
];

export default function ThemeSwitcher() {
  const { color, setColor } = useTheme();
  return (
    <div className="flex gap-2 items-center">
      {COLORS.map((c) => (
        <button
          key={c.value}
          className={`w-6 h-6 rounded-full border-2 ${color === c.value ? 'border-primary' : 'border-gray-300'}`}
          style={{ background: c.value }}
          onClick={() => setColor(c.value)}
          aria-label={`Switch to ${c.name}`}
        />
      ))}
    </div>
  );
} 