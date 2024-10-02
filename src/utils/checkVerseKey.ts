import {
  AlBaqarahVerseKey,
  AlHasyrVerseKey,
  AlImranVerseKey,
  AlJinnVerseKey,
  AlMukminunVerseKey,
  AsSaffatVerseKey,
  IAudioItem,
  IVerseAudio,
} from "@src/types";

export function checkVerseKeyExists(
  item: IVerseAudio,
  id: number
): IAudioItem | any {
  let data;
  switch (item?.verse_key) {
    case AlBaqarahVerseKey.AYAH_1:
    case AlBaqarahVerseKey.AYAH_2:
    case AlBaqarahVerseKey.AYAH_3:
    case AlBaqarahVerseKey.AYAH_4:
    case AlBaqarahVerseKey.AYAH_5:
    case AlBaqarahVerseKey.AYAH_102:
    case AlBaqarahVerseKey.AYAH_163:
    case AlBaqarahVerseKey.AYAH_255:
    case AlBaqarahVerseKey.AYAH_256:
    case AlBaqarahVerseKey.AYAH_257:
    case AlBaqarahVerseKey.AYAH_284:
    case AlBaqarahVerseKey.AYAH_285:
    case AlBaqarahVerseKey.AYAH_286:
      data = {
        id: id + 1,
        surahName: "Al-Baqarah",
        audio_url: `https://verses.quran.com/${item?.url}`,
        verseNumber: id + 1,
        chapter_id: 2,
      };
      return { data };

    case AlImranVerseKey.AYAH_18:
    case AlImranVerseKey.AYAH_26:
    case AlImranVerseKey.AYAH_27:
      data = {
        id: id + 100,
        surahName: "Al-Imran",
        audio_url: `https://verses.quran.com/${item?.url}`,
        verseNumber: id + 1,
        chapter_id: 3,
      };
      return { data };

    case AlMukminunVerseKey.AYAH_115:
    case AlMukminunVerseKey.AYAH_116:
    case AlMukminunVerseKey.AYAH_117:
    case AlMukminunVerseKey.AYAH_118:
      data = {
        id: id + 1,
        surahName: "Al-Mukminun",
        audio_url: `https://verses.quran.com/${item?.url}`,
        verseNumber: id + 1,
        chapter_id: 23,
      };
      return { data };

    case AsSaffatVerseKey.AYAH_1:
    case AsSaffatVerseKey.AYAH_2:
    case AsSaffatVerseKey.AYAH_3:
    case AsSaffatVerseKey.AYAH_4:
    case AsSaffatVerseKey.AYAH_5:
    case AsSaffatVerseKey.AYAH_6:
    case AsSaffatVerseKey.AYAH_7:
    case AsSaffatVerseKey.AYAH_8:
    case AsSaffatVerseKey.AYAH_9:
    case AsSaffatVerseKey.AYAH_10:
      data = {
        id: id + 200,
        surahName: "As-Saffat",
        audio_url: `https://verses.quran.com/${item?.url}`,
        verseNumber: id + 1,
        chapter_id: 37,
      };
      return { data };

    case AlHasyrVerseKey.AYAH_21:
    case AlHasyrVerseKey.AYAH_22:
    case AlHasyrVerseKey.AYAH_23:
    case AlHasyrVerseKey.AYAH_24:
      data = {
        id: id + 1,
        surahName: "Al-Hasyr",
        audio_url: `https://verses.quran.com/${item?.url}`,
        verseNumber: id + 1,
        chapter_id: 59,
      };
      return { data };

    case AlJinnVerseKey.AYAH_1:
    case AlJinnVerseKey.AYAH_2:
    case AlJinnVerseKey.AYAH_3:
    case AlJinnVerseKey.AYAH_4:
      data = {
        id: id + 300,
        surahName: "Al-Jinn",
        audio_url: `https://verses.quran.com/${item?.url}`,
        verseNumber: id + 1,
        chapter_id: 72,
      };
      return { data };

    default:
      data = undefined;
      return { data };
  }
}
