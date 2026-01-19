"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useVerseStore } from "@/store/verse-store";
import { useSwipe } from "@/hooks/useSwipe";
import { VerseData } from "@/lib/types";
import he from "he";

interface VerseCardProps {
  verse: VerseData;
  isActive: boolean;
  totalVerses: number;
  currentIndex: number;
  stackIndex?: number; // For stacked layout
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
}

// Utility function to detect mobile devices
const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 768 || "ontouchstart" in window;
};

export function VerseCard({
  verse,
  isActive,
  totalVerses,
  currentIndex,
  stackIndex = 0,
  onSwipeStart,
  onSwipeEnd,
}: VerseCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Track initial drag position to determine swipe vs scroll intent
  const dragStartPos = useRef({ x: 0, y: 0 });
  const [isHorizontalDrag, setIsHorizontalDrag] = useState(false);

  const {
    audioState,
    setAudioRef,
    setAudioState,
    toggleAudio,
    nextVerse,
    previousVerse,
    autoPlay,
  } = useVerseStore();

  // Check if device is mobile on mount
  useEffect(() => {
    setIsMobileDevice(isMobile());

    const handleResize = () => {
      setIsMobileDevice(isMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enhanced swipe handlers with better sensitivity control (mobile only)
  const swipeHandlers = useSwipe({
    onSwipeLeft: () => {
      if (!isActive || !isMobileDevice || !isHorizontalDrag) return;
      animateSwipeExit("left");
      setTimeout(nextVerse, 200);
    },
    onSwipeRight: () => {
      if (!isActive || !isMobileDevice || !isHorizontalDrag) return;
      animateSwipeExit("right");
      setTimeout(previousVerse, 200);
    },
    threshold: 150, // Increased threshold for less sensitivity
    onDragStart: () => {
      if (!isActive || !isMobileDevice) return;
      setIsDragging(true);
      setIsHorizontalDrag(false);
      dragStartPos.current = { x: 0, y: 0 };
      onSwipeStart?.();
    },
    onDragEnd: () => {
      if (!isMobileDevice) return;
      setIsDragging(false);
      setDragOffset({ x: 0, y: 0 });
      setIsHorizontalDrag(false);
      onSwipeEnd?.();
    },
    onDrag: (offset) => {
      if (!isActive || !cardRef.current || !isMobileDevice) return;

      // Determine if this is a horizontal swipe or vertical scroll
      const absX = Math.abs(offset.x);
      const absY = Math.abs(offset.y);

      // Only consider it a horizontal drag if X movement is significantly greater than Y
      // This prevents accidental swipes when trying to scroll long content
      if (absX > absY * 1.5 && absX > 30) {
        setIsHorizontalDrag(true);
        setDragOffset(offset);
      } else if (absY > absX) {
        // Mostly vertical movement - allow normal scrolling
        setIsHorizontalDrag(false);
        setDragOffset({ x: 0, y: 0 });
      }
    },
  });

  const animateSwipeExit = (direction: "left" | "right") => {
    if (!cardRef.current || !isMobileDevice) return;

    setIsAnimating(true);
    const exitDistance =
      direction === "left" ? -window.innerWidth : window.innerWidth;

    cardRef.current.style.transform = `translateX(${exitDistance}px) rotate(${
      direction === "left" ? -15 : 15
    }deg)`;
    cardRef.current.style.opacity = "0";

    setTimeout(() => {
      setIsAnimating(false);
      if (cardRef.current) {
        cardRef.current.style.transform = "";
        cardRef.current.style.opacity = "";
      }
    }, 300);
  };

  // Calculate transform based on stack position and drag state (mobile only for drag)
  const getCardTransform = () => {
    // For desktop, only show stacking effect if enabled
    if (!isMobileDevice) {
      if (!isActive && stackIndex > 2) {
        return "scale(0) translateY(100px)";
      }
      const baseScale = isActive ? 1 : 1 - stackIndex * 0.03;
      const baseTranslateY = isActive ? 0 : stackIndex * -5;
      return `translateY(${baseTranslateY}px) scale(${baseScale})`;
    }

    // Mobile: Full stacking with drag support
    if (!isActive && stackIndex > 2) {
      return "scale(0) translateY(100px)";
    }

    const baseScale = isActive ? 1 : 1 - stackIndex * 0.05;
    const baseTranslateY = isActive ? 0 : stackIndex * -8;
    const baseTranslateX = isActive ? 0 : 0;

    // Apply drag offset only to active card on mobile and only for horizontal drags
    const dragX =
      isActive && isMobileDevice && isHorizontalDrag ? dragOffset.x : 0;
    const dragY =
      isActive && isMobileDevice && isHorizontalDrag ? dragOffset.y : 0;

    // Add rotation based on drag for more natural feel (mobile only)
    const rotation =
      isActive && isMobileDevice && isHorizontalDrag ? dragOffset.x * 0.1 : 0;

    return `translateX(${baseTranslateX + dragX}px) translateY(${
      baseTranslateY + dragY
    }px) scale(${baseScale}) rotate(${rotation}deg)`;
  };

  // Calculate opacity based on drag distance (mobile only)
  const getCardOpacity = () => {
    if (!isActive) {
      return Math.max(0.4, 1 - stackIndex * 0.2);
    }

    // Only apply drag opacity on mobile for horizontal drags
    if (isDragging && isMobileDevice && isHorizontalDrag) {
      const maxDrag = 200;
      const opacity = 1 - (Math.abs(dragOffset.x) / maxDrag) * 0.3;
      return Math.max(0.7, opacity);
    }

    return 1;
  };

  // Calculate z-index for proper stacking
  const getZIndex = () => {
    return isActive ? 50 : Math.max(0, 10 - stackIndex);
  };

  // Reset audio state when verse changes
  useEffect(() => {
    if (isActive) {
      setAudioState({
        isPlaying: false,
        currentTime: 0,
        duration: 0,
        isLoading: false,
      });
    }
  }, [verse.audioUrl, isActive, setAudioState]);

  // Set audio ref when component becomes active
  useEffect(() => {
    if (isActive && audioRef.current) {
      setAudioRef(audioRef.current);
      if (audioRef.current.src !== verse.audioUrl) {
        audioRef.current.src = verse.audioUrl;
        audioRef.current.load();
      }
    }
  }, [isActive, setAudioRef, verse.audioUrl]);

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isActive) return;

    const handleLoadStart = () => setAudioState({ isLoading: true });
    const handleCanPlay = () => setAudioState({ isLoading: false });
    const handleLoadedMetadata = () => {
      setAudioState({
        duration: audio.duration,
        isLoading: false,
      });
    };
    const handleTimeUpdate = () => {
      setAudioState({
        currentTime: audio.currentTime,
        duration: audio.duration,
      });
    };
    const handleEnded = () => {
      setAudioState({ isPlaying: false, currentTime: 0 });
      const hasNextVerse = currentIndex < totalVerses - 1;

      if (hasNextVerse) {
        setTimeout(() => {
          nextVerse();
          setTimeout(() => {
            if (autoPlay !== false) {
              toggleAudio();
            }
          }, 300);
        }, 500);
      }
    };
    const handleError = (e: Event) => {
      setAudioState({ isLoading: false, isPlaying: false });
      console.error("Audio failed to load:", verse.audioUrl, e);
    };

    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, [
    setAudioState,
    nextVerse,
    verse.audioUrl,
    isActive,
    toggleAudio,
    currentIndex,
    totalVerses,
    autoPlay,
  ]);

  const formatTime = (time: number) => {
    if (!time || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage =
    audioState.duration > 0 && isFinite(audioState.duration)
      ? (audioState.currentTime / audioState.duration) * 100
      : 0;

  const cleanTranslationText = (text: string) => {
    if (!text) return "";

    // Decode HTML entities safely
    const decoded = he.decode(text);

    return decoded
      .replace(/<[^>]*>/g, "") // Remove HTML tags
      .replace(/\d+/g, "") // Remove numbers
      .replace(/[<>\/&;]/g, "") // Remove special chars
      .replace(/\s+/g, " ") // Clean spaces
      .trim();
  };

  return (
    // Use relative positioning for better layout integration
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
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-emerald-800 mb-1">
              {verse.chapterName}
            </h2>
            <p
              className="text-lg text-emerald-600 mb-2"
              style={{ fontFamily: "Amiri, serif" }}
            >
              {verse.chapterArabic}
            </p>
            <p className="text-sm text-emerald-500">
              Ayat {verse.verse.verse_number}
            </p>
          </div>

          {/* Arabic Text with Focus Effect */}
          <div
            className={`
              mb-8 p-6 rounded-lg border transition-all duration-500
              ${
                isActive && audioState.isPlaying
                  ? "bg-white border-emerald-300 shadow-lg shadow-emerald-100 ring-2 ring-emerald-200 ring-opacity-50"
                  : "bg-white border-emerald-100"
              }
            `}
          >
            <div className="relative">
              {/* Animated glow effect when audio is playing */}
              {isActive && audioState.isPlaying && (
                <div
                  className="absolute inset-0 -z-10 rounded-lg animate-pulse"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                />
              )}

              <p
                className={`
                  text-2xl md:text-3xl text-right leading-loose text-emerald-900 font-medium gap-4
                  transition-all duration-500
                  ${
                    isActive && audioState.isPlaying
                      ? "scale-[1.02] transform"
                      : ""
                  }
                `}
                style={{
                  fontFamily: "Amiri, serif",
                  direction: "rtl",
                  lineHeight: "2.5",
                }}
              >
                {verse.verse.text_uthmani} ({verse.verse.verse_number})
              </p>
            </div>
          </div>

          {/* Malay Translation */}
          <div className="mb-8 p-6 bg-amber-50 rounded-lg border border-amber-100">
            <p className="text-lg leading-relaxed text-amber-900">
              {cleanTranslationText(verse.translation)}
            </p>
          </div>

          {/* Audio Controls - Only show for active card */}
          {isActive && (
            <div className="space-y-4">
              {/* Progress Bar */}
              <div className="space-y-2">
                <Progress value={progressPercentage} className="h-2" />
                <div className="flex justify-between text-xs text-emerald-600">
                  <span>{formatTime(audioState.currentTime)}</span>
                  <span>{formatTime(audioState.duration)}</span>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={previousVerse}
                  className="border-emerald-200 hover:bg-emerald-50"
                >
                  <SkipBack className="h-4 w-4" />
                </Button>

                <Button
                  onClick={toggleAudio}
                  disabled={audioState.isLoading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full shadow-lg"
                >
                  {audioState.isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : audioState.isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextVerse}
                  className="border-emerald-200 hover:bg-emerald-50"
                >
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>

              {/* Volume Icon */}
              <div className="flex justify-center">
                <Volume2 className="h-4 w-4 text-emerald-500" />
              </div>
            </div>
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

      {/* Swipe indicators for active card (mobile only) - Only show for horizontal drags */}
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
