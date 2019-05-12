/* === LIBRARIES === */
import { post } from 'src/request/request.api';
import { push } from 'react-router-redux';
import { createRequestActions } from 'src/request/request.utils';
import { REGISTER_API_PATH } from './register.constants';
import { toggleLoader } from 'src/components/loader/loader.actions';
import { showModal } from 'src/components/modal/modal.actions';
import {
  PRIVACY_POLICY,
  TERMS_CONDITIONS,
  SIZES
} from 'src/components/modal/modal.constants';
import { returnTo } from 'src/components/user/components/meta/meta.selectors';
/* === ACTIONS === */
export const {
  registerRequest,
  registerSuccess,
  registerFailure
} = createRequestActions('register', 'account');

export const showTermsConditionsModal = () => dispatch =>
  dispatch(
    showModal({
      type: TERMS_CONDITIONS,
      size: SIZES.MEDIUM
    })
  );

export const showPrivacyModal = () => dispatch =>
  dispatch(
    showModal({
      type: PRIVACY_POLICY,
      size: SIZES.MEDIUM
    })
  );

export const register = params => (dispatch, getState) => {
  const newParams = {
    ...params,
    allowMarketingEmail: !!params.allowMarketingEmail ? 'No' : 'Si',
    forOBIEE: true
  };

  dispatch(registerRequest());
  dispatch(toggleLoader(true));

  return dispatch(
    post({
      url: REGISTER_API_PATH,
      body: JSON.stringify(newParams)
    })
  )
    .then(response => {
      if (response.codeMessage !== '0') {
        throw new Error(response.message);
      }

      dispatch(toggleLoader(false));
      dispatch(registerSuccess(response));
      dispatch(push(returnTo(getState())));
      return response;
    })
    .catch(error => {
      dispatch(toggleLoader(false));
      dispatch(registerFailure(error.message));
      return Promise.reject(error);
    });
};
