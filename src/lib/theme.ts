export const PALETTES = {
  luxuryRealEstate: {
    bg: '#FAF8F5',
    card: '#FFFFFF',
    textPrimary: '#1A1A1A',
    textSecondary: '#66635B',
    accent: '#C5A059',
    border: '#E6E2DC'
  }
};

export const GRADIENTS = {
  heroCinematic: 'from-stone-950/80 via-stone-900/40 to-transparent'
};

export const FONT_PAIRS = {
  frauncesOutfit: {
    heading: 'font-serif',
    body: 'font-sans'
  }
};

export function cx(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}