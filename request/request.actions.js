import { createAction } from 'redux-actions';

export const CREATED = '@@request/CREATED';
export const ENDED = '@@request/ENDED';

export const requestCreated = createAction(
  CREATED,
  options => options,
  (_, id, meta) => ({ meta, id, time: Date.now() })
);

export const requestEnded = createAction(
  ENDED,
  (error, id, payload) => payload,
  (error, id) => ({ id, time: Date.now() })
);
