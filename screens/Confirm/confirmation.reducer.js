import { handleActions } from "redux-actions";
import { LOCATION_CHANGE } from "react-router-redux";
import { get } from "lodash";

import { orderCreateSuccess } from "./confirmation.actions";

const initialState = {
  list: []
};

export const ConfirmReducer = handleActions(
  {
    [orderCreateSuccess]: (state, {payload: {response}}) => {
      return {
        ...state,
        list: [...response],
        loading: true
      };
    }
  },
  initialState
);
