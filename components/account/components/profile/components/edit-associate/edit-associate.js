import React, { Component } from 'react';
import Form from './components/form';
import BackNav from 'src/components/account/components/nav/back-nav';
import { formContainer } from 'src/components/account/account.styles.css';

class EditAssociate extends Component {
  render() {
    const { profileDetails, onUpdateProfileDetails } = this.props;
    return (
      <div>
        <BackNav />
        <div className={formContainer}>
          <Form
            initialValues={profileDetails}
            onSubmit={onUpdateProfileDetails}
          />
        </div>
      </div>
    );
  }
}

export default EditAssociate;
