import { IAyahAudioItem } from "@src/types";
import { action } from "typesafe-actions";

export enum IAyahActionType {
  GET_SURAH_AL_FATIHAH = "manzil/GET_SURAH_AL_FATIHAH",
  GET_SURAH_AL_BAQARAH = "manzil/GET_SURAH_AL_BAQARAH",

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

export const getAyahAudioList = () =>
  action(IAyahActionType.GET_AYAH_AUDIO_LIST);
export const setAyahAudioList = (payload: any) =>
  action(IAyahActionType.SET_AYAH_AUDIO_LIST, payload);
export const resetAyahAudioList = () =>
  action(IAyahActionType.RESET_AYAH_AUDIO_LIST);

export const setLoading = (payload: boolean) =>
  action(IAyahActionType.SET_LOADING, payload);
export const resetLoading = () => action(IAyahActionType.RESET_LOADING);
