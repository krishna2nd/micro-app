import React from 'react';
import { Icon, ICONS } from 'src/components/shared/icon';
import styles from './membership.styles.css';

export const fetchMembershipRenewalFailureMsg = msg => (
  <div className={styles.membershipFailure}>
    <Icon type={ICONS['card-12']} />
    <span className={styles.content}>{msg}</span>
  </div>
);

export const fetchUpgradeMembershipFailureMsg = msg => (
  <div className={styles.membershipFailure}>
    <Icon type={ICONS.warning} />
    <span className={styles.content}>{msg}</span>
  </div>
);
