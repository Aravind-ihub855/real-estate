'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059] text-stone-950 flex items-center justify-center font-serif text-xl font-bold">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-tight text-white font-bold">CASANOVA</span>
                <span className="text-[10px] tracking-widest text-[#C5A059] uppercase font-semibold">Real Estate Editorial</span>
              </div>
            </div>
            <p className="text-stone-400 text-sm max-w-sm leading-relaxed">
              Curating the world’s most extraordinary residential masterpieces, architectural penthouses, and coastal sanctuaries for global connoisseurs.
            </p>
            <div className="flex items-center gap-3 text-stone-400 text-sm">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>New York · London · Paris · Dubai · Tokyo</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-white text-base tracking-wide font-semibold">Portfolio</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><Link href="#" onClick={(e) => { e.preventDefault(); import("sonner").then(m => m.toast.info("Feature coming soon!")); }} className="hover:text-[#C5A059] transition-colors">Modernist Penthouses</Link></li>
              <li><Link href="#" onClick={(e) => { e.preventDefault(); import("sonner").then(m => m.toast.info("Feature coming soon!")); }} className="hover:text-[#C5A059] transition-colors">Coastal Sanctuaries</Link></li>
              <li><Link href="#" onClick={(e) => { e.preventDefault(); import("sonner").then(m => m.toast.info("Feature coming soon!")); }} className="hover:text-[#C5A059] transition-colors">Alpine Chalets</Link></li>
              <li><Link href="#" onClick={(e) => { e.preventDefault(); import("sonner").then(m => m.toast.info("Feature coming soon!")); }} className="hover:text-[#C5A059] transition-colors">Global Estates</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-white text-base tracking-wide font-semibold">Company</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><Link href="/agents" className="hover:text-[#C5A059] transition-colors">Elite Brokers</Link></li>
              <li><Link href="/contact" className="hover:text-[#C5A059] transition-colors">Private Concierge</Link></li>
              <li><Link href="/properties" className="hover:text-[#C5A059] transition-colors">All Listings</Link></li>
              <li><Link href="/contact" className="hover:text-[#C5A059] transition-colors">Press & Media</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-white text-base tracking-wide font-semibold">Editorial Digest</h4>
            <p className="text-xs text-stone-400">Receive private off-market listings and architectural reviews bi-weekly.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully to CasaNova Digest.'); }} className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-white text-sm focus:outline-none focus:border-[#C5A059]"
              />
              <button 
                type="submit"
                className="w-full bg-[#C5A059] hover:bg-[#b08d4b] text-stone-950 font-medium py-2.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
          <p>© {new Date().getFullYear()} CasaNova Real Estate Editorial LLC. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <Link href="/contact" className="hover:text-stone-300">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-stone-300">Terms of Service</Link>
            <Link href="/contact" className="hover:text-stone-300">Brokerage Licensing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}