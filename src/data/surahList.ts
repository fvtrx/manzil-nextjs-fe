export interface ISurahItem {
  chapter_id: number;
  surahName: string;
  arabic_surah_name: string;
  content: IAyahUrlItem[];
}

export interface IAyahUrlItem {
  ayat: string;
  src: string;
  translation?: any;
}

export const surahList: ISurahItem[] = [
  {
    chapter_id: 1,
    surahName: "Al-Fatihah",
    arabic_surah_name: "الفَاتِحَة",
    content: [
      {
        ayat: "1-7",
        src: "/ayat/Al-Fatihah.png",
        translation: `<h1>Terjemahan</h1>

  <li>Dengan nama Allah, Yang Maha Pemurah, lagi Maha Mengasihani. (1) </li>

  <li>Segala puji tertentu bagi Allah, Tuhan yang memelihara dan mentadbirkan sekalian alam. (2)</li>

  <li>Yang Maha Pemurah, lagi Maha Mengasihani. (3)</li>

  <li>Yang Menguasai pemerintahan hari Pembalasan (hari Akhirat). (4)</li>

  <li>Engkaulah sahaja (Ya Allah) Yang Kami sembah, dan kepada Engkaulah sahaja kami memohon pertolongan.(5)</li>

  <li>Tunjukilah kami jalan yang lurus.(6)</li>

  <li>Iaitu jalan orang-orang yang Engkau telah kurniakan nikmat kepada mereka, bukan (jalan) orang-orang yang Engkau telah murkai, dan bukan pula (jalan) orang-orang yang sesat. (7)</li>
`,
      },
    ],
  },
  {
    chapter_id: 2,
    surahName: "Al-Baqarah",
    arabic_surah_name: "الْبَقَرَة",
    content: [
      {
        ayat: "1-5",
        src: "/ayat/Al-Baqarah-1-5.png",
      },
      {
        ayat: "163",
        src: "/ayat/Al-Baqarah-163.png",
      },
      {
        ayat: "255",
        src: "/ayat/Al-Baqarah-255.png",
      },
      {
        ayat: "256",
        src: "/ayat/Al-Baqarah-256.png",
      },
      {
        ayat: "257",
        src: "/ayat/Al-Baqarah-257.png",
      },
      {
        ayat: "284",
        src: "/ayat/Al-Baqarah-284.png",
      },
      {
        ayat: "285",
        src: "/ayat/Al-Baqarah-285.png",
      },
      {
        ayat: "286",
        src: "/ayat/Al-Baqarah-286.png",
      },
    ],
  },
  {
    chapter_id: 3,
    surahName: "Al-Imran",
    arabic_surah_name: "آل عِمْرَانَ",
    content: [
      {
        ayat: "18",
        src: "/ayat/Al-Imran-18.png",
      },
    ],
  },
  {
    chapter_id: 23,
    surahName: "Al-Mukminun",
    arabic_surah_name: "المؤمنون",
    content: [
      {
        ayat: "116",
        src: "/ayat/Al-Mukminun-116.png",
      },
      {
        ayat: "117",
        src: "/ayat/Al-Mukminun-117.png",
      },
      {
        ayat: "118",
        src: "/ayat/Al-Mukminun-118.png",
      },
    ],
  },
  {
    chapter_id: 37,
    surahName: "As-Saffat",
    arabic_surah_name: "الصافات",
    content: [
      {
        ayat: "1",
        src: "/ayat/As-Saffat-1.png",
      },
      {
        ayat: "2",
        src: "/ayat/As-Saffat-2.png",
      },
      {
        ayat: "3",
        src: "/ayat/As-Saffat-3.png",
      },
      {
        ayat: "4",
        src: "/ayat/As-Saffat-4.png",
      },
      {
        ayat: "5",
        src: "/ayat/As-Saffat-5.png",
      },
      {
        ayat: "6",
        src: "/ayat/As-Saffat-6.png",
      },
      {
        ayat: "7",
        src: "/ayat/As-Saffat-7.png",
      },
      {
        ayat: "8",
        src: "/ayat/As-Saffat-8.png",
      },
      {
        ayat: "9",
        src: "/ayat/As-Saffat-9.png",
      },
      {
        ayat: "10",
        src: "/ayat/As-Saffat-10.png",
      },
    ],
  },
  {
    chapter_id: 59,
    surahName: "Al-Hasyr",
    arabic_surah_name: "الحشر",
    content: [
      {
        ayat: "22-24",
        src: "/ayat/Al-Hasyr.png",
      },
    ],
  },
  {
    chapter_id: 72,
    surahName: "Al-Jinn",
    arabic_surah_name: "الجن",
    content: [
      {
        ayat: "3",
        src: "/ayat/Al-Jinn-3.png",
      },
    ],
  },
  {
    chapter_id: 112,
    surahName: "Al-Ikhlas",
    arabic_surah_name: "الْإِخْلَاص",
    content: [
      {
        ayat: "1-4",
        src: "/ayat/Al-Ikhlas.png",
      },
    ],
  },
  {
    chapter_id: 113,
    surahName: "Al-Falaq",
    arabic_surah_name: "اَلْفَلَق",
    content: [
      {
        ayat: "1-5",
        src: "/ayat/Al-Falaq.png",
      },
    ],
  },
  {
    chapter_id: 114,
    surahName: "An-Nas",
    arabic_surah_name: "الناس",
    content: [
      {
        ayat: "1-6",
        src: "/ayat/An-Nas.png",
      },
    ],
  },
];
