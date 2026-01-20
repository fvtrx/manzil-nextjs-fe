"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useVerseStore } from "@/store/verse-store";
import { VerseData } from "@/lib/types";
import { useAudioPlayer } from "@/hooks/verse-card/useAudioPlayer";
import { useMobileDetection } from "@/hooks/verse-card/useMobileDetection";
import { useCardGestures } from "@/hooks/verse-card/useCardGestures";
import { useCardAnimation } from "@/hooks/verse-card/useCardAnimation";
import { VerseHeader } from "./VerseHeader";
import { ArabicText } from "./ArabicText";
import { VerseTranslations } from "./VerseTranslations";
import { AudioPlayer } from "./AudioPlayer";

interface VerseCardProps {
  verse: VerseData;
  isActive: boolean;
  totalVerses: number;
  currentIndex: number;
  stackIndex?: number;
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
}

export function VerseCard({
  verse,
  isActive,
  totalVerses,
  currentIndex,
  stackIndex = 0,
  onSwipeStart,
  onSwipeEnd,
}: VerseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { nextVerse, previousVerse } = useVerseStore();

  // MARK: hooks(custom)
  const isMobileDevice = useMobileDetection();

  const { audioRef, audioState, toggleAudio, formatTime, progressPercentage } =
    useAudioPlayer({
      verse,
      isActive,
      currentIndex,
      totalVerses,
    });

  const {
    isDragging,
    dragOffset,
    isAnimating,
    isHorizontalDrag,
    swipeHandlers,
  } = useCardGestures({
    isActive,
    isMobileDevice,
    cardRef,
    onNext: nextVerse,
    onPrevious: previousVerse,
    onSwipeStart,
    onSwipeEnd,
  });

  const { getCardTransform, getCardOpacity, getZIndex } = useCardAnimation({
    isActive,
    stackIndex,
    isMobileDevice,
    isDragging,
    dragOffset,
    isHorizontalDrag,
  });

  return (
    <div
      className={`
        ${isMobileDevice && stackIndex > 0 ? "absolute inset-0" : "relative"} 
        w-full max-w-xl mx-auto transition-all duration-300 ease-out
      `}
      style={{
        transform: isMobileDevice
          ? getCardTransform()
          : stackIndex > 0
            ? getCardTransform()
            : "none",
        opacity: isMobileDevice ? getCardOpacity() : 1,
        zIndex: getZIndex(),
        transformOrigin: "center bottom",
        pointerEvents: isActive ? "auto" : stackIndex < 3 ? "auto" : "none",
      }}
    >
      <Card
        ref={cardRef}
        className={`
          rounded-2xl w-full bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-100 
          shadow-lg transition-all duration-300 select-none
          ${
            isActive && isMobileDevice
              ? "cursor-grab active:cursor-grabbing hover:shadow-xl"
              : "cursor-pointer hover:shadow-md"
          }
          ${isDragging && isMobileDevice && isHorizontalDrag ? "shadow-2xl" : ""}
          ${isAnimating ? "transition-transform duration-300" : ""}
        `}
        {...(isActive && isMobileDevice ? swipeHandlers : {})}
      >
        <CardContent className="p-8">
          {/* Chapter and Verse Info */}
          <VerseHeader verse={verse} />

          {/* Arabic Text with Focus Effect */}
          <ArabicText
            isActive={isActive}
            verse={verse}
            audioState={audioState}
          />

          {/* Malay Translation */}
          <VerseTranslations translation={verse.translation} />

          {/* Audio Controls - Only show for active card */}
          {isActive && (
            <AudioPlayer
              progressPercentage={progressPercentage}
              audioState={audioState}
              previousVerse={previousVerse}
              nextVerse={nextVerse}
              toggleAudio={toggleAudio}
              formatTime={formatTime}
            />
          )}

          {/* Audio Element - Only for active card */}
          {isActive && (
            <audio
              ref={audioRef}
              src={verse.audioUrl}
              preload="metadata"
              key={verse.audioUrl}
            />
          )}
        </CardContent>
      </Card>

      {/* Swipe indicators for active card (mobile only) */}
      {isActive && isDragging && isMobileDevice && isHorizontalDrag && (
        <>
          <div
            className={`absolute top-1/2 left-4 transform -translate-y-1/2 transition-opacity duration-200 ${
              dragOffset.x > 80 ? "opacity-100" : "opacity-30"
            }`}
          >
            <div className="bg-emerald-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
              Previous
            </div>
          </div>
          <div
            className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-opacity duration-200 ${
              dragOffset.x < -80 ? "opacity-100" : "opacity-30"
            }`}
          >
            <div className="bg-emerald-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
              Next
            </div>
          </div>
        </>
      )}
    </div>
  );
}
