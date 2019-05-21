import { combineReducers } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { history } from "../history";
import { HomeReducer } from "../../screens/Home";
import { PdpReducer } from "../../screens/PDP";
import { CartReducer } from "../../screens/Cart";

export default combineReducers({
  router: connectRouter(history),
  HomeReducer,
  PdpReducer,
  CartReducer
});
