import { cleanTranslationText } from "../../utils/textFormatting";

interface ComponentProps {
  translation: string;
}

export function VerseTranslations({ translation }: ComponentProps) {
  return (
    <div className="mb-8 p-6 bg-amber-50 rounded-lg border border-amber-100">
      <p className="text-lg leading-relaxed text-amber-900">
        {cleanTranslationText(translation)}
      </p>
    </div>
  );
}
