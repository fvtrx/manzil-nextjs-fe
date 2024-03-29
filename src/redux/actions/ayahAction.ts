import { IAyahAudioItem } from "@src/types";
import { action } from "typesafe-actions";

export enum IAyahActionType {
  GET_SURAH_AL_FATIHAH = "manzil/GET_SURAH_AL_FATIHAH",
  GET_SURAH_AL_BAQARAH = "manzil/GET_SURAH_AL_BAQARAH",
  GET_SURAH_AL_IMRAN = "manzil/GET_SURAH_AL_IMRAN",
  GET_SURAH_AL_MUKMINUN = "manzil/GET_SURAH_AL_MUKMINUN",
  GET_SURAH_AS_SAFFAT = "manzil/GET_SURAH_AS_SAFFAT",
  GET_SURAH_AL_HASYR = "manzil/GET_SURAH_AL_HASYR",
  GET_SURAH_AL_JINN = "manzil/GET_SURAH_AL_JINN",
  GET_SURAH_AL_IKHLAS = "manzil/GET_SURAH_AL_IKHLAS",
  GET_SURAH_AL_FALAQ = "manzil/GET_SURAH_AL_FALAQ",
  GET_SURAH_AN_NAS = "manzil/GET_SURAH_AN_NAS",

  GET_AYAH_AUDIO_LIST = "manzil/GET_AYAH_AUDIO_LIST",
  SET_AYAH_AUDIO_LIST = "manzil/SET_AYAH_AUDIO_LIST",
  RESET_AYAH_AUDIO_LIST = "manzil/RESET_AYAH_AUDIO_LIST",

  SET_LOADING = "manzil/SET_LOADING",
  RESET_LOADING = "manzil/RESET_LOADING",
}

export const getSurahAlFatihah = () =>
  action(IAyahActionType.GET_SURAH_AL_FATIHAH);
export const getSurahAlBaqarah = () =>
  action(IAyahActionType.GET_SURAH_AL_BAQARAH);
export const getSurahAlImran = () => action(IAyahActionType.GET_SURAH_AL_IMRAN);
export const getSurahAlMukminun = () =>
  action(IAyahActionType.GET_SURAH_AL_MUKMINUN);
export const getSurahAlJinn = () => action(IAyahActionType.GET_SURAH_AL_JINN);
export const getSurahAlHasyr = () => action(IAyahActionType.GET_SURAH_AL_HASYR);
export const getSurahAsSaffat = () =>
  action(IAyahActionType.GET_SURAH_AS_SAFFAT);
export const getSurahAlIkhlas = () =>
  action(IAyahActionType.GET_SURAH_AL_IKHLAS);
export const getSurahAlFalaq = () => action(IAyahActionType.GET_SURAH_AL_FALAQ);
export const getSurahAnNas = () => action(IAyahActionType.GET_SURAH_AN_NAS);

export const getAyahAudioList = () =>
  action(IAyahActionType.GET_AYAH_AUDIO_LIST);
export const setAyahAudioList = (payload: IAyahAudioItem | any) =>
  action(IAyahActionType.SET_AYAH_AUDIO_LIST, payload);
export const resetAyahAudioList = () =>
  action(IAyahActionType.RESET_AYAH_AUDIO_LIST);

export const setLoading = (payload: boolean) =>
  action(IAyahActionType.SET_LOADING, payload);
export const resetLoading = () => action(IAyahActionType.RESET_LOADING);
