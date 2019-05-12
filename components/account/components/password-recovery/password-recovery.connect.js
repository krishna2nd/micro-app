/* === LIBRARIES === */
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import PasswordRecovery from './password-recovery';
import { getEncId, getToken } from './password-recovery.selectors';
import {
  verifyPasswordToken,
  resetPassword
} from './password-recovery.actions';
import { HOME_PATH, PSWD_EXPIRY_PATH } from 'src/components/app/app.constants';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onVerifyRecoveryToken: () =>
    dispatch(
      verifyPasswordToken({
        encId: getEncId(ownProps),
        token: getToken(ownProps)
      })
    )
      .then(({ profile: { email } }) => email)
      .catch(error => dispatch(push(PSWD_EXPIRY_PATH))),
  onResetPassword: (params, email) =>
    dispatch(
      resetPassword({
        ...params,
        email,
        encProfileId: getEncId(ownProps),
        token: getToken(ownProps)
      })
    ).then(() => dispatch(push(HOME_PATH)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordRecovery);
