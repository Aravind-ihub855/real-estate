'use client';

import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface InquiryModalProps {
  propertyTitle: string;
  agentName: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ propertyTitle, agentName, isOpen, onClose }: InquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: `I would like to schedule a private viewing or consultation regarding ${propertyTitle}.`
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl border border-stone-200 overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">Private Viewing Requested</h3>
            <p className="text-stone-600 text-sm max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-stone-900">{formData.name}</span>. Elite Broker <span className="font-semibold text-stone-900">{agentName}</span> has received your dossier and will contact you within 2 hours.
            </p>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-6 px-6 py-3 bg-stone-900 text-white rounded-xl text-sm font-semibold hover:bg-stone-800 transition-all"
            >
              Return to Residence
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Private Concierge Advisory</span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">Request Private Viewing</h3>
              <p className="text-stone-600 text-xs mt-1">Inquiry regarding <span className="font-medium text-stone-900">{propertyTitle}</span> with {agentName}.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-4 h-4 text-stone-400" />
                  <input 
                    type="text" 
                    required
                    placeholder="Lord / Lady / Mr. Alexander Sterling" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-4 h-4 text-stone-400" />
                    <input 
                      type="email" 
                      required
                      placeholder="sterling@familyoffice.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-4 h-4 text-stone-400" />
                    <input 
                      type="tel" 
                      required
                      placeholder="+1 (555) 234-5678" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Preferred Viewing Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-stone-400" />
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Confidential Note</label>
                <textarea 
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-xl text-sm tracking-wider uppercase transition-all shadow-sm"
              >
                Submit Viewing Dossier
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}