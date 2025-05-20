"use client";
import Header from '../components/Header';
import FinanceCard from '../components/FinanceCard';
import CourseCard from '../components/CourseCard';
import InstructorAvatar from '../components/InstructorAvatar';
import NoticeCard from '../components/NoticeCard';
import { ChartBarIcon, ComputerDesktopIcon, CreditCardIcon, CurrencyDollarIcon, LockClosedIcon } from '@heroicons/react/16/solid';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 flex flex-col p-8 gap-8">
        <Header />
        <div className="flex flex-col gap-8">
          {/* Welcome Banner */}
          <div className="w-full bg-primary rounded-2xl p-8 flex items-center justify-between text-white relative overflow-hidden">
            <div>
              <div className="text-sm mb-2 opacity-80">September 4, 2023</div>
              <div className="text-2xl font-bold mb-1">Welcome back, John!</div>
              <div className="opacity-80 text-sm">Always stay updated in your student portal</div>
            </div>
            <div className="hidden md:block text-[100px] opacity-30 absolute right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none">🎓</div>
          </div>

          {/* Main Dashboard Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Finance & Courses */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Finance */}
              <div>
                <div className="font-semibold text-lg mb-4">Finance</div>
                <div className="flex gap-6">
                  <FinanceCard icon={<CurrencyDollarIcon className="w-8 h-8 text-primary" />} amount="$ 10,000" label="Total Payable" />
                  <FinanceCard icon={<CreditCardIcon className="w-8 h-8 text-primary" />} amount="$ 5,000" label="Total Paid" active />
                  <FinanceCard icon={<ChartBarIcon className="w-8 h-8 text-primary" />} amount="$ 300" label="Others" />
                </div>
              </div>
              {/* Enrolled Courses */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="font-semibold text-lg">Enrolled Courses</div>
                  <a href="#" className="text-primary text-sm font-medium hover:underline">See all</a>
                </div>
                <div className="flex gap-6">
                  <CourseCard title="Object oriented programming" icon={<ComputerDesktopIcon className="w-8 h-8 text-primary" />} onView={() => {}} />
                  <CourseCard title="Fundamentals of database systems" icon={<LockClosedIcon className="w-8 h-8 text-primary" />} onView={() => {}} />
                </div>
              </div>
            </div>
            {/* Right: Instructors & Notices */}
            <div className="w-full lg:w-[320px] flex flex-col gap-8">
              {/* Instructors */}
              <div>
                <div className="font-semibold text-lg mb-4">Course instructors</div>
                <div className="flex gap-3 mb-6">
                  <InstructorAvatar name="Alice" />
                  <InstructorAvatar name="Bob" />
                  <InstructorAvatar name="Charlie" />
                </div>
                <div className="font-semibold text-lg mb-2">Daily notice <a href="#" className="text-primary text-sm font-medium ml-2 hover:underline">See all</a></div>
                <NoticeCard title="Prelim payment due" description="Sorem ipsum dolor sit amet, consectetur adipiscing elit." link="#" />
                <NoticeCard title="Exam schedule" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." link="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
