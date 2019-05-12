import get from 'lodash/get';

export const normalizeHomeLayout = payload =>
  get(payload, 'response', {});
