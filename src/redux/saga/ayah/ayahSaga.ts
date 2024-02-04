import {
  IAyahActionType,
  setAyahAudioList,
} from "@src/redux/actions/ayahAction";
import {
  AlBaqarahVerseKey,
  AlImranVerseKey,
  AlJinnVerseKey,
  AlMukminunVerseKey,
  IAudioItem,
  IChapterAudioResponse,
  IVerseAudio,
  IVerseAudioResponse,
} from "@src/types";
import { AxiosInstanceAPI } from "@src/utils/APICall";
import { fork, put, takeEvery, takeLatest } from "redux-saga/effects";

function checkVerseKeyExists(
  item: IVerseAudio,
  id: number
): IAudioItem | undefined {
  switch (item?.verse_key) {
    case AlBaqarahVerseKey.AYAH_1:
    case AlBaqarahVerseKey.AYAH_2:
    case AlBaqarahVerseKey.AYAH_3:
    case AlBaqarahVerseKey.AYAH_4:
    case AlBaqarahVerseKey.AYAH_5:
    case AlBaqarahVerseKey.AYAH_163:
    case AlBaqarahVerseKey.AYAH_255:
    case AlBaqarahVerseKey.AYAH_256:
    case AlBaqarahVerseKey.AYAH_257:
    case AlBaqarahVerseKey.AYAH_284:
    case AlBaqarahVerseKey.AYAH_285:
    case AlBaqarahVerseKey.AYAH_286:
      return {
        id: id + 1,
        surahName: "Al-Baqarah",
        audio_url: `https://verses.quran.com/${item?.url}`,
        verseNumber: id + 1,
        chapter_id: 2,
      };

    case AlImranVerseKey.AYAH_18:
      return {
        id: 15,
        surahName: "Al-Imran",
        audio_url: `https://verses.quran.com/${item?.url}`,
        verseNumber: 18,
        chapter_id: 3,
      };

    case AlMukminunVerseKey.AYAH_116:
    case AlMukminunVerseKey.AYAH_117:
    case AlMukminunVerseKey.AYAH_118:
      return {
        id: id + 1,
        surahName: "Al-Mukminun",
        audio_url: `https://verses.quran.com/${item?.url}`,
        verseNumber: id + 1,
        chapter_id: 23,
      };

    case AlJinnVerseKey.AYAH_3:
      return {
        id: 16,
        surahName: "Al-Jinn",
        audio_url: `https://verses.quran.com/${item?.url}`,
        verseNumber: 3,
        chapter_id: 72,
      };

    default:
      return undefined;
  }
}

function* getSurahAlFatihah() {
  try {
    const { audio_file }: IChapterAudioResponse = yield AxiosInstanceAPI({
      endpoint: "/chapter_recitations/7/1",
    });

    if (audio_file) {
      yield put(
        setAyahAudioList({
          id: 0,
          surahName: "Al-Fatihah",
          audio_url: audio_file?.audio_url,
          verseNumber: "1-7",
          chapter_id: 1,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* getSurahAlBaqarah() {
  try {
    const { audio_files }: IVerseAudioResponse = yield AxiosInstanceAPI({
      endpoint: "/quran/recitations/7",
      params: {
        chapter_number: 2,
      },
    });

    if (audio_files) {
      const mappedAlBaqarahAudioItems = audio_files
        .map((item: IVerseAudio, id: number) => {
          const data = checkVerseKeyExists(item, id);
          return data;
        })
        .filter((item) => item !== undefined)
        .sort(
          (a: IAudioItem | any, b: IAudioItem | any) =>
            a?.verseNumber - b?.verseNumber
        );

      for (let i = 0; i < mappedAlBaqarahAudioItems.length; i++) {
        yield put(setAyahAudioList(mappedAlBaqarahAudioItems[i]));
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* getSurahAlImran() {
  try {
    const { audio_files }: IVerseAudioResponse = yield AxiosInstanceAPI({
      endpoint: "/quran/recitations/7",
      params: {
        chapter_number: 3,
      },
    });

    if (audio_files) {
      const mappedAlImranAudioItems = audio_files
        .map((item: IVerseAudio, id: number) => {
          const data = checkVerseKeyExists(item, id);
          return data;
        })
        .filter((item) => item !== undefined);

      yield put(setAyahAudioList(mappedAlImranAudioItems[0]));
    }
  } catch (error) {
    console.log(error);
  }
}

function* getSurahAlMukminun() {
  try {
    const { audio_files }: IVerseAudioResponse = yield AxiosInstanceAPI({
      endpoint: "/quran/recitations/7",
      params: {
        chapter_number: 23,
      },
    });

    if (audio_files) {
      const mappedAlMukminunAudioItems = audio_files
        .map((item: IVerseAudio, id: number) => {
          const data = checkVerseKeyExists(item, id);
          return data;
        })
        .filter((item) => item !== undefined)
        .sort(
          (a: IAudioItem | any, b: IAudioItem | any) =>
            a?.verseNumber - b?.verseNumber
        );

      for (let i = 0; i < mappedAlMukminunAudioItems.length; i++) {
        yield put(setAyahAudioList(mappedAlMukminunAudioItems[i]));
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* getSurahAlJinn() {
  try {
    const { audio_files }: IVerseAudioResponse = yield AxiosInstanceAPI({
      endpoint: "/quran/recitations/7",
      params: {
        chapter_number: 72,
      },
    });

    if (audio_files) {
      const mappedAlMukminunAudioItems = audio_files
        .map((item: IVerseAudio, id: number) => {
          const data = checkVerseKeyExists(item, id);
          return data;
        })
        .filter((item) => item !== undefined);

      yield put(setAyahAudioList(mappedAlMukminunAudioItems[0]));
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchAyahSaga() {
  yield takeLatest(IAyahActionType.GET_SURAH_AL_FATIHAH, getSurahAlFatihah);
  yield takeEvery(IAyahActionType.GET_SURAH_AL_BAQARAH, getSurahAlBaqarah);
  yield takeEvery(IAyahActionType.GET_SURAH_AL_IMRAN, getSurahAlImran);
  yield takeEvery(IAyahActionType.GET_SURAH_AL_MUKMINUN, getSurahAlMukminun);
  yield takeEvery(IAyahActionType.GET_SURAH_AL_JINN, getSurahAlJinn);
}

const ayahSaga = [fork(watchAyahSaga)];

export default ayahSaga;
