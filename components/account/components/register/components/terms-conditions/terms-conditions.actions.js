import { toggleLoader } from 'src/components/loader/loader.actions';
import { get } from 'src/request/request.api';
import { createRequestActions } from 'src/request/request.utils';

import { GET_CONFIGURED_CONTENT_API_PATH } from '../../register.constants';
import { GET_MEDIA_TERMS_CONDITIONS } from './terms-conditions.constants';

export const {
  termsConditionsDetailsRequest,
  termsConditionsDetailsSuccess,
  termsConditionsDetailsFailure
} = createRequestActions('termsConditionsDetails', 'terms-conditions');

export const getTermsConditionsDetails = () => dispatch => {
  dispatch(termsConditionsDetailsRequest());
  dispatch(toggleLoader(true));

  return dispatch(
    get({
      url: `${GET_CONFIGURED_CONTENT_API_PATH}?mediaName=${GET_MEDIA_TERMS_CONDITIONS}`
    })
  )
    .then(response => {
      dispatch(termsConditionsDetailsSuccess(response));
      dispatch(toggleLoader(false));
    })
    .catch(error => {
      dispatch(toggleLoader(false));
      dispatch(termsConditionsDetailsFailure(error));
      return Promise.reject(error);
    });
};
