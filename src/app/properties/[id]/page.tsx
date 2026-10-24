'use client';

'span client';
'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MortgageCalculator from '@/components/MortgageCalculator';
import InquiryModal from '@/components/InquiryModal';
import { MOCK_PROPERTIES, Property } from '@/data/mockData';
import { Bed, Bath, Square, Calendar, MapPin, Shield, Car, DollarSign, Check, Phone, Mail, ArrowLeft, Layers, Compass, Building, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function PropertyDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const property = MOCK_PROPERTIES.find(p => p.id === id) || MOCK_PROPERTIES[0];
  const [activeImage, setActiveImage] = useState(property.image);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFloorPlan, setActiveFloorPlan] = useState<'ground' | 'upper' | 'site'>('ground');

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans">
      <Navbar favoriteCount={1} />

      {/* Top Breadcrumb & Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/properties" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Main Details Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
        
        {/* Title & Price Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-900 text-white">
                {property.collection}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                {property.architecturalStyle}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-stone-900">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-stone-600">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>{property.address}</span>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xs uppercase tracking-wider text-stone-500 font-bold">Acquisition Price</p>
            <p className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mt-1">
              ${property.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 aspect-[16/10] rounded-3xl overflow-hidden shadow-lg bg-stone-200">
            <img 
              src={activeImage} 
              alt={property.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {property.gallery.map((imgUrl, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveImage(imgUrl)}
                className={`relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${
                  activeImage === imgUrl ? 'border-[#C5A059] scale-[1.02]' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Core Specs Bar */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-xs text-stone-500 uppercase font-bold">Bedrooms</span>
            <p className="font-serif text-2xl font-bold text-stone-900">{property.bedrooms}</p>
          </div>
          <div className="space-y-1 border-l border-stone-100">
            <span className="text-xs text-stone-500 uppercase font-bold">Bathrooms</span>
            <p className="font-serif text-2xl font-bold text-stone-900">{property.bathrooms}</p>
          </div>
          <div className="space-y-1 border-l border-stone-100">
            <span className="text-xs text-stone-500 uppercase font-bold">Square Feet</span>
            <p className="font-serif text-2xl font-bold text-stone-900">{property.sqft.toLocaleString()}</p>
          </div>
          <div className="space-y-1 border-l border-stone-100">
            <span className="text-xs text-stone-500 uppercase font-bold">Year Built</span>
            <p className="font-serif text-2xl font-bold text-stone-900">{property.yearBuilt}</p>
          </div>
          <div className="space-y-1 border-l border-stone-100">
            <span className="text-xs text-stone-500 uppercase font-bold">Parking</span>
            <p className="font-serif text-2xl font-bold text-stone-900">{property.parkingSpaces} Cars</p>
          </div>
          <div className="space-y-1 border-l border-stone-100">
            <span className="text-xs text-stone-500 uppercase font-bold">HOA / Mo.</span>
            <p className="font-serif text-2xl font-bold text-stone-900">${property.hoaFeesMonthly.toLocaleString()}</p>
          </div>
        </div>

        {/* Main Content Grid: Description + Agent Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Description & Features */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-stone-900">Architectural Narrative</h3>
              <p className="text-stone-700 text-base leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-stone-900">Residence Amenities & Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium text-stone-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plan Tabs */}
            <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Architectural Floor Plans</h3>
                  <p className="text-xs text-stone-500">Examine level specifications and dimension layouts.</p>
                </div>
                <div className="flex gap-2">
                  {(['ground', 'upper', 'site'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setActiveFloorPlan(level)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                        activeFloorPlan === level 
                          ? 'bg-stone-900 text-white' 
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {level} Level
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-stone-900 flex items-center justify-center border border-stone-800">
                <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
                <div className="text-center space-y-2 relative z-10 p-6">
                  <Compass className="w-12 h-12 text-[#C5A059] mx-auto animate-pulse" />
                  <p className="font-serif text-xl font-bold text-white capitalize">{activeFloorPlan} Level Schematic Blueprint</p>
                  <p className="text-xs text-stone-400 max-w-md mx-auto">
                    Full architectural CAD schematic with exact ceiling heights, load-bearing specifications, and mechanical room placements available upon executed NDA.
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 px-6 py-2.5 bg-[#C5A059] text-stone-950 rounded-xl text-xs font-bold uppercase tracking-wider"
                  >
                    Request CAD Blueprint Dossier
                  </button>
                </div>
              </div>
            </div>

            {/* Mortgage Calculator */}
            <MortgageCalculator propertyPrice={property.price} />

          </div>

          {/* Right Column: Assigned Elite Agent Card */}
          <div className="space-y-6">
            <div className="sticky top-28 bg-white rounded-2xl border border-stone-200 p-8 shadow-sm space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Assigned Senior Broker</span>
              
              <div className="flex items-center gap-4">
                <img 
                  src={property.agent.image} 
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-[#C5A059]/40"
                />
                <div>
                  <h4 className="font-serif text-xl font-bold text-stone-900">{property.agent.name}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{property.agent.role}</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-stone-100 text-sm">
                <div className="flex items-center gap-3 text-stone-700">
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>{property.agent.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <Mail className="w-4 h-4 text-[#C5A059]" />
                  <span>{property.agent.email}</span>
                </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-xl text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Schedule Private Viewing</span>
              </button>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 text-xs text-stone-600 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-stone-900">
                  <Shield className="w-4 h-4 text-[#C5A059]" />
                  <span>Verified Escrow & Title Advisory</span>
                </div>
                <p>All transactions are supported by Tier-1 legal counsel and secure international escrow accounts.</p>
              </div>

            </div>
          </div>

        </div>

      </main>

      <InquiryModal 
        propertyTitle={property.title}
        agentName={property.agent.name}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
}