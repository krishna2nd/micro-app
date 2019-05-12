/* === LIBRARIES === */
import { connect } from 'react-redux';
import { getPrivacyPolicyData } from './privacy-policy.selectors';

/* === ACTIONS === */
import { getPrivacyPolicyDetails } from './privacy-policy.actions';

/* === COMPONENTS === */
import PrivacyPolicy from './privacy-policy';
import { hideModal } from 'src/components/modal/modal.actions';

const mapStateToProps = state => ({
  privacyPolicyDetails: getPrivacyPolicyData(state)
});

const mapDispatchToProps = dispatch => ({
  onGetPrivacyPolicyDetails: () => dispatch(getPrivacyPolicyDetails()),
  onHideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivacyPolicy);
