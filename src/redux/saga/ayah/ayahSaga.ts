import {
  IAyahActionType,
  setAyahAudioList,
} from "@src/redux/actions/ayahAction";
import {
  AlBaqarahVerseKey,
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
        verseNumber: `${id + 1}`,
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
        .sort((a: IAudioItem | any, b: IAudioItem | any) => b?.id - a?.id);

      for (let i = 0; i < mappedAlBaqarahAudioItems.length; i++) {
        yield put(setAyahAudioList(mappedAlBaqarahAudioItems[i]));
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchAyahSaga() {
  yield takeLatest(IAyahActionType.GET_SURAH_AL_FATIHAH, getSurahAlFatihah);
  yield takeEvery(IAyahActionType.GET_SURAH_AL_BAQARAH, getSurahAlBaqarah);
}

const ayahSaga = [fork(watchAyahSaga)];

export default ayahSaga;
