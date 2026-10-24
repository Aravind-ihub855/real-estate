'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { MOCK_PROPERTIES, MOCK_TESTIMONIALS, MOCK_AGENTS } from '@/data/mockData';
import { Search, ArrowRight, ShieldCheck, Globe2, Award, Sparkles, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [favorites, setFavorites] = useState<string[]>(['prop-1']);
  const [quickSearchLocation, setQuickSearchLocation] = useState('All Locations');
  const [quickSearchType, setQuickSearchType] = useState('All Types');

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const collections = [
    { title: 'Modernist Penthouses', count: '12 Estates', image: MOCK_PROPERTIES[0].image, slug: 'Modernist Penthouses' },
    { title: 'Coastal Sanctuaries', count: '18 Estates', image: MOCK_PROPERTIES[1].image, slug: 'Coastal Sanctuaries' },
    { title: 'Alpine Chalets', count: '9 Estates', image: MOCK_PROPERTIES[2].image, slug: 'Alpine Chalets' },
    { title: 'Global Estates', count: '24 Estates', image: MOCK_PROPERTIES[3].image, slug: 'Global Estates' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans">
      <Navbar favoriteCount={favorites.length} />

      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9" 
          alt="Luxury Villa Hero" 
          className="absolute inset-0 w-full h-full object-cover"
         onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80"; }} />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/50 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/60 backdrop-blur-md border border-stone-700 text-xs font-medium tracking-widest text-[#C5A059] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PropTech Editorial & Luxury Portfolio</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.08] font-bold">
              Extraordinary Residences for the Global Connoisseur.
            </h1>
            
            <p className="text-stone-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              Curating architectural masterpieces, private island sanctuaries, and skyline penthouses across the world's most coveted destinations.
            </p>

            {/* Floating Glassmorphic Quick Search Bar */}
            <div className="pt-6">
              <div className="bg-white/95 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-2xl border border-stone-200/50 max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500">Destination</label>
                  <select 
                    value={quickSearchLocation}
                    onChange={(e) => setQuickSearchLocation(e.target.value)}
                    className="w-full bg-stone-100 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 font-medium focus:outline-none"
                  >
                    <option value="All Locations">All Destinations</option>
                    <option value="Manhattan, New York">Manhattan, NY</option>
                    <option value="Cannes, France">Cannes, France</option>
                    <option value="Verbier, Switzerland">Verbier, Switzerland</option>
                    <option value="Dubai, UAE">Dubai, UAE</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500">Property Class</label>
                  <select 
                    value={quickSearchType}
                    onChange={(e) => setQuickSearchType(e.target.value)}
                    className="w-full bg-stone-100 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 font-medium focus:outline-none"
                  >
                    <option value="All Types">All Classes</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Villa">Villa</option>
                    <option value="Chalet">Chalet</option>
                    <option value="Estate">Estate</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <Link 
                    href={`/properties?location=${encodeURIComponent(quickSearchLocation)}&type=${encodeURIComponent(quickSearchType)}`}
                    className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium py-3 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4 text-[#C5A059]" />
                    <span>Explore Portfolio</span>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Curated Editorial Collections */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Curated Portfolios</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight mt-1">Architectural Collections</h2>
          </div>
          <Link href="/properties" className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-[#C5A059] transition-colors group">
            <span>View All Collections</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, idx) => (
            <Link 
              key={idx}
              href={`/properties?collection=${encodeURIComponent(col.slug)}`}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 block"
            >
              <img 
                src={col.image} 
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs tracking-widest text-[#C5A059] uppercase font-semibold">{col.count}</span>
                <h3 className="font-serif text-xl font-bold mt-1 group-hover:text-[#C5A059] transition-colors">{col.title}</h3>
                <div className="flex items-center gap-1 text-xs text-stone-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore Portfolio</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Properties Grid */}
      <section className="py-24 bg-stone-100/60 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Exclusive Offerings</span>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight mt-1">Featured Masterpieces</h2>
            </div>
            <Link href="/properties" className="mt-4 md:mt-0 bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all shadow-sm">
              Browse All Listings ({MOCK_PROPERTIES.length})
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PROPERTIES.slice(0, 3).map((property) => (
              <PropertyCard 
                key={property.id}
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Market Intelligence & Global Presence Strip */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 rounded-3xl p-8 sm:p-16 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Global PropTech Leadership</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
                Unprecedented Access to Off-Market Trophy Assets.
              </h2>
              <p className="text-stone-300 text-base font-light leading-relaxed">
                CasaNova leverages proprietary market intelligence, private client networks, and encrypted virtual dossiers to secure generational estates across New York, London, Paris, and Dubai.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-stone-800">
                <div>
                  <p className="font-serif text-3xl font-bold text-white">$4.8B+</p>
                  <p className="text-xs text-stone-400 mt-1">Transaction Volume</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-white">100%</p>
                  <p className="text-xs text-stone-400 mt-1">Client Confidentiality</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-white">5 Global</p>
                  <p className="text-xs text-stone-400 mt-1">Flagship Hubs</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 bg-stone-950/60 p-8 rounded-2xl border border-stone-800">
              <h3 className="font-serif text-2xl font-bold text-white">Private Advisory Consultation</h3>
              <p className="text-stone-400 text-sm">
                Connect directly with our managing partners for a tailored asset acquisition strategy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-stone-300">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                  <span>Strict Non-Disclosure & Escrow Protocol</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-300">
                  <Globe2 className="w-5 h-5 text-[#C5A059]" />
                  <span>Cross-Border Tax & Legal Structuring</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-300">
                  <Award className="w-5 h-5 text-[#C5A059]" />
                  <span>Dedicated Private Wealth Broker</span>
                </div>
              </div>
              <Link 
                href="/contact"
                className="w-full bg-[#C5A059] hover:bg-[#b08d4b] text-stone-950 font-medium py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2 mt-4"
              >
                <span>Schedule Private Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-100/60 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Client Testimonials</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight mt-1">Voices of Discerning Owners</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
                <p className="font-serif text-lg text-stone-800 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-stone-900">{t.client}</h4>
                    <p className="text-xs text-stone-500">{t.title}</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-stone-100 rounded-full font-medium text-stone-700">{t.property}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}