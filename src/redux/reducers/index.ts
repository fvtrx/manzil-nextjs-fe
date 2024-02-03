import { IAyahState } from "@src/types";
import {
  RouterState as IRouterState,
  initialRouterState,
  routerReducer,
} from "connected-next-router";
import Router from "next/router";
import { combineReducers } from "redux";
import {
  ayahReducer,
  initialState as initialAyahState,
} from "./ayah/ayahReducer";

const { asPath } = Router.router || {};

export const initialState: IAppRootState = {
  ayah: initialAyahState,
  router: initialRouterState(asPath),
};

export interface IAppRootState {
  ayah: IAyahState;
  router: IRouterState;
}

export const rootReducer = combineReducers({
  router: routerReducer,
  ayah: ayahReducer,
});
