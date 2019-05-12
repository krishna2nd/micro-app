/* === LIBRARIES === */
import { createAction } from 'redux-actions';

import { get } from 'src/request/request.api';
import { createRequestActions } from 'src/request/request.utils';
import { initListNormalizr } from './user.normalizr';

/* === IMPORTED_ACTIONS === */
import { listMergeList } from 'src/components/list/list.actions';
import { toggleLoader } from 'src/components/loader/loader.actions';
import { onShowAlert } from 'src/components/shared/alert/alert.actions';
import {
  getRenewBannerInfo,
  showRenewBanner
} from 'src/components/account/components/membership/membership.selectors';
import {
  getAnnouncementInfo,
  showAnnouncement
} from 'src/components/account/components/order/order.selectors';

import { checkAddressDiffAndOpenDialog } from 'src/components/upfront/utils';

/* === CONSTANTS === */
import {
  INIT_USER_API_PATH,
  GET_SESSION_API_PATH,
  FAVORITES_ID_PROPERTY,
  FAVORITES_ITEM_PROPERTY,
  SAVE_LATER_ID_PROPERTY,
  SAVE_LATER_ITEM_PROPERTY
} from './user.constants';

/* === TYPES === */
export const UPDATE_USER = 'user/UPDATE_USER';
export const RESET = 'user/RESET';

/* === ACTIONS === */
export const updateUser = createAction(UPDATE_USER);
export const resetUser = createAction(RESET);

export const {
  initUserRequest,
  initUserSuccess,
  initUserFailure
} = createRequestActions('initUser', 'user');

export const initUser = () => (dispatch, getState) => {
  dispatch(initUserRequest());
  dispatch(toggleLoader(true));

  return dispatch(
    get({
      url: INIT_USER_API_PATH
    })
  )
    .then(response => {
      dispatch(initUserSuccess(response));

      const state = getState();

      if (showAnnouncement(state))
        dispatch(onShowAlert(getAnnouncementInfo(state)));
      if (showRenewBanner(state))
        dispatch(onShowAlert(getRenewBannerInfo(state)));

      checkAddressDiffAndOpenDialog(response);
      dispatch(
        listMergeList(
          initListNormalizr(
            response,
            FAVORITES_ID_PROPERTY,
            FAVORITES_ITEM_PROPERTY
          )
        )
      );
      dispatch(
        listMergeList(
          initListNormalizr(
            response,
            SAVE_LATER_ID_PROPERTY,
            SAVE_LATER_ITEM_PROPERTY
          )
        )
      );
      dispatch(toggleLoader(false));
      return response;
    })
    .catch(({ message }) => {
      dispatch(toggleLoader(false));
      dispatch(initUserFailure(message));
      return Promise.reject(message);
    });
};

export const {
  getSessionRequest,
  getSessionSuccess,
  getSessionFailure
} = createRequestActions('getSession', 'user');

export const getSession = () => dispatch => {
  dispatch(getSessionRequest());
  dispatch(toggleLoader(true));

  return dispatch(
    get({
      url: GET_SESSION_API_PATH
    })
  )
    .then(response => {
      dispatch(getSessionSuccess(response));
      dispatch(toggleLoader(false));
      return response;
    })
    .catch(error => {
      dispatch(toggleLoader(false));
      dispatch(getSessionFailure(error));
      return Promise.reject(error);
    });
};
