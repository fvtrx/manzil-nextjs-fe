import { queryOptions } from "@tanstack/react-query";
import { ALL_VERSES, CHAPTER_NAMES } from "@/lib/verses-data";
import { fetchVerse } from "@/lib/api";
import { VerseData } from "@/lib/types";

export const getVersesQueryOptions = () =>
  queryOptions({
    queryKey: ["verses", ALL_VERSES],
    queryFn: () =>
      Promise.all(
        ALL_VERSES.map(async (verseKey) => {
          const [chapterNumber, verseNumber] = verseKey.split(":").map(Number);
          const verse = await fetchVerse(chapterNumber, verseNumber);
          const chapterInfo =
            CHAPTER_NAMES[chapterNumber as keyof typeof CHAPTER_NAMES];

          const data: VerseData = {
            verse,
            translation:
              verse.translations?.[0]?.text || "Translation not available",
            audioUrl: `https://verses.quran.com/${verse.audio?.url}`,
            chapterName: chapterInfo?.simple || `Chapter ${chapterNumber}`,
            chapterArabic: chapterInfo?.arabic || `السورة ${chapterNumber}`,
          };

          return data;
        }),
      ),
    staleTime: 1000 * 60 * 60,
  });
