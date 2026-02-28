'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-900 text-white font-serif font-bold text-xl">
              YP
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold leading-tight text-slate-900">The Yuva</span>
              <span className="font-serif text-lg font-bold leading-tight text-slate-900">Panchayat</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            About Us
          </Link>
          <div className="group relative flex items-center gap-1 cursor-pointer">
            <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Initiatives</span>
            <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
            <div className="absolute top-full left-0 mt-2 w-48 rounded-md border border-slate-200 bg-white p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/initiatives/national-conferences" className="block rounded-sm px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900">National Conferences</Link>
              <Link href="/initiatives/state-chapters" className="block rounded-sm px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900">State Chapters</Link>
              <Link href="/initiatives/youth-reports" className="block rounded-sm px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900">Youth Reports</Link>
            </div>
          </div>
          <Link href="/publications" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Publications
          </Link>
          <Link href="/events" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Events
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/join" className="rounded-sm bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors">
            Become a Member
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link href="/about" className="text-base font-medium text-slate-900" onClick={() => setIsOpen(false)}>About Us</Link>
            <div className="flex flex-col gap-2">
              <span className="text-base font-medium text-slate-900">Initiatives</span>
              <Link href="/initiatives/national-conferences" className="pl-4 text-sm text-slate-600" onClick={() => setIsOpen(false)}>National Conferences</Link>
              <Link href="/initiatives/state-chapters" className="pl-4 text-sm text-slate-600" onClick={() => setIsOpen(false)}>State Chapters</Link>
              <Link href="/initiatives/youth-reports" className="pl-4 text-sm text-slate-600" onClick={() => setIsOpen(false)}>Youth Reports</Link>
            </div>
            <Link href="/publications" className="text-base font-medium text-slate-900" onClick={() => setIsOpen(false)}>Publications</Link>
            <Link href="/events" className="text-base font-medium text-slate-900" onClick={() => setIsOpen(false)}>Events</Link>
            <Link href="/join" className="mt-4 inline-flex justify-center rounded-sm bg-slate-900 px-5 py-3 text-sm font-medium text-white" onClick={() => setIsOpen(false)}>
              Become a Member
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
