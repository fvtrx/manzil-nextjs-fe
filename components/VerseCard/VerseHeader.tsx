import type { VerseData } from "@/lib/types";

interface ComponentProps {
  verse: VerseData;
}

export function VerseHeader({ verse }: ComponentProps) {
  return (
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
  );
}
