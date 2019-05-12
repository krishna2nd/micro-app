import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';
import Promise from 'promise-polyfill';
import fromPairs from 'lodash/fp/fromPairs';
import split from 'lodash/fp/split';
import map from 'lodash/fp/map';
import trim from 'lodash/fp/trim';
import compose from 'lodash/fp/compose';

import URLSearchParams from 'url-search-params';
import { createAction } from 'redux-actions';

export const jsonToURLSearchParams = paramObj => {
  /*
    URLSearchParams() comes from 'url-search-params'
    library.

    The library helps construct request params to use
    with "fetch"

    Source:
    https://github.com/github/fetch/issues/263
  */
  const urlParams = new URLSearchParams();

  Object.keys(paramObj).forEach(
    key => paramObj[key] != null && urlParams.set(key, paramObj[key])
  );

  return urlParams;
};

export const stringlifyQuery = query => {
  // If no search query, returns empty object
  if (!query) {
    return {};
  }

  const queries = query.slice(1, query.length);

  return compose(
    /*        */ fromPairs,
    map(split('=')),
    map(trim),
    split('&')
  )(queries);
};

export const toSnakeCase = str =>
  str.replace(/[a-z][A-Z]/g, xs => `${xs[0]}_${xs[1]}`);

export const toCamelCase = str =>
  str.replace(/-([a-z])/g, function(g) {
    return g[1].toUpperCase();
  });

export const createRequestActions = (name, context = '') => {
  const fullName = context
    ? `${context}/${toSnakeCase(name).toUpperCase()}`
    : `${name.toUpperCase()}`;

  // Types
  const REQUEST_TYPE = `${fullName}_REQUEST`;
  const SUCCESS_TYPE = `${fullName}_SUCCESS`;
  const FAILURE_TYPE = `${fullName}_FAILURE`;

  // Actions
  const request = `${name}Request`;
  const success = `${name}Success`;
  const failure = `${name}Failure`;

  return {
    [request]: createAction(REQUEST_TYPE, data => ({
      error: false,
      fetching: true,
      data
    })),
    [success]: createAction(SUCCESS_TYPE, response => ({
      error: false,
      fetching: false,
      response
    })),
    [failure]: createAction(FAILURE_TYPE, details => ({
      error: true,
      fetching: false,
      details
    }))
  };
};

/**
 * Takes a URL and goes to it using the POST method.
 * @param {string} url  The URL with the GET parameters to go to.
 * @param {boolean=} multipart  Indicates that the data will be sent using the
 *     multipart enctype.
 */

export const postURL = (url, multipart) => {
  var form = document.createElement('FORM');
  form.method = 'POST';
  if (multipart) {
    form.enctype = 'multipart/form-data';
  }
  form.style.display = 'none';
  document.body.appendChild(form);
  form.action = url.replace(/\?(.*)/, function(_, urlArgs) {
    urlArgs
      .replace(/\+/g, ' ')
      .replace(/([^&=]+)=([^&=]*)/g, function(input, key, value) {
        input = document.createElement('INPUT');
        input.type = 'hidden';
        input.name = decodeURIComponent(key);
        input.value = decodeURIComponent(value);
        form.appendChild(input);
      });
    return '';
  });
  form.submit();
};

export const injectScript = (src, options = {}) =>
  new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.async = true;
    script.src = src;

    forEach(options, (value, key) => {
      // Remove "data-" due to script will
      // auto generate "data-" when appending
      // to the DOM
      if (!isEmpty(key.match(/^data-/))) {
        key = key.replace('data-', '');
      }

      // Script will automatically transform
      // text from "dashes" to "camelCase"
      script.dataset[toCamelCase(key)] = value;
    });

    script.addEventListener('load', resolve);
    script.addEventListener('error', () => reject('Error loading script.'));
    script.addEventListener('abort', () => reject('Script loading aborted.'));
    document.head.appendChild(script);
  });

export const updateQueryStringParameter = (uri, key, value) => {
  var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  var separator = uri.indexOf('?') !== -1 ? '&' : '?';
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + '=' + value + '$2');
  } else {
    return uri + separator + key + '=' + value;
  }
};

export const allCookies = () => {
  let cookies = {};

  document.cookie
    .split(';')
    .forEach(
      cookie => (cookies[cookie.split('=')[0].trim()] = cookie.split('=')[1])
    );

  return cookies;
};

export const parseAndDecodeJSONString = (str = '{}') =>
  JSON.parse(decodeURIComponent(str));
