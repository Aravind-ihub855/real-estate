'use client';

import React from 'react';
import Link from 'next/link';
import { Bed, Bath, Square, Heart, MapPin } from 'lucide-react';
import { Property } from '@/data/mockData';

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function PropertyCard({ property, isFavorite, onToggleFavorite }: PropertyCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
      
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60" />

        {/* Collection Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-stone-900/80 text-white backdrop-blur-md">
          {property.collection}
        </span>

        {/* Favorite Heart Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            onToggleFavorite(property.id);
          }}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
            isFavorite ? 'bg-[#C5A059] text-white' : 'bg-stone-900/40 text-white hover:bg-stone-900/70'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
        </button>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="text-white">
            <p className="font-serif text-2xl font-bold tracking-tight">
              ${(property.price).toLocaleString()}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-stone-200">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Link href={`/properties/${property.id}`}>
            <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#C5A059] transition-colors">
              {property.title}
            </h3>
          </Link>
          <p className="text-stone-600 text-sm mt-1 line-clamp-2">
            {property.tagline}
          </p>
        </div>

        {/* Specs Row */}
        <div className="pt-4 border-t border-stone-100 grid grid-cols-3 gap-2 text-stone-700 text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-[#C5A059]" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-[#C5A059]" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-[#C5A059]" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Action Button */}
        <Link 
          href={`/properties/${property.id}`}
          className="w-full mt-2 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold tracking-wider uppercase transition-all text-center"
        >
          Explore Residence
        </Link>
      </div>

    </div>
  );
}