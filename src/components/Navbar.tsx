'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, Heart, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  favoriteCount?: number;
}

export default function Navbar({ favoriteCount = 0 }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-stone-900 text-[#FAF8F5] flex items-center justify-center font-serif text-xl font-bold transition-transform duration-300 group-hover:scale-105">
            C
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight text-stone-900 font-bold">CASANOVA</span>
            <span className="text-[10px] tracking-widest text-[#C5A059] uppercase font-semibold">Real Estate Editorial</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-stone-800 hover:text-[#C5A059] transition-colors">
            Home
          </Link>
          <Link href="/properties" className="text-sm font-medium text-stone-800 hover:text-[#C5A059] transition-colors">
            Portfolio
          </Link>
          <Link href="/agents" className="text-sm font-medium text-stone-800 hover:text-[#C5A059] transition-colors">
            Elite Brokers
          </Link>
          <Link href="/contact" className="text-sm font-medium text-stone-800 hover:text-[#C5A059] transition-colors">
            Concierge
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/properties" 
            className="relative p-2 rounded-xl border border-stone-200 hover:border-stone-900 text-stone-800 transition-all"
            title="Saved Properties"
          >
            <Heart className="w-5 h-5 text-stone-800" />
            {favoriteCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#C5A059] text-white text-xs font-bold rounded-full flex items-center justify-center">
                {favoriteCount}
              </span>
            )}
          </Link>
          
          <Link 
            href="/contact"
            className="bg-stone-900 hover:bg-stone-800 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#C5A059]" />
            Private Viewing
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl border border-stone-200 text-stone-800"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-stone-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-serif font-medium text-stone-900"
          >
            Home
          </Link>
          <Link 
            href="/properties" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-serif font-medium text-stone-900"
          >
            Portfolio
          </Link>
          <Link 
            href="/agents" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-serif font-medium text-stone-900"
          >
            Elite Brokers
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-serif font-medium text-stone-900"
          >
            Concierge & Contact
          </Link>
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <span className="text-sm text-stone-600">Saved Properties ({favoriteCount})</span>
            <Link 
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-stone-900 text-white px-4 py-2 rounded-xl text-sm font-medium"
            >
              Private Viewing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}