'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InquiryModal from '@/components/InquiryModal';
import { MOCK_AGENTS, Agent } from '@/data/mockData';
import { Phone, Mail, Award, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans">
      <Navbar favoriteCount={1} />

      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Global Leadership</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Elite Real Estate Brokers</h1>
          <p className="text-stone-300 text-base max-w-2xl font-light">
            Meet the senior partners and managing directors representing the world's most prestigious trophy assets with discretion and expertise.
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {MOCK_AGENTS.map((agent) => (
            <div 
              key={agent.id}
              className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between space-y-6"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="w-24 h-24 rounded-2xl object-cover ring-4 ring-[#C5A059]/30"
                />
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-stone-900">{agent.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">{agent.title}</p>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{agent.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed font-light">
                {agent.bio}
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-stone-100 text-xs">
                <div>
                  <span className="text-stone-400 uppercase font-bold">Career Volume</span>
                  <p className="font-serif text-lg font-bold text-stone-900 mt-0.5">{agent.salesVolume}</p>
                </div>
                <div>
                  <span className="text-stone-400 uppercase font-bold">Active Listings</span>
                  <p className="font-serif text-lg font-bold text-stone-900 mt-0.5">{agent.activeListings} Estates</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button 
                  onClick={() => {
                    setSelectedAgent(agent);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold tracking-wider uppercase transition-all shadow-sm text-center"
                >
                  Contact {agent.name.split(' ')[0]}
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {selectedAgent && (
        <InquiryModal 
          propertyTitle={`Private Consultation with ${selectedAgent.name}`}
          agentName={selectedAgent.name}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <Footer />
    </div>
  );
}