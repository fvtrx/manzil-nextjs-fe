import { VerseData, AudioState } from "@/lib/types";

interface ComponentProps {
  isActive: boolean;
  verse: VerseData;
  audioState: AudioState;
}

export function ArabicText({ isActive, verse, audioState }: ComponentProps) {
  return (
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
  );
}
