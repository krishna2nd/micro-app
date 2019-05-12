import React, { Component } from 'react';
import classnames from 'classnames';
import Button from 'src/components/shared/button';
import styles from './renew-banner.styles.css';
import { MESSAGES, BUTTON_TEXT } from './renew-banner.constants';

class RenewBanner extends Component {
  handleRenew = () => {
    const { onMembershipRenew, content } = this.props;

    onMembershipRenew({
      fromNewRenew: true,
      membershipNumber: content.membershipNumber
    });
  };

  render() {
    const { aboutToExpire, expiryDays, expiryDate } = this.props.content;
    const { EXPIRED, ABOUT_TO_EXPIRE, ABOUT_TO_EXPIRE_TAIL } = MESSAGES;
    const message = aboutToExpire ? ABOUT_TO_EXPIRE : EXPIRED;

    return (
      <div className={styles.renewBannerContent}>
        <p className={styles.messageText}>
          {aboutToExpire
            ? `${message} ${expiryDays} ${ABOUT_TO_EXPIRE_TAIL}`
            : `${message} ${expiryDate}`}
        </p>
        <Button
          className={classnames(styles.renewBtn)}
          onClick={this.handleRenew}
        >
          {BUTTON_TEXT}
        </Button>
      </div>
    );
  }
}

export default RenewBanner;
