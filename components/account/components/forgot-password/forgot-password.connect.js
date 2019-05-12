import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ForgotPassword from './forgot-password';
import { forgotPassword } from './forgot-password.actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onForgotPassword: forgotPassword
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
