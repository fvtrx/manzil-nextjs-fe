import { create } from "zustand";
import { VerseData } from "@/lib/types";
import { ALL_VERSES } from "@/lib/verses-data";

interface AudioState {
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
}

interface VerseStore {
  currentIndex: number;
  verses: VerseData[];
  audioState: AudioState;
  audioRef: HTMLAudioElement | null;
  autoPlay?: boolean;

  // Actions
  setCurrentIndex: (index: number) => void;
  setVerses: (verses: VerseData[]) => void;
  nextVerse: () => void;
  previousVerse: () => void;
  setAudioRef: (ref: HTMLAudioElement | null) => void;
  setAudioState: (state: Partial<AudioState>) => void;
  setAutoPlay: (autoPlay: boolean) => void;
  playAudio: () => void;
  pauseAudio: () => void;
  toggleAudio: () => void;
}

export const useVerseStore = create<VerseStore>((set, get) => ({
  currentIndex: 0,
  verses: [],
  audioState: {
    isPlaying: false,
    isLoading: false,
    currentTime: 0,
    duration: 0,
  },
  audioRef: null,
  autoPlay: true,

  setCurrentIndex: (index) => set({ currentIndex: index }),

  setVerses: (verses) => set({ verses }),

  nextVerse: () => {
    const { currentIndex, verses } = get();
    if (currentIndex < verses.length - 1) {
      set({ currentIndex: currentIndex + 1 });
      // Reset audio state when changing verses
      set((prev) => ({
        audioState: { ...prev.audioState, isPlaying: false, currentTime: 0 },
      }));
    }
  },

  setAutoPlay: (autoPlay) => set({ autoPlay }),

  previousVerse: () => {
    const { currentIndex } = get();
    if (currentIndex > 0) {
      set({ currentIndex: currentIndex - 1 });
      // Reset audio state when changing verses
      set((prev) => ({
        audioState: { ...prev.audioState, isPlaying: false, currentTime: 0 },
      }));
    }
  },

  setAudioRef: (ref) => set({ audioRef: ref }),

  setAudioState: (state) =>
    set((prev) => ({
      audioState: { ...prev.audioState, ...state },
    })),

  playAudio: () => {
    const { audioRef } = get();
    if (audioRef) {
      audioRef.play();
      set((prev) => ({
        audioState: { ...prev.audioState, isPlaying: true },
      }));
    }
  },

  pauseAudio: () => {
    const { audioRef } = get();
    if (audioRef) {
      audioRef.pause();
      set((prev) => ({
        audioState: { ...prev.audioState, isPlaying: false },
      }));
    }
  },

  toggleAudio: () => {
    const { audioState } = get();
    if (audioState.isPlaying) {
      get().pauseAudio();
    } else {
      get().playAudio();
    }
  },
}));
