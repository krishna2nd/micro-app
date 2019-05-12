import React from 'react';
import { H4, P } from 'src/components/shared/typography';
import styles from '../order.styles.css';

const Header = ({ orderId, submittedDate }) => {
  return (
    <div className={styles.header}>
      <H4 primary>Pedido {orderId}</H4>
      <P>Realizado el {submittedDate}</P>
    </div>
  );
};

export default Header;
