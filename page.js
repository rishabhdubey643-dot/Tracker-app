"use client";

import React, { useState, useEffect } from 'react';

// Custom inline SVG icons to eliminate dependency on lucide-react
const LayoutDashboardIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const FolderKanbanIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const CalendarIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const SparklesIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const TimerIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BarChart3Icon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
);

const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const BriefcaseIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CheckCircle2Icon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HourglassIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PlayIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const SquareIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 6h12v12H6z" />
  </svg>
);

const ChevronLeftIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const BellIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const XIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MenuIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const TrendingUpIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function FlowspaceDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reminderFilter, setReminderFilter] = useState('all');

  // Timer State
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(45 * 60 + 20);

  // Reminders state
  const [reminders, setReminders] = useState([
    { id: 1, title: 'Design review with product team', time: '10:30 AM', category: 'Today', priority: 'High', completed: false },
    { id: 2, title: 'Finalize Q3 roadmap documentation', time: '02:00 PM', category: 'Today', priority: 'Medium', completed: false },
    { id: 3, title: 'Sprint planning & task estimation', time: 'Tomorrow, 11:00 AM', category: 'Upcoming', priority: 'High', completed: false },
    { id: 4, title: 'Client feedback sync call', time: 'Oct 29, 04:00 PM', category: 'Upcoming', priority: 'Low', completed: true },
  ]);

  // Timer tick effect
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Command palette shortcut (Ctrl+K or Cmd+F)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'f' || e.key === 'k')) {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsCommandOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleReminder = (id) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, completed: !r.completed } : r));
  };

  const filteredReminders = reminders.filter(r => {
    if (reminderFilter === 'today') return r.category === 'Today';
    if (reminderFilter === 'upcoming') return r.category === 'Upcoming';
    return true;
  });

  const dailyFocusData = [
    { day: 'S', hours: 2.5, type: 'light', tooltip: '2.5 hours' },
    { day: 'M', hours: 4.0, type: 'solid', active: true, tooltip: '4 hours' },
    { day: 'T', hours: 3.0, type: 'light', tooltip: '3 hours' },
    { day: 'W', hours: 5.5, type: 'solid', tooltip: '5.5 hours' },
    { day: 'T', hours: 4.5, type: 'hatched', tooltip: '4.5 hours (Est.)' },
    { day: 'F', hours: 4.8, type: 'solid', tooltip: '4.8 hours' },
    { day: 'S', hours: 1.5, type: 'ghost', tooltip: 'Weekend' },
  ];

  const mainNav = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboardIcon },
    { id: 'projects', label: 'Projects', icon: FolderKanbanIcon },
    { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
    { id: 'ai', label: 'AI Insights', icon: SparklesIcon },
  ];

  const toolsNav = [
    { id: 'timetracker', label: 'Time Tracker', icon: TimerIcon },
    { id: 'analytics', label: 'Analytics', icon: BarChart3Icon },
  ];

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-gray-800 flex font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-100 p-6 justify-between shrink-0 select-none">
        <div className="space-y-8">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 px-2">
            <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white shadow-md">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Equa</span>
          </div>

          {/* Main Navigation */}
          <div className="space-y-1">
            <p className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Main</p>
            {mainNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gray-100/80 text-gray-900 font-semibold shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-gray-900' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tools Navigation */}
          <div className="space-y-1">
            <p className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Tools</p>
            {toolsNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gray-100/80 text-gray-900 font-semibold shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-gray-900' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* User Card */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between px-2">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow">
              R
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800 leading-tight">Rishabh Dubey</p>
              <p className="text-xs text-gray-400">Pro Plan</p>
            </div>
          </div>
          <BellIcon className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header & Search Bar */}
        <header className="px-6 lg:px-10 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 max-w-xl">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-200 rounded-lg"
            >
              <MenuIcon className="w-5 h-5" />
            </button>
            <div
              onClick={() => setIsCommandOpen(true)}
              className="flex-1 bg-white hover:bg-gray-50 transition-colors border border-gray-100 rounded-full py-2.5 px-4 flex items-center shadow-sm cursor-pointer text-gray-400 text-sm"
            >
              <SearchIcon className="w-4 h-4 mr-3 text-gray-400" />
              <span className="flex-1">Search or type a command</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[11px] font-semibold text-gray-400 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-md">
                <span>⌘</span>F
              </kbd>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="px-6 lg:px-10 pb-12 space-y-8 max-w-7xl">
          {/* Welcome Header */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">Hello, Rishabh!</h1>
            <p className="text-gray-500 text-sm mt-1 font-medium">Here’s your weekly overview</p>
          </div>

          {/* Top 4 Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Projects */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between h-44 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center text-white shadow-sm">
                <BriefcaseIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-extrabold text-gray-900 tracking-tight">12</span>
                  <span className="text-base font-semibold text-gray-600">projects</span>
                </div>
                <p className="text-xs text-gray-400 font-medium mt-1">In Progress</p>
              </div>
            </div>

            {/* Card 2: Tasks Completed */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between h-44 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                <CheckCircle2Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-extrabold text-gray-900 tracking-tight">48</span>
                  <span className="text-base font-semibold text-gray-600">tasks</span>
                </div>
                <p className="text-xs text-gray-400 font-medium mt-1">Completed</p>
              </div>
            </div>

            {/* Card 3: Focus Hours */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between h-44 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-800">
                <HourglassIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold text-gray-900 tracking-tight">18</span>
                  <span className="text-lg font-semibold text-gray-600">h</span>
                </div>
                <p className="text-xs text-gray-400 font-medium mt-1">Focus Hours</p>
              </div>
            </div>

            {/* Card 4: Activity Streak Grid */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between h-44 hover:shadow-md transition-shadow">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-extrabold text-gray-900 tracking-tight">12</span>
                <span className="text-sm font-semibold text-gray-600">days</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium mb-3">Activity time</p>
                <div className="grid grid-cols-8 gap-1.5">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                        i < 12 ? 'bg-amber-500 scale-100' : 'bg-gray-200 scale-90'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Productivity Trends Section */}
          <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900">Productivity Trends</h2>
              <p className="text-xs text-gray-400 font-medium mt-0.5">Daily focus hours</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              {/* Summary Stats Box */}
              <div className="lg:col-span-3 bg-gray-50/70 p-5 rounded-2xl border border-gray-100 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-extrabold text-gray-900 tracking-tight">18</span>
                    <span className="text-lg font-bold text-gray-600">h</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-1">logged this week</p>
                </div>
                <div className="inline-flex items-center text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full w-fit">
                  <TrendingUpIcon className="w-3 h-3 mr-1 text-emerald-600" />
                  +12% vs last week
                </div>
              </div>

              {/* Bar Chart Visualization */}
              <div className="lg:col-span-9 flex items-end justify-between px-2 sm:px-6 pt-10 h-56 border-b border-gray-100 pb-2">
                {dailyFocusData.map((item, index) => {
                  const heightPercent = (item.hours / 6) * 100;
                  return (
                    <div key={index} className="flex flex-col items-center group relative h-full justify-end w-12 sm:w-16">
                      {/* Tooltip on Hover */}
                      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10 bg-black text-white text-[11px] font-semibold py-1 px-2.5 rounded-full shadow-lg whitespace-nowrap">
                        {item.tooltip}
                      </div>

                      {/* Tooltip dot indicator matching mockup */}
                      {item.active && (
                        <div className="absolute -top-11 bg-black text-white text-[11px] font-semibold py-1 px-2.5 rounded-full shadow-lg z-10 flex flex-col items-center">
                          <span>4 hours</span>
                          <div className="w-2 h-2 bg-black rotate-45 -mb-1 mt-0.5"></div>
                        </div>
                      )}

                      {/* Bar Graphic */}
                      <div className="w-full max-w-[48px] h-full flex items-end justify-center">
                        {item.type === 'solid' && (
                          <div
                            style={{ height: `${heightPercent}%` }}
                            className={`w-full rounded-3xl transition-all duration-300 ${
                              item.active ? 'bg-indigo-600 ring-4 ring-indigo-100' : 'bg-indigo-500 hover:bg-indigo-600'
                            }`}
                          />
                        )}
                        {item.type === 'light' && (
                          <div
                            style={{ height: `${heightPercent}%` }}
                            className="w-full bg-indigo-200/80 rounded-3xl transition-all duration-300 hover:bg-indigo-300"
                          />
                        )}
                        {item.type === 'hatched' && (
                          <div
                            style={{ height: `${heightPercent}%` }}
                            className="w-full rounded-3xl border-2 border-indigo-400/60 overflow-hidden relative bg-indigo-50"
                          >
                            <svg className="w-full h-full text-indigo-300" width="100%" height="100%">
                              <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                                <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="3" />
                              </pattern>
                              <rect width="100%" height="100%" fill="url(#hatch)" />
                            </svg>
                          </div>
                        )}
                        {item.type === 'ghost' && (
                          <div
                            style={{ height: `${heightPercent}%` }}
                            className="w-full bg-gray-100 rounded-3xl border border-dashed border-gray-200"
                          />
                        )}
                      </div>

                      <span className="text-xs font-semibold text-gray-500 mt-3">{item.day}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Grid: Time Tracker & Reminders */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Time Tracker Module */}
            <div className="lg:col-span-5 bg-black text-white p-6 rounded-3xl shadow-xl flex flex-col justify-between min-h-[260px] relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="text-lg font-bold tracking-tight">Time Tracker</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-transform active:scale-95 shadow-md"
                  >
                    {isTimerRunning ? <PauseIcon className="w-4 h-4 fill-current" /> : <PlayIcon className="w-4 h-4 fill-current ml-0.5" />}
                  </button>
                  <button
                    onClick={() => {
                      setIsTimerRunning(false);
                      setSecondsElapsed(0);
                    }}
                    className="w-9 h-9 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-transform active:scale-95 shadow-md"
                  >
                    <SquareIcon className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>

              {/* Digital Timer Display */}
              <div className="my-6 z-10">
                <div className="text-5xl lg:text-6xl font-black font-mono tracking-tight text-white">
                  {formatTime(secondsElapsed)}
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                    {isTimerRunning ? 'Active Session' : 'Paused'}
                  </p>
                </div>
              </div>

              {/* Decorative Amber Arc */}
              <div className="absolute -bottom-16 -left-16 w-48 h-48 border-[24px] border-amber-500 rounded-full opacity-90 pointer-events-none"></div>
            </div>

            {/* Reminders Module */}
            <div className="lg:col-span-7 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Reminders</h2>
                    <p className="text-xs text-gray-400 font-medium">What’s coming up next:</p>
                  </div>
                  <div className="flex items-center space-x-1 bg-gray-50 p-1 rounded-xl border border-gray-100">
                    <button
                      onClick={() => setReminderFilter('all')}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                        reminderFilter === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-700'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setReminderFilter('today')}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                        reminderFilter === 'today' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-700'
                      }`}
                    >
                      Today
                    </button>
                    <button
                      onClick={() => setReminderFilter('upcoming')}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                        reminderFilter === 'upcoming' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-gray-700'
                      }`}
                    >
                      Upcoming
                    </button>
                  </div>
                </div>

                {/* Reminders List */}
                <div className="space-y-2.5">
                  {filteredReminders.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleReminder(item.id)}
                      className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        item.completed
                          ? 'bg-gray-50 border-gray-100 opacity-60'
                          : 'bg-white border-gray-100 hover:border-indigo-100 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        <div
                          className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors shrink-0 ${
                            item.completed ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-gray-300 bg-white'
                          }`}
                        >
                          {item.completed && <CheckIcon className="w-3.5 h-3.5" />}
                        </div>
                        <span
                          className={`text-sm font-medium truncate ${
                            item.completed ? 'line-through text-gray-400' : 'text-gray-800'
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 shrink-0 ml-3">
                        <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation for Reminders */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 text-xs text-gray-400 font-medium">
                <span>Showing {filteredReminders.length} items</span>
                <div className="flex items-center space-x-2">
                  <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 disabled:opacity-30">
                    <ChevronLeftIcon className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600">
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Command Palette Modal */}
      {isCommandOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 w-full max-w-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-4 border-b border-gray-100 flex items-center">
              <SearchIcon className="w-5 h-5 text-gray-400 ml-2 mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Search projects, tasks, or commands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-base font-medium outline-none placeholder:text-gray-400 text-gray-800"
              />
              <button onClick={() => setIsCommandOpen(false)} className="p-1 rounded-lg hover:bg-gray-100 text-gray-400">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="p-3 max-h-80 overflow-y-auto space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Quick Actions</div>
              <button
                onClick={() => {
                  setIsTimerRunning(!isTimerRunning);
                  setIsCommandOpen(false);
                }}
                className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 text-left"
              >
                <TimerIcon className="w-4 h-4 text-indigo-600" />
                <span>{isTimerRunning ? 'Pause Time Tracker' : 'Start Focus Session'}</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('projects');
                  setIsCommandOpen(false);
                }}
                className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 text-left"
              >
                <FolderKanbanIcon className="w-4 h-4 text-amber-500" />
                <span>View All Projects</span>
              </button>
            </div>
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium">
              <span>Press <kbd className="bg-white px-1.5 py-0.5 rounded border border-gray-200">ESC</kbd> to exit</span>
              <span>Flowspace v1.0</span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative bg-white w-72 h-full p-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center text-white">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold">Equa</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <XIcon className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="space-y-1">
                {mainNav.concat(toolsNav).map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                        activeTab === item.id ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-500'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}