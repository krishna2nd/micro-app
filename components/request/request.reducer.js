import omit from 'lodash/fp/omit';
import { handleActions } from 'redux-actions';

import { CREATED, ENDED } from './request.actions';

export default handleActions(
  {
    [CREATED]: {
      next: (state, { meta, payload }) => ({
        ...state,
        [meta.id]: {
          ...state[meta.id],
          ...payload,
          id: meta.id,
          time: meta.time,
          meta: meta.meta
        }
      })
    },
    [ENDED]: {
      next: (state, { meta }) => omit([meta.id], state),
      throw: (state, { meta }) => omit([meta.id], state)
    }
  },
  {}
);
