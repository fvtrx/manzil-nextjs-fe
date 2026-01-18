// Define the specific verses we want to display
export const VERSE_COLLECTIONS = [
  // Al-Fatihah: 1-7
  { chapter: 1, verses: [1, 2, 3, 4, 5, 6, 7] },
  // Al-Baqarah: 1-5, 102, 163, 255-257, 284-286
  { chapter: 2, verses: [1, 2, 3, 4, 5, 102, 163, 255, 256, 257, 284, 285, 286] },
  // Al-Imran: 18, 26-27
  { chapter: 3, verses: [18, 26, 27] },
  // Al-Mukminun: 115-118
  { chapter: 23, verses: [115, 116, 117, 118] },
  // As-Saffat: 1-10
  { chapter: 37, verses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  // Al-Hasyr: 21-24
  { chapter: 59, verses: [21, 22, 23, 24] },
  // Al-Jinn: 1-4
  { chapter: 72, verses: [1, 2, 3, 4] },
  // Al-Ikhlas: 1-4
  { chapter: 112, verses: [1, 2, 3, 4] },
  // Al-Falaq: 1-5
  { chapter: 113, verses: [1, 2, 3, 4, 5] },
  // An-Nas: 1-6
  { chapter: 114, verses: [1, 2, 3, 4, 5, 6] }
];

// Flatten into a single array of verse keys
export const ALL_VERSES = VERSE_COLLECTIONS.flatMap(collection => 
  collection.verses.map(verse => `${collection.chapter}:${verse}`)
);

export const CHAPTER_NAMES = {
  1: { simple: 'Al-Fatihah', arabic: 'الفاتحة' },
  2: { simple: 'Al-Baqarah', arabic: 'البقرة' },
  3: { simple: 'Al-Imran', arabic: 'آل عمران' },
  23: { simple: 'Al-Mukminun', arabic: 'المؤمنون' },
  37: { simple: 'As-Saffat', arabic: 'الصافات' },
  59: { simple: 'Al-Hasyr', arabic: 'الحشر' },
  72: { simple: 'Al-Jinn', arabic: 'الجن' },
  112: { simple: 'Al-Ikhlas', arabic: 'الإخلاص' },
  113: { simple: 'Al-Falaq', arabic: 'الفلق' },
  114: { simple: 'An-Nas', arabic: 'الناس' }
};