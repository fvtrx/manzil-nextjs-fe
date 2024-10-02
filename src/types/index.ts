export interface IMeta {
  title: string;
  description: string;
  type: string;
  image: string;
  url: string;
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

export interface IHomeProps {
  getSurahAlFatihah: () => void;
  getSurahAlBaqarah: () => void;
  getSurahAlImran: () => void;
  getSurahAlMukminun: () => void;
  getSurahAlJinn: () => void;
  getSurahAlHasyr: () => void;
  getSurahAsSaffat: () => void;
  getSurahAlIkhlas: () => void;
  getSurahAlFalaq: () => void;
  getSurahAnNas: () => void;
  setLoading: (payload: boolean) => void;
}

export interface IAyahAudioItem {
  [k: string]: unknown;
  id: number;
  audio_url: string;
  surahName: string;
  verseNumber: string;
  chapter_id: number;
}

export interface IAyahState {
  ayahAudioList: IAyahAudioItem[];
  isLoading: boolean;
}

export interface IAudio {
  audio_url: "https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3";
  chapter_id: 1;
  file_size: 839808;
  format: "mp3";
  id: 911;
}

export interface IChapterAudioResponse {
  audio_file: IAudio;
}

export interface IVerseAudio {
  verse_key: string;
  url: string;
}

export interface IVerseAudioResponse {
  audio_files: IVerseAudio[];
}

export interface IAudioItem {
  id: number;
  surahName: string;
  audio_url: string;
  verseNumber: number;
  chapter_id: number;
}

export enum AlBaqarahVerseKey {
  AYAH_1 = "2:1",
  AYAH_2 = "2:2",
  AYAH_3 = "2:3",
  AYAH_4 = "2:4",
  AYAH_5 = "2:5",
  AYAH_102 = "2:102",
  AYAH_163 = "2:163",
  AYAH_255 = "2:255",
  AYAH_256 = "2:256",
  AYAH_257 = "2:257",
  AYAH_284 = "2:284",
  AYAH_285 = "2:285",
  AYAH_286 = "2:286",
}

export enum AlImranVerseKey {
  AYAH_18 = "3:18",
  AYAH_26 = "3:26",
  AYAH_27 = "3:27",
}

export enum AlMukminunVerseKey {
  AYAH_115 = "23:115",
  AYAH_116 = "23:116",
  AYAH_117 = "23:117",
  AYAH_118 = "23:118",
}

export enum AsSaffatVerseKey {
  AYAH_1 = "37:1",
  AYAH_2 = "37:2",
  AYAH_3 = "37:3",
  AYAH_4 = "37:4",
  AYAH_5 = "37:5",
  AYAH_6 = "37:6",
  AYAH_7 = "37:7",
  AYAH_8 = "37:8",
  AYAH_9 = "37:9",
  AYAH_10 = "37:10",
}

export enum AlHasyrVerseKey {
  AYAH_21 = "59:21",
  AYAH_22 = "59:22",
  AYAH_23 = "59:23",
  AYAH_24 = "59:24",
}

export enum AlJinnVerseKey {
  AYAH_1 = "72:1",
  AYAH_2 = "72:2",
  AYAH_3 = "72:3",
  AYAH_4 = "72:4",
}

export const BASE_URL = process.env.NEXT_PUBLIC_QURAN_BASE_URL || "";
export const AUDIO_URL = process.env.NEXT_PUBLIC_QURAN_AUDIO_URL || "";
