/* === LIBRARIES === */
import { createAction } from "redux-actions";
import { get } from "../../request/request.api";
import { createRequestActions } from "../../request/request.utils";

/* === CONSTANTS === */

/* === TYPES === */

/* === ACTIONS === */

export const {
  homeBannerRequest,
  homeBannerSuccess,
  homeBannerFailure
} = createRequestActions("homeBanner", "home");

export const {
  homeCategoriesRequest,
  homeCategoriesSuccess,
  homeCategoriesFailure
} = createRequestActions("homeCategories", "home");

export const {
  homeRecomendedProductsRequest,
  homeRecomendedProductsSuccess,
  homeRecomendedProductsFailure
} = createRequestActions("homeRecomendedProducts", "home");

export const {
  homeLayoutRequest,
  homeLayoutSuccess,
  homeLayoutFailure
} = createRequestActions("homeLayout", "home");

export const fetchHomeLayout = url => (dispatch, getState) => {
  console.log("HOME LAYOUT", url);
  dispatch(homeLayoutRequest());
  dispatch(
    fetchBackendUrl({
      url: url.bannersApiUrl,
      onSuccess: homeBannerSuccess,
      onRequest: homeBannerRequest,
      onFailure: homeBannerFailure
    })
  );
  dispatch(
    fetchBackendUrl({
      url: url.homeCategoriesUrl,
      onSuccess: homeCategoriesSuccess,
      onRequest: homeCategoriesRequest,
      onFailure: homeCategoriesFailure
    })
  );
  dispatch(
    fetchBackendUrl({
      url: url.recommendedProductsUrl,
      onSuccess: homeRecomendedProductsSuccess,
      onRequest: homeRecomendedProductsRequest,
      onFailure: homeRecomendedProductsFailure
    })
  );
};

export const fetchBackendUrl = ({ url, onSuccess, onFailure, onRequest }) => (
  dispatch,
  getState
) => {
  dispatch(onRequest());
  console.log(url);
  return dispatch(
    get({
      url
    })
  )
    .then(response => {
      dispatch(onSuccess(response));
      console.log(response);
      return response;
    })
    .catch(({ message }) => {
      dispatch(onFailure(message));
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
