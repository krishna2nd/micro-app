// import { applyMiddleware, compose, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import monitorReducersEnhancer from "./monitor";
// import rootReducer from './reducers'

// const configureStore = (preloadedState) => {
//   const middlewares = [thunkMiddleware]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//   const composedEnhancers = compose(...enhancers)

//   const store = createStore(rootReducer, preloadedState, composedEnhancers)

//   return store
// }

// export default configureStore;

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { history } from "./history";
//import Reactotron from "reactotron-react-native";
//import { reactotronRedux } from "reactotron-redux";
import devTools from "remote-redux-devtools";
import { devToolsEnhancer } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage, NativeModules } from "react-native";

import { createContext } from "../request";

/* === MIDDLEWARES === */
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunk from "redux-thunk";

/* === REDUCER === */
import rootReducer from "./reducers";

//if (process.env.NODE_ENV === "development") {
// NativeModules.DevSettings.setIsDebuggingRemotely(true);
//}

const createReducer = rootReducer => {
  const persistConfig = {
    key: "root",
    storage: AsyncStorage
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  return connectRouter(history)(persistedReducer);
};

const configureStore = (preloadedState = {}) => {
  // Create a history depending on the environment
  const enhancers = [monitorReducersEnhancer, devTools()];
  const thunkContext = {
    request: createContext()
  };
  const middleware = [
    thunk.withExtraArgument(thunkContext),
    routerMiddleware(history)
  ];

  const composedEnhancers = devToolsEnhancer(
    applyMiddleware(...middleware),
    ...enhancers
  );

  // Do we have preloaded state available? Great, save it.
  const initialState = preloadedState;

  // Create the store
  const _rootReducer = createReducer(rootReducer);
  const store = createStore(_rootReducer, initialState, composedEnhancers);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = createReducer(require("./reducers").default);
      store.replaceReducer(nextRootReducer);
    });
  }
  const persistor = persistStore(store);
  // Reactotron.configure()
  //   .use(reactotronRedux())
  //   .useReactNative()
  //   .connect();
  // Reactotron.log(store, history, store.getState());
  return {
    store,
    persistor,
    history,
    getState: store.getState
  };
};

const { store, getState, persistor } = configureStore();
export { store, history, getState, persistor };
export default store;
