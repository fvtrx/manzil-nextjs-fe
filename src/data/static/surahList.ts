export interface ISurahItem {
  chapter_id: number;
  surahName: string;
  arabic_surah_name: string;
  surahUrl: IAyahUrlItem[];
}

export interface IAyahUrlItem {
  ayat: string;
  src: string;
}

export const surahList: ISurahItem[] = [
  {
    chapter_id: 1,
    surahName: "Al-Fatihah",
    arabic_surah_name: "الفَاتِحَة",
    surahUrl: [
      {
        ayat: "1-7",
        src: "https://quran.com/1",
      },
    ],
  },
  {
    chapter_id: 2,
    surahName: "Al-Baqarah",
    arabic_surah_name: "الْبَقَرَة",
    surahUrl: [
      {
        ayat: "1",
        src: "https://quran.com/2?startingVerse=1",
      },
      {
        ayat: "2",
        src: "https://quran.com/2?startingVerse=2",
      },
      {
        ayat: "3",
        src: "https://quran.com/2?startingVerse=3",
      },
      {
        ayat: "4",
        src: "https://quran.com/2?startingVerse=4",
      },
      {
        ayat: "5",
        src: "https://quran.com/2?startingVerse=5",
      },
      {
        ayat: "163",
        src: "https://quran.com/2?startingVerse=163",
      },
      {
        ayat: "255",
        src: "https://quran.com/2?startingVerse=255",
      },
      {
        ayat: "256",
        src: "https://quran.com/2?startingVerse=256",
      },
      {
        ayat: "257",
        src: "https://quran.com/2?startingVerse=257",
      },
      {
        ayat: "284",
        src: "https://quran.com/2?startingVerse=284",
      },
      {
        ayat: "285",
        src: "https://quran.com/2?startingVerse=285",
      },
      {
        ayat: "286",
        src: "https://quran.com/2?startingVerse=286",
      },
    ],
  },
  {
    chapter_id: 3,
    surahName: "Al-Imran",
    arabic_surah_name: "آل عِمْرَانَ",
    surahUrl: [
      {
        ayat: "18",
        src: "https://quran.com/3?startingVerse=18",
      },
    ],
  },
  {
    chapter_id: 23,
    surahName: "Al-Mukminun",
    arabic_surah_name: "المؤمنون",
    surahUrl: [
      {
        ayat: "116",
        src: "https://quran.com/23?startingVerse=116",
      },
      {
        ayat: "117",
        src: "https://quran.com/23?startingVerse=117",
      },
      {
        ayat: "118",
        src: "https://quran.com/23?startingVerse=118",
      },
    ],
  },
  {
    chapter_id: 72,
    surahName: "Al-Jinn",
    arabic_surah_name: "الجن",
    surahUrl: [
      {
        ayat: "3",
        src: "https://quran.com/72?startingVerse=3",
      },
    ],
  },
  {
    chapter_id: 37,
    surahName: "As-Saffat",
    arabic_surah_name: "الصافات",
    surahUrl: [
      {
        ayat: "1",
        src: "https://quran.com/37/?startingVerse=1",
      },
      {
        ayat: "2",
        src: "https://quran.com/37/?startingVerse=2",
      },
      {
        ayat: "3",
        src: "https://quran.com/37/?startingVerse=3",
      },
      {
        ayat: "4",
        src: "https://quran.com/37/?startingVerse=4",
      },
      {
        ayat: "5",
        src: "https://quran.com/37/?startingVerse=5",
      },
      {
        ayat: "6",
        src: "https://quran.com/37/?startingVerse=6",
      },
      {
        ayat: "7",
        src: "https://quran.com/37/?startingVerse=7",
      },
      {
        ayat: "8",
        src: "https://quran.com/37/?startingVerse=8",
      },
      {
        ayat: "9",
        src: "https://quran.com/37/?startingVerse=9",
      },
      {
        ayat: "10",
        src: "https://quran.com/37/?startingVerse=10",
      },
    ],
  },
  {
    chapter_id: 59,
    surahName: "Al-Hasyr",
    arabic_surah_name: "الحشر",
    surahUrl: [
      {
        ayat: "22",
        src: "https://quran.com/59/?startingVerse=22",
      },
      {
        ayat: "23",
        src: "https://quran.com/59/?startingVerse=23",
      },
      {
        ayat: "24",
        src: "https://quran.com/59/?startingVerse=24",
      },
    ],
  },
  {
    chapter_id: 112,
    surahName: "Al-Ikhlas",
    arabic_surah_name: "الْإِخْلَاص",
    surahUrl: [
      {
        ayat: "1-4",
        src: "https://quran.com/112",
      },
    ],
  },
  {
    chapter_id: 113,
    surahName: "Al-Falaq",
    arabic_surah_name: "اَلْفَلَق",
    surahUrl: [
      {
        ayat: "1-5",
        src: "https://quran.com/113",
      },
    ],
  },
  {
    chapter_id: 114,
    surahName: "An-Nas",
    arabic_surah_name: "الناس",
    surahUrl: [
      {
        ayat: "1-6",
        src: "https://quran.com/114",
      },
    ],
  },
];
