/* === LIBRARIES === */
import { createAction } from "redux-actions";
import { get, post } from "../../request/request.api";
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
  fetchTaxonomyRequest,
  fetchTaxonomySuccess,
  fetchTaxonomyFailure
} = createRequestActions("fetchTaxonomy", "home");
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
      method: get,
      url: url.bannersApiUrl,
      onSuccess: homeBannerSuccess,
      onRequest: homeBannerRequest,
      onFailure: homeBannerFailure
    })
  );
  dispatch(
    fetchBackendUrl({
      method: get,
      url: url.homeCategoriesUrl,
      onSuccess: homeCategoriesSuccess,
      onRequest: homeCategoriesRequest,
      onFailure: homeCategoriesFailure
    })
  );
  dispatch(
    fetchBackendUrl({
      method: post,
      url: url.recommendedProductsUrl,
      onSuccess: homeRecomendedProductsSuccess,
      onRequest: homeRecomendedProductsRequest,
      onFailure: homeRecomendedProductsFailure
    })
  );
  dispatch(
    fetchBackendUrl({
      method: get,
      url: "https://www.sams.com.mx/sams/home/?format=json",
      onSuccess: fetchTaxonomySuccess,
      onRequest: fetchTaxonomyRequest,
      onFailure: fetchTaxonomyFailure
    })
  );
};

export const fetchBackendUrl = ({
  url,
  method,
  onSuccess,
  onFailure,
  onRequest
}) => (dispatch, getState) => {
  dispatch(onRequest());
  return dispatch(
    method({
      url
    })
  )
    .then(response => {
      dispatch(onSuccess(response));
      //console.log(response);
      return response;
    })
    .catch(({ message }) => {
      console.error("ERR", url, message);
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
