/* === LIBRARIES === */
import { connect } from 'react-redux';

/* === SELECTORS === */
import { preference } from './preferences.selectors';

/* === NORMALIZR === */
import {
  normalizeTelephoneAlert,
  normalizeReceivePromoEmail
} from './preferences.normalizr';

/* === ACTIONS === */
import {
  getPreferenceDetails,
  setPreferenceDetails
} from './preferences.actions';
import { showPrivacyModal } from '../register/register.actions';

/* === COMPONENTS === */
import Preferences from './preferences';

const mapStateToProps = state => ({
  preferenceDetails: preference(state)
});

const mapDispatchToProps = dispatch => ({
  onGetPreferenceDetails: () => dispatch(getPreferenceDetails()),
  onShowPrivacyModal: () => dispatch(showPrivacyModal()),
  onSetPreferenceDetails: params =>
    dispatch(
      setPreferenceDetails({
        ...params,
        receivePromoEmail: normalizeReceivePromoEmail(params.receivePromoEmail),
        onlyTelephonicAlert: normalizeTelephoneAlert(params.onlyTelephonicAlert)
      })
    ).then(() => dispatch(getPreferenceDetails()))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preferences);
