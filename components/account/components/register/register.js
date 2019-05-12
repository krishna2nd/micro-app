/* === LIBRARIES === */
import React, { Component } from 'react';

/* === COMPONENTS === */
import RegisterForm from './components/form';
import { formContainer } from 'src/components/account/account.styles.css';

class Register extends Component {
  render() {
    const { onShowTermsConditionsModal, onShowPrivacyModal } = this.props;

    return (
      <div className={formContainer}>
        <RegisterForm
          onSubmit={this.props.onRegister}
          showPrivacy={onShowPrivacyModal}
          showTermsConditions={onShowTermsConditionsModal}
        />
      </div>
    );
  }
}

export default Register;
