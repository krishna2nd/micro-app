import Promise from 'promise-polyfill';
import uuid from 'uuid';
import { push } from 'react-router-redux';

import { LOGIN_PATH } from 'src/components/app/app.constants';
import { hideModal, showModal } from 'src/components/modal/modal.actions';
import { DIALOG } from 'src/components/modal/modal.constants';
import { requestCreated, requestEnded } from './request.actions';

export const getRequestId = () => uuid.v4();

export default () => {
  const create = ({
    id = getRequestId(),
    url,
    meta,
    ...options
  }) => dispatch => {
    dispatch(
      requestCreated(
        {
          url,
          method: options.method
        },
        id,
        meta
      )
    );

    return (
      fetch(url, { ...options })
        .then(response => {
          if (!response.ok) {
            switch (response.status) {
              case 302:
                return response;
              case 401:
                /*
                The condition below fixes a bug
                where multiple unauthorized endpoints
                causes concurrent `push(/account/login)`.
                Since each push modify the history queue,
                it causes side-effect when user logged-in
                and triggers `dispatch(goBack())`, it won't
                go back to previous page, instead it will
                stay on the same page (i.e. /account/login)
               */
                if (window.location.pathname !== LOGIN_PATH)
                  // Get out of "fetch"
                  dispatch(hideModal());
                dispatch(push(LOGIN_PATH));
                return Promise.reject(response);
              case 403:
                if (response.codeMessage === '0') break;
                if (window.location.pathname !== LOGIN_PATH)
                  // Get out of "fetch"
                  dispatch(hideModal());
                dispatch(push(LOGIN_PATH));
                return Promise.reject(response);

              case 404:
              case 500:
              default:
                dispatch(
                  showModal({
                    type: DIALOG,
                    modalProps: {
                      errorType: 'network',
                      error: response
                    }
                  })
                );
                return Promise.reject(response);
            }
          }

          return response.json().catch(error => {
            dispatch(
              showModal({
                type: DIALOG,
                modalProps: {
                  errorType: 'network',
                  error: response
                }
              })
            );

            return Promise.reject(error);
          });
        })
        /*
        Required since ATG does funky things with errors. Even failed requests return a 200 but with a -1 in the json error response. Thats whats we use to detect and thore the error further downstream
      */
        .then((response = {}) => {
          if (response.codeMessage === '-1' || response.codeMessage === '-2') {
            throw response;
          } else {
            return response;
          }
        })
        .then(response => {
          dispatch(requestEnded(null, id, meta));
          response.reqId = id;
          return Promise.resolve(response);
        })
        .catch(error => {
          dispatch(requestEnded(null, id, error));
          return Promise.reject(error);
        })
    );
  };

  return {
    create
  };
};
