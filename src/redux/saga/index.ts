import { all } from "redux-saga/effects";
import ayahSaga from "./ayah/ayahSaga";

export default function* rootSaga() {
  yield all([...ayahSaga]);
}
