'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import SearchFilterBar from '@/components/SearchFilterBar';
import { MOCK_PROPERTIES } from '@/data/mockData';
import { SlidersHorizontal, LayoutGrid, List } from 'lucide-react';

export default function PropertiesPage() {
  const [favorites, setFavorites] = useState<string[]>(['prop-1']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedType, setSelectedType] = useState('All Types');
  const [maxPrice, setMaxPrice] = useState(35000000);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter((property) => {
      const matchesSearch = 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation = selectedLocation === 'All Locations' || property.location === selectedLocation;
      const matchesType = selectedType === 'All Types' || property.type === selectedType;
      const matchesPrice = property.price <= maxPrice;

      return matchesSearch && matchesLocation && matchesType && matchesPrice;
    });
  }, [searchQuery, selectedLocation, selectedType, maxPrice]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans">
      <Navbar favoriteCount={favorites.length} />

      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Exclusive Portfolio</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Global Residence Directory</h1>
          <p className="text-stone-300 text-base max-w-2xl font-light">
            Explore verified luxury properties, architectural penthouses, and private estates available for immediate private acquisition.
          </p>
        </div>
      </section>

      {/* Filters & Results Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <SearchFilterBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        {/* Results Counter & View Toggle */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <p className="text-sm font-medium text-stone-700">
            Showing <span className="font-bold text-stone-900">{filteredProperties.length}</span> luxury residences
          </p>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-xl border transition-all ${viewMode === 'grid' ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-700 border-stone-200'}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-xl border transition-all ${viewMode === 'list' ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-700 border-stone-200'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-16 text-center space-y-4">
            <h3 className="font-serif text-2xl font-bold text-stone-900">No residences matched your criteria</h3>
            <p className="text-stone-500 text-sm">Try adjusting your location, price slider, or search filters.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedLocation('All Locations');
                setSelectedType('All Types');
                setMaxPrice(35000000);
              }}
              className="px-6 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard 
                key={property.id}
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}

      </section>

      <Footer />
    </div>
  );
}