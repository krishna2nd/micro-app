import { combineReducers } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { history } from "../history";
import { HomeReducer } from "../../screens/Home";

export default combineReducers({
  router: connectRouter(history),
  HomeReducer
});