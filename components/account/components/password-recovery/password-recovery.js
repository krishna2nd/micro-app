/* === LIBRARIES === */
import React, { Component } from 'react';

/* === COMPONENTS === */
import BackNav from 'src/components/account/components/nav/back-nav';
import { H4 } from 'src/components/shared/typography';
import RecoveryForm from './form';
import { formContainer } from 'src/components/account/account.styles.css';

class PasswordRecovery extends Component {
  state = {
    email: null
  };

  setEmail = email => {
    this.setState({
      email
    });
  };

  // TODO: Remove all business logic here
  componentDidMount() {
    this.props.onVerifyRecoveryToken().then(this.setEmail);
  }

  onSubmitHandler = formParams => {
    const email = this.state.email;
    this.props.onResetPassword(formParams, email);
  };

  render() {
    const { email } = this.state;

    if (!email) {
      return null;
    }

    return (
      <div>
        <BackNav />

        <div className={formContainer}>
          <H4 primary>Cambiar contraseña</H4>

          <RecoveryForm onSubmit={this.onSubmitHandler} />
        </div>
      </div>
    );
  }
}

export default PasswordRecovery;
