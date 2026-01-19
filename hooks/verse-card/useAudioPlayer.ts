import { useEffect, useRef } from "react";
import { useVerseStore } from "@/store/verse-store";
import { VerseData } from "@/lib/types";

interface UseAudioPlayerProps {
  verse: VerseData;
  isActive: boolean;
  currentIndex: number;
  totalVerses: number;
}

export function useAudioPlayer({
  verse,
  isActive,
  currentIndex,
  totalVerses,
}: UseAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    audioState,
    setAudioRef,
    setAudioState,
    toggleAudio,
    nextVerse,
    autoPlay,
  } = useVerseStore();

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

  // Calculate progress percentage
  const progressPercentage =
    audioState.duration > 0 && isFinite(audioState.duration)
      ? (audioState.currentTime / audioState.duration) * 100
      : 0;

  // Format time helper
  const formatTime = (time: number) => {
    if (!time || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return {
    audioRef,
    audioState,
    toggleAudio,
    formatTime,
    progressPercentage,
  };
}
