export interface Property {
  id: string;
  title: string;
  tagline: string;
  price: number;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'Penthouse' | 'Villa' | 'Chalet' | 'Estate' | 'Townhouse';
  collection: 'Modernist Penthouses' | 'Coastal Sanctuaries' | 'Alpine Chalets' | 'Global Estates';
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  yearBuilt: number;
  parkingSpaces: number;
  hoaFeesMonthly: number;
  architecturalStyle: string;
  agent: {
    name: string;
    role: string;
    phone: string;
    email: string;
    image: string;
  };
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  location: string;
  salesVolume: string;
  activeListings: number;
  bio: string;
  phone: string;
  email: string;
  image: string;
}

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Luminary Sky Penthouse',
    tagline: 'A masterclass in vertical luxury overlooking Central Park.',
    price: 18500000,
    location: 'Manhattan, New York',
    address: '432 Park Avenue, Penthouse 88',
    bedrooms: 4,
    bathrooms: 5.5,
    sqft: 6420,
    type: 'Penthouse',
    collection: 'Modernist Penthouses',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b'
    ],
    description: 'Perched high above the city that never sleeps, The Luminary Sky Penthouse delivers unobstructed 360-degree views of Manhattan and Central Park through floor-to-ceiling acoustic glass. Featuring custom Italian Poliform millwork, private elevator landing, temperature-controlled 1,000-bottle wine cellar, and a private rooftop infinity pool.',
    features: [
      'Private Rooftop Infinity Pool',
      'Direct Elevator Access',
      '1,000-Bottle Wine Vault',
      'Custom Poliform Kitchen',
      'Smart Home Automation',
      '24/7 White Glove Concierge'
    ],
    yearBuilt: 2022,
    parkingSpaces: 3,
    hoaFeesMonthly: 4200,
    architecturalStyle: 'Contemporary Minimalist',
    agent: {
      name: 'Victoria Vance',
      role: 'Senior Partner, Manhattan Luxury',
      phone: '+1 (212) 555-0192',
      email: 'v.vance@casanova.estate',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
    }
  },
  {
    id: 'prop-2',
    title: 'Villa Azure Horizon',
    tagline: 'Seamless indoor-outdoor living perched above the French Riviera.',
    price: 24000000,
    location: 'Cannes, France',
    address: '14 Boulevard de la Croisette Heights',
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8100,
    type: 'Villa',
    collection: 'Coastal Sanctuaries',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
    ],
    description: 'Villa Azure Horizon is an architectural masterpiece set amidst manicured olive groves and cantilevered over the Mediterranean Sea. Designed by renowned Riviera architects, this residence boasts travertine stone terraces, a private yacht mooring access point, helipad proximity, and zero-edge saltwater pool.',
    features: [
      'Private Yacht Mooring Access',
      'Zero-Edge Saltwater Pool',
      'Helipad Proximity',
      'Independent Guest Villa',
      'Bulletproof Security Glass',
      'Home Cinema & Spa'
    ],
    yearBuilt: 2021,
    parkingSpaces: 5,
    hoaFeesMonthly: 2800,
    architecturalStyle: 'Mediterranean Modern',
    agent: {
      name: 'Alexander DuPont',
      role: 'Managing Director, Riviera Estates',
      phone: '+33 4 93 55 01 88',
      email: 'a.dupont@casanova.estate',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    }
  },
  {
    id: 'prop-3',
    title: 'The Alpine Crest Chalet',
    tagline: 'Ski-in, ski-out ultraluxury haven in the Swiss Alps.',
    price: 15800000,
    location: 'Verbier, Switzerland',
    address: 'Chemin de Ruinettes 22',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 5900,
    type: 'Chalet',
    collection: 'Alpine Chalets',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6'
    ],
    description: 'Combining reclaimed 200-year-old timber with cutting-edge alpine engineering, The Alpine Crest Chalet offers direct ski slope access, an outdoor Nordic hot tub, Finnish sauna, professional chef kitchen, and dramatic cathedral ceilings framing snow-capped peaks.',
    features: [
      'Ski-in / Ski-out Access',
      'Finnish Sauna & Cold Plunge',
      'Outdoor Nordic Hot Tub',
      'Heated Ski Boot Room',
      'Reclaimed Timber Architecture',
      'Wood-burning Fireplace'
    ],
    yearBuilt: 2023,
    parkingSpaces: 4,
    hoaFeesMonthly: 3100,
    architecturalStyle: 'Modern Alpine',
    agent: {
      name: 'Elena Rostova',
      role: 'Director of European Alpine Properties',
      phone: '+41 27 771 90 22',
      email: 'e.rostova@casanova.estate',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2'
    }
  },
  {
    id: 'prop-4',
    title: 'Palazzo di Palma',
    tagline: 'A Venetian-inspired waterfront palazzo on Palm Jumeirah.',
    price: 31000000,
    location: 'Dubai, UAE',
    address: 'Frond M, Palm Jumeirah',
    bedrooms: 7,
    bathrooms: 9,
    sqft: 11200,
    type: 'Estate',
    collection: 'Global Estates',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
    ],
    description: 'Palazzo di Palma commands 150 feet of private white sand beach frontage with panoramic views of the Dubai skyline. Highlights include double-height grand rotunda foyer, custom Murano glass chandeliers, private subterranean 8-car gallery, and lush tropical gardens.',
    features: [
      'Private Beachfront Access',
      'Subterranean 8-Car Garage',
      'Murano Glass Chandeliers',
      'Olympic Length Lap Pool',
      'Staff Quarters & Industrial Kitchen',
      'Rooftop Lounge Deck'
    ],
    yearBuilt: 2024,
    parkingSpaces: 8,
    hoaFeesMonthly: 5000,
    architecturalStyle: 'Neo-Classical Waterfront',
    agent: {
      name: 'Tariq Al-Mansoor',
      role: 'Senior Vice President, Middle East',
      phone: '+971 4 405 9900',
      email: 't.almansoor@casanova.estate',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    }
  },
  {
    id: 'prop-5',
    title: 'The Glass Pavilion Sanctuary',
    tagline: 'Minimalist glass architecture nestled inside Beverly Hills canyons.',
    price: 16900000,
    location: 'Los Angeles, California',
    address: '12880 Trousdale Estates',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 6100,
    type: 'Villa',
    collection: 'Coastal Sanctuaries',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6'
    ],
    description: 'Surrounded by mature sycamore trees and city lights, The Glass Pavilion offers seamless walls of motorized Fleetwood glass that vanish into pockets, creating an expansive open-air pavilion. Features cantilevered pool, Fleetwood automated shading, and Bulthaup kitchen.',
    features: [
      'Cantilevered Infinity Pool',
      'Motorized Fleetwood Glass Walls',
      'Bulthaup Minimalist Kitchen',
      'Art Collector Gallery Lighting',
      'Crestron Smart Ecosystem',
      'Gated Motor Court'
    ],
    yearBuilt: 2022,
    parkingSpaces: 4,
    hoaFeesMonthly: 1900,
    architecturalStyle: 'Mid-Century Modernist',
    agent: {
      name: 'Victoria Vance',
      role: 'Senior Partner, Manhattan Luxury',
      phone: '+1 (212) 555-0192',
      email: 'v.vance@casanova.estate',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
    }
  },
  {
    id: 'prop-6',
    title: 'Belgravia Georgian Townhouse',
    tagline: 'Historic regency elegance meets hyper-modern subterranean spa.',
    price: 21500000,
    location: 'London, United Kingdom',
    address: '45 Eaton Square, Belgravia',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7200,
    type: 'Townhouse',
    collection: 'Global Estates',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
    ],
    description: 'Set on one of London’s most prestigious garden squares, this meticulously restored Grade II listed Georgian townhouse features high ornate plasterwork ceilings, passenger elevator servicing all 5 floors, and a stunning subterranean swimming pool and wellness spa.',
    features: [
      'Subterranean Swimming Pool',
      'Grade II Listed Architectural Heritage',
      'Passenger Elevator to All Floors',
      'Private Garden Square Access',
      'Bulletproof Security & Panic Room',
      'Staff Entrance & Kitchen'
    ],
    yearBuilt: 2020,
    parkingSpaces: 2,
    hoaFeesMonthly: 3500,
    architecturalStyle: 'Regency Georgian',
    agent: {
      name: 'Alexander DuPont',
      role: 'Managing Director, Riviera Estates',
      phone: '+33 4 93 55 01 88',
      email: 'a.dupont@casanova.estate',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    }
  }
];

