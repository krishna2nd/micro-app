import React from 'react';
import styles from './renew-banner.styles.css';
import { Icon, ICONS } from 'src/components/shared/icon';

export const generateBannerIcon = () => (
  <Icon type={ICONS['card-12']} className={styles.renewIcon} />
);
