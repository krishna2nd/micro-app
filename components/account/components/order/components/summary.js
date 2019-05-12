import React from 'react';
import { Row, Col } from 'src/components/shared/flex';

import { H5, P } from 'src/components/shared/typography';
import styles from '../order.styles.css';
import { stringifyAddress } from 'src/components/addresses/addresses.utils';

const Summary = ({
  pickup,
  delivery,
  storeName,
  paymentMethod,
  slotDateAndTime,
  fullName
}) => {
  return (
    <div className={styles.summary}>
      <H5>Selecciona los datos de entrega</H5>
      <Row>
        {delivery.street && (
          <Col xs={12} md={6}>
            <P bold className={styles.fullName}>
              {fullName}
            </P>
            <P>{stringifyAddress(delivery)}</P>
          </Col>
        )}

        <Col xs={12} md={6}>
          <ul className={styles.details}>
            {!delivery.street && (
              <li>
                <P primary>Tienda</P>
                <P>{storeName}</P>
              </li>
            )}
            <li>
              <P primary>Entrega</P>
              <P>{slotDateAndTime}</P>
            </li>
            <li>
              <P primary>Pago</P>
              <P>{paymentMethod}</P>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Summary;
