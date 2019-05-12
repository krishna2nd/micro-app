import React from 'react';
import { Icon, ICONS } from 'src/components/shared/icon';
import styles from './announcement.styles.css';
import { MsgType, PaymentStatus } from './announcement.constants';

export const getPaymentCategory = status => {
  let statusClass = '';
  switch (status) {
    case PaymentStatus.Awaiting:
      statusClass = MsgType.Awaiting;
      break;
    case PaymentStatus.Success:
      statusClass = MsgType.Success;
      break;
    case PaymentStatus.Cancelled:
      statusClass = MsgType.Cancelled;
      break;
  }
  return statusClass;
};

export const generateAnnouncementIcon = () => (
  <Icon type={ICONS.wrong} className={styles.announcementIcon} />
);
