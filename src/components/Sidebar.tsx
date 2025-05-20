"use client";
import {
  HomeIcon,
  CreditCardIcon,
  BookOpenIcon,
  CalendarIcon,
  BellIcon,
  ChartBarIcon,
  AcademicCapIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Dashboard', icon: <HomeIcon className="w-5 h-5" />, href: '/dashboard' },
  { label: 'Payment Info', icon: <CreditCardIcon className="w-5 h-5" />, href: '/payments' },
  { label: 'Registration', icon: <BookOpenIcon className="w-5 h-5" />, href: '/registration' },
  { label: 'Courses', icon: <AcademicCapIcon className="w-5 h-5" />, href: '/courses' },
  { label: 'Drop Semester', icon: <CalendarIcon className="w-5 h-5" />, href: '/drop-semester' },
  { label: 'Result', icon: <ChartBarIcon className="w-5 h-5" />, href: '/results' },
  { label: 'Notice', icon: <BellIcon className="w-5 h-5" />, href: '/notices' },
  { label: 'Schedule', icon: <CalendarIcon className="w-5 h-5" />, href: '/schedule' },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (isMobileMenuOpen && !event.target.closest('aside')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const currentItem = navItems.find(item => pathname.startsWith(item.href));
    setActiveItem(currentItem?.label || '');
  }, [pathname]);

  return (
    <>
      {/* Mobile header */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-40 py-3 px-4 flex items-center justify-between bg-primary shadow-md`}>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
          <h1 className="text-xl font-semibold text-white">Student Portal</h1>
        </div>
        <div className="bg-white/20 rounded-xl p-2 hover:bg-white/30 transition-colors">
          <span className="text-xl">🎓</span>
        </div>
      </header>

      {/* Sidebar - now using fixed positioning with overflow */}
      <aside
        className={`fixed lg:fixed inset-y-0 left-0 z-30 w-72 h-screen transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
        } bg-gradient-to-br from-primary via-primary-dark to-indigo-900 text-white py-8 px-4 flex flex-col border-r border-white/10 overflow-y-auto custom-scrollbar`}
      >
        {/* Logo and title */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="bg-white/20 rounded-xl p-4 mb-2 hover:bg-white/30 transition-all hover:rotate-6 hover:scale-105">
            <span className="text-3xl">🎓</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Student Portal
          </h1>
          <p className="text-sm text-white/60">Welcome back, Student!</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 w-full">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeItem === item.label 
                      ? 'bg-white/20 text-white shadow-md' 
                      : 'hover:bg-white/10 text-white/80 hover:text-white'
                  } group relative overflow-hidden`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {activeItem === item.label && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-md"></span>
                  )}
                  <span className={`transition-all ${
                    activeItem === item.label ? 'text-white scale-110' : 'group-hover:scale-110'
                  }`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronDownIcon className="w-4 h-4 transform group-hover:rotate-90 transition-transform" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User profile and logout */}
        <div className="mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-all mb-2">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-lg">👤</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">John Doe</p>
              <p className="text-xs text-white/60 truncate">BSc Computer Science</p>
            </div>
          </div>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-all w-full group">
            <ArrowLeftOnRectangleIcon className="w-5 h-5 group-hover:rotate-180 transition-transform" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}