import {
  IAyahActionType,
  setAyahAudioList,
} from "@src/redux/actions/ayahAction";
import { BASE_URL, IAyahAudioItem } from "@src/types";
import { AxiosInstanceAPI } from "@src/utils/APICall";

import axios from "axios";
import { delay, fork, put, takeEvery, takeLatest } from "redux-saga/effects";

interface IAudio {
  audio_url: "https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3";
  chapter_id: 1;
  file_size: 839808;
  format: "mp3";
  id: 911;
}

interface IChapterAudioResponse {
  audio_file: IAudio;
}

interface IVerseAudio {
  verse_key: string;
  url: string;
}

interface IVerseAudioResponse {
  audio_files: IVerseAudio[];
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
      const mappedAudioItems = audio_files
        .slice(0, 5)
        .map((item: IVerseAudio, id: number) => {
          return {
            id: id + 1,
            surahName: "Al-Baqarah",
            audio_url: `https://verses.quran.com/${item?.url}`,
            verseNumber: `${id + 1}`,
          } as IAyahAudioItem;
        })
        .sort((a, b) => b.id - a.id);

      for (let i = 0; i < mappedAudioItems.length; i++) {
        yield put(setAyahAudioList(mappedAudioItems[i]));
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
