/* === LIBRARIES === */
import { combineReducers } from 'redux';

import profile from './components/profile/profile.reducer';
import meta from './components/meta/meta.reducer';
import preferredChannelInfo from 'src/components/channel/channel.reducer';

export default combineReducers({
  meta,
  profile,
  preferredChannelInfo
});
