import { IAppRootState } from "@redux/reducers";
import { createSelector } from "@reduxjs/toolkit";
import { IAyahActionType } from "@src/redux/actions/ayahAction";
import { IAyahAudioItem } from "@src/types";
export interface IState {
  ayahAudioList: IAyahAudioItem[];
  isLoading: boolean;
}

export const initialState: IState = {
  ayahAudioList: [],
  isLoading: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case IAyahActionType.GET_AYAH_AUDIO_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case IAyahActionType.SET_AYAH_AUDIO_LIST:
      if (
        !state.ayahAudioList.some((obj: any) => obj.id === action.payload.id)
      ) {
        // If not present, push the payload into a new array
        return {
          ...state,
          ayahAudioList: [...state.ayahAudioList, action.payload],
        };
      }
      // If the payload is already present, return the state unchanged
      return {
        ...state,
        ayahAudioList: state.ayahAudioList,
      };
    case IAyahActionType.RESET_AYAH_AUDIO_LIST:
      return {
        ...state,
        ayahAudioList: state.ayahAudioList ?? [],
      };

    case IAyahActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case IAyahActionType.RESET_LOADING:
      return {
        ...state,
        isLoading: state.isLoading ?? false,
      };
    default:
      return state;
  }
};

const ayahAudioList = (state: IAppRootState) => state.ayah.ayahAudioList;
const isLoading = (state: IAppRootState) => state.ayah.isLoading;

export const getAyahAudioList = createSelector([ayahAudioList], (data) => data);
export const getLoading = createSelector([isLoading], (data) => data);

export { reducer as ayahReducer };
