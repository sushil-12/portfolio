"use client";
import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile header is now inside Sidebar component */}
      <Sidebar />
      
      {/* Main content area with proper sidebar spacing */}
      <main className="lg:ml-72 min-h-screen p-4 lg:p-8 transition-all duration-300 animate-fadeIn">
        <div className="mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}