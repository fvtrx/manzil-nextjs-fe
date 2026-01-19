export interface Verse {
  id: string;
  chapter_id: number;
  verse_number: number;
  verse_key: string;
  text_uthmani: string;
  text_simple: string;
  translations?: Translation[];
  audio?: {
    url: string;
  };
}

export interface Translation {
  id: number;
  text: string;
  language_name: string;
  resource_name: string;
  resource_id?: number;
}

export interface Chapter {
  id: number;
  name_simple: string;
  name_arabic: string;
  verses_count: number;
}

export interface Audio {
  url: string;
  duration?: number;
}

export interface AudioState {
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
}

export interface VerseData {
  verse: Verse;
  translation: string;
  audioUrl: string;
  chapterName: string;
  chapterArabic: string;
}
