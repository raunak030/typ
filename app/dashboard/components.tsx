'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, FileText, Settings, LogOut, Bell } from 'lucide-react';

export function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'CRM / Contacts', href: '/dashboard/contacts', icon: Users },
    { name: 'Publications', href: '/dashboard/publications', icon: FileText },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-950 text-slate-300 flex flex-col hidden md:flex">
      <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-white text-slate-950 font-serif font-bold text-sm">
            YP
          </div>
          <span className="font-serif text-lg font-bold text-white tracking-wide">Admin Portal</span>
        </div>
      </div>
      
      <nav className="flex-1 py-6 flex flex-col gap-2 px-4 overflow-y-auto">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">Menu</div>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
                isActive 
                  ? 'bg-indigo-500/10 text-indigo-400 font-medium' 
                  : 'hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <Link 
          href="/" 
          className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-slate-800/50 hover:text-white transition-colors text-slate-400"
        >
          <LogOut className="h-5 w-5" />
          <span>Back to Website</span>
        </Link>
      </div>
    </aside>
  );
}

export function DashboardHeader() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Overview', href: '/dashboard' },
    { name: 'CRM / Contacts', href: '/dashboard/contacts' },
    { name: 'Publications', href: '/dashboard/publications' },
    { name: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
      <h1 className="text-lg font-semibold text-slate-800">
        {navItems.find(item => item.href === pathname)?.name || 'Dashboard'}
      </h1>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium text-sm border border-indigo-200">
          AD
        </div>
      </div>
    </header>
  );
}
