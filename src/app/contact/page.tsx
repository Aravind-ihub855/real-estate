'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, CheckCircle2, Building, Globe2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'New York',
    inquiryType: 'Acquisition',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = [
    { city: 'New York Flagship', address: '432 Park Avenue, Suite 400', phone: '+1 (212) 555-0192', email: 'ny@casanova.estate' },
    { city: 'London Advisory', address: '45 Eaton Square, Belgravia', phone: '+44 20 7946 0912', email: 'london@casanova.estate' },
    { city: 'Cannes Riviera', address: '14 Boulevard de la Croisette', phone: '+33 4 93 55 01 88', email: 'cannes@casanova.estate' },
    { city: 'Dubai GCC Hub', address: 'Index Tower, DIFC Floor 48', phone: '+971 4 405 9900', email: 'dubai@casanova.estate' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans">
      <Navbar favoriteCount={1} />

      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Private Concierge</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Global Concierge & Inquiries</h1>
          <p className="text-stone-300 text-base max-w-2xl font-light">
            Connect with our managing directors or visit one of our flagship private offices in New York, London, Cannes, or Dubai.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Form */}
          <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-stone-900">Inquiry Received</h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-stone-900">{formData.name}</span>. Our managing partner for {formData.city} will review your portfolio request and contact you within 2 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 bg-stone-900 text-white rounded-xl text-xs font-semibold uppercase tracking-wider"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Confidential Dossier</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">Private Client Intake</h3>
                  <p className="text-stone-600 text-xs mt-1">All communications are encrypted and protected under strict NDA.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Lord / Lady / Mr. Alexander Sterling" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="sterling@familyoffice.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+1 (555) 234-5678" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Nearest Flagship Hub</label>
                      <select 
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900"
                      >
                        <option value="New York">New York</option>
                        <option value="London">London</option>
                        <option value="Cannes">Cannes</option>
                        <option value="Dubai">Dubai</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Inquiry Objective</label>
                      <select 
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900"
                      >
                        <option value="Acquisition">Estate Acquisition</option>
                        <option value="Private Listing">List a Trophy Asset</option>
                        <option value="Valuation">Portfolio Valuation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Confidential Specifications</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Please specify desired location, budget range, and specific architectural requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-xl text-xs tracking-wider uppercase transition-all shadow-sm"
                  >
                    Submit Confidential Dossier
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right: Flagship Offices */}
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Global Presence</span>
              <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1">Flagship Offices</h2>
              <p className="text-stone-600 text-sm mt-2">
                Our physical advisory lounges provide private screening rooms and secure telepresence links to global financial hubs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {offices.map((office, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-stone-900 text-[#C5A059] flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-stone-900">{office.city}</h3>
                    <p className="text-stone-600 text-xs mt-1">{office.address}</p>
                  </div>
                  <div className="space-y-2 pt-3 border-t border-stone-100 text-xs text-stone-700">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}