import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-8 py-4 bg-white rounded-2xl shadow-card mb-8">
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-100 rounded-full px-4 py-2 w-72 outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="flex items-center gap-6">
        <ThemeSwitcher />
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold">
            {/* Placeholder for avatar */}
            <span role="img" aria-label="avatar">🧑‍🎓</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">John Doe</span>
            <span className="text-xs text-gray-500">3rd year</span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          {/* Placeholder for notification bell */}
          <span role="img" aria-label="bell">🔔</span>
        </div>
      </div>
    </header>
  );
} 