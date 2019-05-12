/* === LIBRARIES === */
import { connect } from 'react-redux';

/* === COMPONENTS === */
import Register from './register';

/* === ACTIONS === */
import {
  register,
  showTermsConditionsModal,
  showPrivacyModal
} from './register.actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onRegister: params => dispatch(register(params)),
  onShowTermsConditionsModal: () => dispatch(showTermsConditionsModal()),
  onShowPrivacyModal: () => dispatch(showPrivacyModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
