/* === LIBRARIES === */
import { createAction } from 'redux-actions';
import { get } from '../../request/request.api';
import { createRequestActions } from '../../request/request.utils';

/* === CONSTANTS === */

/* === TYPES === */

/* === ACTIONS === */

export const {
  homeLayoutRequest,
  homeLayoutSuccess,
  homeLayoutFailure
} = createRequestActions('home', 'layout');

export const fetchHomeLayout = (url) => (dispatch, getState) => {
  dispatch(homeLayoutRequest());
  //dispatch(toggleLoader(true));

  return dispatch(
    get({
      url: url.bannersApiUrl
    })
  )
    .then(response => {
      dispatch(homeLayoutSuccess(response));
      // dispatch(toggleLoader(false));
      return response;
    })
    .catch(({ message }) => {
      //dispatch(toggleLoader(false));
      dispatch(homeLayoutFailure(message));
      return Promise.reject(message);
    });
};

// export const {
//   getSessionRequest,
//   getSessionSuccess,
//   getSessionFailure
// } = createRequestActions('getSession', 'user');

// export const getSession = () => dispatch => {
//   dispatch(getSessionRequest());
//   dispatch(toggleLoader(true));

//   return dispatch(
//     get({
//       url: GET_SESSION_API_PATH
//     })
//   )
//     .then(response => {
//       dispatch(getSessionSuccess(response));
//       dispatch(toggleLoader(false));
//       return response;
//     })
//     .catch(error => {
//       dispatch(toggleLoader(false));
//       dispatch(getSessionFailure(error));
//       return Promise.reject(error);
//     });
// };
