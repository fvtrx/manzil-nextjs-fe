import { rootReducer } from "@redux/reducers";
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

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return {
    store,
  };
};

export const { store } = configureStore();
sagaMiddleware.run(rootSaga);
