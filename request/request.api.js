import getSessionConfirmationNumber from '../utils/getSessionConfirmationNumber';
import { jsonToURLSearchParams } from '../request/request.utils';
/*
  "Credentials" controls the flow of credentials during a fetch.
  And credentials  are HTTP cookies, TLS client certificates,
  and authentication entries.

  References:
  https://fetch.spec.whatwg.org/#concept-request-credentials-mode
 */
const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const defaultConfigs = {
  credentials: 'include'
};

export const apiRequest = options => (dispatch, getState, { request }) =>
  dispatch(request.create({ ...defaultHeaders, ...options }));

export const get = ({
  url,
  headers,
  dynSessConf = false,
  query = {},
  ...rest
}) => (dispatch, getState, { request }) => {
  if (dynSessConf) {
    query._dynSessConf = getSessionConfirmationNumber();
  }
  query._ = Date.now();

  return dispatch(
    request.create({
      url: `${url}${url.indexOf('?') === -1 ? '?' : '&'}${jsonToURLSearchParams(
        query
      )}`,
      method: 'GET',
      headers: {
        ...defaultHeaders,
        ...headers
      },
      ...defaultConfigs,
      ...rest
    })
  );
};

export const post = ({ url, headers, body, ...rest }) => (
  dispatch,
  getState,
  { request }
) => {
  const _dynSessConf = { _dynSessConf: getSessionConfirmationNumber() };
  const reqBody = typeof body === 'string' ? JSON.parse(body) : body;

  return dispatch(
    request.create({
      url,
      method: 'POST',
      headers: {
        ...defaultHeaders,
        ...headers
      },
      ...defaultConfigs,
      ...rest,
      body: JSON.stringify({
        ...reqBody,
        ..._dynSessConf
      })
    })
  );
};

export const put = ({ url, headers, ...rest }) => (
  dispatch,
  getState,
  { request }
) =>
  dispatch(
    request.create({
      url,
      method: 'PUT',
      headers: {
        ...defaultHeaders,
        ...headers
      },
      ...defaultConfigs,
      ...rest
    })
  );
