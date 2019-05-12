import React, { Component } from 'react';
import NarrowLayout from 'src/components/shared/layout/narrow';
import AddressTiles from 'src/components/addresses/components/address-tiles';
import ProfileNav from 'src/components/account/components/nav/profile-nav';
import commonStyles from 'src/components/shared/common.styles.css';

class Summary extends Component {
  render() {
    const {
      location: { pathname },
      onAddNew
    } = this.props;
    return (
      <div className={commonStyles.container}>
        <ProfileNav pathname={pathname} />

        <NarrowLayout>
          <AddressTiles onAddNew={onAddNew} />
        </NarrowLayout>
      </div>
    );
  }
}

export default Summary;
