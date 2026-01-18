import axios from "axios";
import { Verse } from "./types";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_QURAN_BASE_URL,
});

export async function fetchVerse(chapterNumber: number, verseNumber: number) {
  try {
    const verseResponse = await api.get(
      `/verses/by_key/${chapterNumber}:${verseNumber}`,
      {
        params: {
          translations: "134", // ID for Malay translation
          fields: "text_uthmani,text_simple,translations",
          audio: "7", // Alafasy recitation
        },
      }
    );

    const verse = verseResponse.data.verse;
    if (!verse) {
      throw new Error("Verse not found");
    }

    return verse as Verse;
  } catch (error) {
    console.error("Error fetching verse:", error);
    // Fallback data for development
    return {
      id: `${chapterNumber}${verseNumber}`,
      chapter_id: chapterNumber,
      verse_number: verseNumber,
      verse_key: `${chapterNumber}:${verseNumber}`,
      text_uthmani: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
      text_simple: "Bismillahi ar-rahmani ar-raheem",
      translations: [
        {
          id: 134,
          text: "Dengan nama Allah Yang Maha Pemurah, lagi Maha Mengasihani.",
          language_name: "Malay",
          resource_name: "Malay Translation",
        },
      ],
      audio: {
        url: `https://verses.quran.com/Alafasy/mp3/${chapterNumber}_${verseNumber}.mp3`,
        duration: 0,
      },
    } as Verse;
  }
}

export async function fetchChapterInfo(chapterNumber: number) {
  try {
    const response = await api.get(`/chapters/${chapterNumber}`);
    return response.data.chapter;
  } catch (error) {
    console.error("Error fetching chapter info:", error);
    return null;
  }
}
