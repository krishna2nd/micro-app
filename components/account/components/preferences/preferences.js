/* === LIBRARIES === */
import React, { Component } from 'react';

/* === COMPONENTS === */
import PreferencesForm from './components/form';
import ProfileNav from 'src/components/account/components/nav/profile-nav';

class Preferences extends Component {
  componentDidMount() {
    const { onGetPreferenceDetails } = this.props;
    onGetPreferenceDetails();
  }

  render() {
    const {
      preferenceDetails,
      onSetPreferenceDetails,
      location: { pathname },
      onShowPrivacyModal
    } = this.props;
    return (
      <div>
        <ProfileNav pathname={pathname} />

        <PreferencesForm
          initialValues={preferenceDetails}
          onSubmit={onSetPreferenceDetails}
          showPrivacy={onShowPrivacyModal}
        />
      </div>
    );
  }
}

export default Preferences;
