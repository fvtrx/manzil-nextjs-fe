"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { VerseCard } from "./VerseCard";
import { ProgressIndicator } from "./ProgressIndicator";
import { useVerseStore } from "@/store/verse-store";
import { fetchVerse } from "@/lib/api";
import { ALL_VERSES, CHAPTER_NAMES } from "@/lib/verses-data";
import { VerseData } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import HeroTitle from "./HeroTitle";

export function Main() {
  const { currentIndex, verses, setVerses } = useVerseStore();
  const [_, setIsTransitioning] = useState(false);

  const {
    data: versesData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["verses", ALL_VERSES],
    queryFn: async () => {
      const promises = ALL_VERSES.map(async (verseKey) => {
        const [chapterStr, verseStr] = verseKey.split(":");
        const chapterNumber = parseInt(chapterStr);
        const verseNumber = parseInt(verseStr);

        const verse = await fetchVerse(chapterNumber, verseNumber);
        const chapterInfo =
          CHAPTER_NAMES[chapterNumber as keyof typeof CHAPTER_NAMES];

        const verseData: VerseData = {
          verse,
          translation:
            verse.translations?.[0]?.text || "Translation not available",
          audioUrl: `https://verses.quran.com/${verse.audio?.url}`,
          chapterName: chapterInfo?.simple || `Chapter ${chapterNumber}`,
          chapterArabic: chapterInfo?.arabic || `السورة ${chapterNumber}`,
        };

        return verseData;
      });

      return Promise.all(promises);
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  useEffect(() => {
    if (versesData) {
      setVerses(versesData);
    }
  }, [versesData, setVerses]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 pt-24 pb-8 px-4">
        <ProgressIndicator />
        <div className="max-w-2xl mx-auto space-y-6">
          <Skeleton className="h-96 w-full rounded-lg" />
          <div className="text-center">
            <Skeleton className="h-4 w-48 mx-auto mb-2" />
            <Skeleton className="h-8 w-32 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            Error Loading Verses
          </h2>
          <p className="text-red-500">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  if (verses.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
            No Verses Found
          </h2>
          <p className="text-emerald-500">Please check your configuration.</p>
        </div>
      </div>
    );
  }

  // Show only the current verse card (and next one for stacking effect on mobile)
  const visibleVerses = verses.slice(currentIndex, currentIndex + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 pt-24 pb-8 px-4">
      <ProgressIndicator />

      <div className="max-w-4xl mx-auto scroll-smooth">
        <HeroTitle
          title="منزل"
          subtitle="Himpunan ayat suci Al-Quran sebagai penawar dan pelindung dari segala kejahatan."
        />

        {/* Mobile: Stacked layout with absolute positioning */}
        <div className="block md:hidden">
          <div className="relative h-auto min-h-[600px] z-0">
            {visibleVerses.map((verse, index) => (
              <VerseCard
                key={`${verse.verse.id}-${currentIndex + index}`}
                verse={verse}
                isActive={index === 0}
                stackIndex={index}
                currentIndex={currentIndex + index}
                totalVerses={verses.length}
                onSwipeStart={() => setIsTransitioning(true)}
                onSwipeEnd={() => setIsTransitioning(false)}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Simple single card layout */}
        <div className="hidden md:block">
          <div className="relative min-h-[600px] z-0">
            {visibleVerses.length > 0 && (
              <VerseCard
                verse={visibleVerses[0]}
                isActive={true}
                stackIndex={0}
                currentIndex={currentIndex}
                totalVerses={verses.length}
              />
            )}
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="text-center mt-6 text-sm text-emerald-500">
          <p>Swipe left for next verse • Swipe right for previous verse</p>
          <p className="mt-2">
            Verse {currentIndex + 1} of {verses.length}
          </p>
        </div>
      </div>
    </div>
  );
}
