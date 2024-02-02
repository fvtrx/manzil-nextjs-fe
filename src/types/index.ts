export interface IMeta {
  title: string;
  description: string;
  type: string;
  image: string;
}

export interface IHeroTitleProps {
  title: string;
  subtitle: string;
}

export interface IRecitationItem {
  id: number;
  reciter_name: string;
  style: string;
  translated_name: {
    language_name: string;
    name: string;
  };
}

export const BASE_URL = process.env.NEXT_PUBLIC_QURAN_BASE_URL || "";
export const AUDIO_URL = process.env.NEXT_PUBLIC_QURAN_AUDIO_URL || "";
