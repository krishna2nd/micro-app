/* === LIBRARIES === */
import React, { Component } from 'react';

/* === COMPONENTS === */
import LoginForm from './components/form';
import { formContainer } from 'src/components/account/account.styles.css';

class Login extends Component {
  render() {
    return (
      <div className={formContainer}>
        <LoginForm onSubmit={this.props.onLogin} />
      </div>
    );
  }
}

export default Login;
