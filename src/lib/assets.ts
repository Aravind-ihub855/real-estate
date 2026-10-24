export const UNSPLASH = {
  architecture: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e',
    'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf',
  ],
  luxuryVilla: [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
  ],
  interior: [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
    'https://images.unsplash.com/photo-1615529162924-f8605388461d',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
  ],
  agents: [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  ],
  business: [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    'https://images.unsplash.com/photo-1497366216548-37526070297c',
  ]
};

export const AVATARS = UNSPLASH.agents;
export const HEROES = {
  tech: UNSPLASH.architecture[0],
  luxury: UNSPLASH.luxuryVilla[0],
  interior: UNSPLASH.interior[0]
};

export function getImage(photoIdOrUrl: string, w = 1200, h = 800): string {
  if (photoIdOrUrl.startsWith('http')) {
    return `${photoIdOrUrl}?auto=format&fit=crop&w=${w}&q=80`;
  }
  return `https://images.unsplash.com/${photoIdOrUrl}?auto=format&fit=crop&w=${w}&q=80`;
}

export function getCategoryImage(category: string, index = 0): string {
  const cat = (UNSPLASH as Record<string, string[]>)[category] || UNSPLASH.architecture;
  return `${cat[index % cat.length]}?auto=format&fit=crop&w=1200&q=80`;
}