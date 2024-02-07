import {
  IAyahActionType,
  setAyahAudioList,
} from "@src/redux/actions/ayahAction";
import {
  IAudioItem,
  IChapterAudioResponse,
  IVerseAudio,
  IVerseAudioResponse,
} from "@src/types";
import { AxiosInstanceAPI } from "@src/utils/APICall";
import { checkVerseKeyExists } from "@src/utils/checkVerseKey";
import { fork, put, takeEvery, takeLatest } from "redux-saga/effects";

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
          const { data } = checkVerseKeyExists(item, id);
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
          const { data } = checkVerseKeyExists(item, id);
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
          const { data } = checkVerseKeyExists(item, id);
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

function* getSurahAsSaffat() {
  try {
    const { audio_files }: IVerseAudioResponse = yield AxiosInstanceAPI({
      endpoint: "/quran/recitations/7",
      params: {
        chapter_number: 37,
      },
    });

    if (audio_files) {
      const mappedAlSaffatAudioItems = audio_files
        .map((item: IVerseAudio, id: number) => {
          const { data } = checkVerseKeyExists(item, id);
          return data;
        })
        .filter((item) => item !== undefined)
        .sort(
          (a: IAudioItem | any, b: IAudioItem | any) =>
            a?.verseNumber - b?.verseNumber
        );

      for (let i = 0; i < mappedAlSaffatAudioItems.length; i++) {
        yield put(setAyahAudioList(mappedAlSaffatAudioItems[i]));
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* getSurahAlHasyr() {
  try {
    const { audio_files }: IVerseAudioResponse = yield AxiosInstanceAPI({
      endpoint: "/quran/recitations/7",
      params: {
        chapter_number: 59,
      },
    });

    if (audio_files) {
      const mappedAlHasyrAudioItems = audio_files
        .map((item: IVerseAudio, id: number) => {
          const { data } = checkVerseKeyExists(item, id);
          return data;
        })
        .filter((item) => item !== undefined)
        .sort(
          (a: IAudioItem | any, b: IAudioItem | any) =>
            a?.verseNumber - b?.verseNumber
        );

      for (let i = 0; i < mappedAlHasyrAudioItems.length; i++) {
        yield put(setAyahAudioList(mappedAlHasyrAudioItems[i]));
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
          const { data } = checkVerseKeyExists(item, id);
          return data;
        })
        .filter((item) => item !== undefined);

      yield put(setAyahAudioList(mappedAlMukminunAudioItems[0]));
    }
  } catch (error) {
    console.log(error);
  }
}

function* getSurahAlIkhlas() {
  try {
    const { audio_file }: IChapterAudioResponse = yield AxiosInstanceAPI({
      endpoint: "/chapter_recitations/7/112",
    });

    if (audio_file) {
      yield put(
        setAyahAudioList({
          id: 112,
          surahName: "Al-Ikhlas",
          audio_url: audio_file?.audio_url,
          verseNumber: "1-4",
          chapter_id: 112,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* getSurahAlFalaq() {
  try {
    const { audio_file }: IChapterAudioResponse = yield AxiosInstanceAPI({
      endpoint: "/chapter_recitations/7/113",
    });

    if (audio_file) {
      yield put(
        setAyahAudioList({
          id: 113,
          surahName: "Al-Falaq",
          audio_url: audio_file?.audio_url,
          verseNumber: "1-5",
          chapter_id: 113,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* getSurahAnNas() {
  try {
    const { audio_file }: IChapterAudioResponse = yield AxiosInstanceAPI({
      endpoint: "/chapter_recitations/7/114",
    });

    if (audio_file) {
      yield put(
        setAyahAudioList({
          id: 114,
          surahName: "An-Nas",
          audio_url: audio_file?.audio_url,
          verseNumber: "1-6",
          chapter_id: 114,
        })
      );
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
  yield takeEvery(IAyahActionType.GET_SURAH_AL_HASYR, getSurahAlHasyr);
  yield takeEvery(IAyahActionType.GET_SURAH_AS_SAFFAT, getSurahAsSaffat);
  yield takeEvery(IAyahActionType.GET_SURAH_AL_IKHLAS, getSurahAlIkhlas);
  yield takeEvery(IAyahActionType.GET_SURAH_AL_FALAQ, getSurahAlFalaq);
  yield takeEvery(IAyahActionType.GET_SURAH_AN_NAS, getSurahAnNas);
}

const ayahSaga = [fork(watchAyahSaga)];

export default ayahSaga;
