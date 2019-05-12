import React from 'react';
import classnames from 'classnames';

import { Row, Col } from 'src/components/shared/flex';
import { ACCOUNT_ORDERS_PATH } from 'src/components/app/app.constants';
import { ORDER_TITLES } from '../../orders.constants';
import Link from 'src/components/shared/link';
import { P } from 'src/components/shared/typography';
import styles from './order.styles.css';

export default ({ id, submittedDate, type, total, state = '', images }) => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Row>
          <Col xs={12} className={styles.orderNumber}>
            <P>Pedido {id}</P>
          </Col>
          <Col xs={12} md={3}>
            <P secondary>Realizado el {submittedDate}</P>
          </Col>
          <Col xs={12} md={3}>
            <P secondary>{type}</P>
          </Col>
          <Col xs={12} md={3}>
            <P secondary>Total {total}</P>
          </Col>
          <Col
            xs={12}
            md={3}
            className={classnames(
              styles.orderStatus,
              styles[state.replace(/[^a-zA-Z ]/g, '').toLowerCase()]
            )}
          >
            <P secondary>{ORDER_TITLES[state]}</P>
          </Col>

          <Col xs={12}>
            {images && images.map(image => <img src={image} alt="" />)}
          </Col>
        </Row>
      </div>
      <div className={styles.actions}>
        <Link to={`${ACCOUNT_ORDERS_PATH}/${id}`}>Ver detalle</Link>
      </div>
    </div>
  );
};
