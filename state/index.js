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
import Reactotron from "reactotron-react-native";
import { createContext } from "../request";

/* === MIDDLEWARES === */
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunk from "redux-thunk";

/* === REDUCER === */
import rootReducer from "./reducers";

const configureStore = (preloadedState = {}) => {
  // Create a history depending on the environment
  const enhancers = [monitorReducersEnhancer];
  const thunkContext = {
    request: createContext()
  };
  const middleware = [
    thunk.withExtraArgument(thunkContext),
    routerMiddleware(history)
  ];

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  // Do we have preloaded state available? Great, save it.
  const initialState = preloadedState;

  // Create the store
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  Reactotron.configure()
    .useReactNative()
    .connect();

  return {
    store,
    history,
    getState: store.getState
  };
};

const { store, getState } = configureStore();
export {
  store,
  history,
  getState
}
console.log(store.getState());
export default store;
