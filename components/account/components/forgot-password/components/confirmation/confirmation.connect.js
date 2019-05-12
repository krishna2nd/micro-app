import { connect } from 'react-redux';
import { forgotPasswordEmail } from 'src/components/user/components/meta/meta.selectors';
import { forgotPassword } from '../../forgot-password.actions';
import Confirmation from './confirmation';

const mapStateToProps = state => ({
  email: forgotPasswordEmail(state)
});
const mapDispatchToProps = dispatch => ({
  onForgotPassword: params => dispatch(forgotPassword(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirmation);
