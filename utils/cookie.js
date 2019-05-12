import fromPairs from 'lodash/fp/fromPairs';
import path from 'lodash/fp/path';
import map from 'lodash/fp/map';
import split from 'lodash/fp/split';
import compose from 'lodash/fp/compose';
import trim from 'lodash/fp/trim';

export const getCookies = () =>
  compose(
    /*  */ fromPairs,
    map(split('=')),
    map(trim),
    split(';'),
    path('cookie')
  )(document);

/* @flow */
export const cookieMgr = {
  set: function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie =
      cname +
      '=' +
      cvalue +
      '; ' +
      (typeof exdays != 'undefined' ? expires : '') +
      '; path=/';
  },
  get: function(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return '';
  },
  check: function(cname) {
    var c = this.get(cname);
    if (c) {
      return true;
    } else {
      return false;
    }
  },
  getCookies: getCookies
};