export const MOCK_AGENTS: Agent[] = [
  {
    id: 'agent-1',
    name: 'Victoria Vance',
    title: 'Senior Partner, Manhattan Luxury',
    location: 'New York, USA',
    salesVolume: '$1.4B+ Career Sales',
    activeListings: 8,
    bio: 'Victoria has spent over 15 years representing ultra-high-net-worth individuals, family offices, and celebrity clientele across Manhattan and the Hamptons. Known for discretion and record-breaking transactions.',
    phone: '+1 (212) 555-0192',
    email: 'v.vance@casanova.estate',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
  },
  {
    id: 'agent-2',
    name: 'Alexander DuPont',
    title: 'Managing Director, European Markets',
    location: 'Cannes & London',
    salesVolume: '$2.1B+ Career Sales',
    activeListings: 12,
    bio: 'Specializing in historical chateaux, French Riviera waterfront estates, and prime Belgravia townhouses, Alexander brings elite European banking acumen and architectural appreciation to every advisory.',
    phone: '+33 4 93 55 01 88',
    email: 'a.dupont@casanova.estate',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    id: 'agent-3',
    name: 'Elena Rostova',
    title: 'Director of Alpine & Resort Living',
    location: 'Verbier, Switzerland',
    salesVolume: '$950M+ Career Sales',
    activeListings: 6,
    bio: 'Elena is the premier authority on luxury ski chalets in Verbier, Zermatt, and St. Moritz. Her background in structural engineering ensures clients receive unmatched technical insight.',
    phone: '+41 27 771 90 22',
    email: 'e.rostova@casanova.estate',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2'
  },
  {
    id: 'agent-4',
    name: 'Tariq Al-Mansoor',
    title: 'Senior Vice President, Middle East & Asia',
    location: 'Dubai, UAE',
    salesVolume: '$1.8B+ Career Sales',
    activeListings: 10,
    bio: 'Leading CasaNova’s expansion across the GCC, Tariq advises international royal families and tech titans on trophy assets across Palm Jumeirah, Emirates Hills, and Downtown Dubai.',
    phone: '+971 4 405 9900',
    email: 't.almansoor@casanova.estate',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  }
];

export const MOCK_TESTIMONIALS = [
  {
    quote: "CasaNova facilitated the acquisition of our Manhattan penthouse with absolute discretion and precision. Their editorial touch and market intelligence are unrivaled.",
    client: "Jonathan & Sarah Sterling",
    title: "Tech Founders & Philanthropists",
    property: "The Luminary Sky Penthouse"
  },
  {
    quote: "Finding a discreet waterfront sanctuary on the Riviera seemed daunting until we met the CasaNova team. Every detail was handled with white-glove excellence.",
    client: "Countess Henri de Vaudemont",
    title: "Private Collector",
    property: "Villa Azure Horizon"
  }
];