"use client";

import { useVerseStore } from "@/store/verse-store";

export function ProgressIndicator() {
  const { currentIndex, verses } = useVerseStore();

  if (verses.length === 0) return null;

  const progress = ((currentIndex + 1) / verses.length) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-screen">
      <div className="bg-white/90 backdrop-blur-sm border-b border-emerald-100">
        <div className="w-full max-w-[512px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between text-sm text-emerald-600 mb-2">
            <span>Progress</span>
            <span>
              {currentIndex + 1} / {verses.length}
            </span>
          </div>
          <div className="w-full bg-emerald-100 rounded-full h-2">
            <div
              className="bg-emerald-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
