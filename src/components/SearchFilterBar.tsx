'use client';

import React from 'react';
import { Search, MapPin, SlidersHorizontal, Home, DollarSign } from 'lucide-react';

interface SearchFilterBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedLocation: string;
  setSelectedLocation: (val: string) => void;
  selectedType: string;
  setSelectedType: (val: string) => void;
  maxPrice: number;
  setMaxPrice: (val: number) => void;
}

export default function SearchFilterBar({
  searchQuery,
  setSearchQuery,
  selectedLocation,
  setSelectedLocation,
  selectedType,
  setSelectedType,
  maxPrice,
  setMaxPrice
}: SearchFilterBarProps) {
  const locations = ['All Locations', 'Manhattan, New York', 'Cannes, France', 'Verbier, Switzerland', 'Dubai, UAE', 'Los Angeles, California', 'London, United Kingdom'];
  const types = ['All Types', 'Penthouse', 'Villa', 'Chalet', 'Estate', 'Townhouse'];

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-stone-400" />
          <input 
            type="text" 
            placeholder="Search by title, feature..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-all"
          />
        </div>

        {/* Location Dropdown */}
        <div className="relative">
          <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-[#C5A059]" />
          <select 
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full pl-11 pr-8 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-all appearance-none cursor-pointer"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Property Type Dropdown */}
        <div className="relative">
          <Home className="absolute left-4 top-3.5 w-4 h-4 text-[#C5A059]" />
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full pl-11 pr-8 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-all appearance-none cursor-pointer"
          >
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Max Price Range */}
        <div className="flex flex-col justify-center px-2">
          <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
            <span>Max Price</span>
            <span className="text-[#C5A059]">${(maxPrice / 1000000).toFixed(1)}M</span>
          </div>
          <input 
            type="range" 
            min="10000000" 
            max="35000000" 
            step="1000000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-stone-900 cursor-pointer"
          />
        </div>

      </div>
    </div>
  );
}