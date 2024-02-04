import { IAppRootState, rootReducer } from "@redux/reducers";
import rootSaga from "@redux/saga";
import { createRouterMiddleware } from "connected-next-router";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const routerMiddleware = createRouterMiddleware();
const sagaMiddleware = createSagaMiddleware();

let middlewares: any = [];
middlewares.push(routerMiddleware);
middlewares.push(sagaMiddleware);

function saveToLocalStorage(state: IAppRootState) {
  try {
    if (typeof window !== "undefined") {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistedState", serialisedState);
    }
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const serialisedState = localStorage.getItem("persistedState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    }
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const configureStore = () => {
  const store = createStore(
    rootReducer,
    // loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return {
    store,
  };
};

export const { store } = configureStore();
store.subscribe(() => saveToLocalStorage(store.getState()));
sagaMiddleware.run(rootSaga);
