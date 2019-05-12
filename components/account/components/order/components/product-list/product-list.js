import React, { Component } from 'react';

import AddToCart from 'src/components/add-to-cart';
import { P } from 'src/components/shared/typography';
import { Row, Col } from 'src/components/shared/flex';
import { getFormattedPrice } from 'src/components/product/product.util';
import styles from './product-list.styles.css';

const OrderProduct = ({ type, product, onAddToCart }) => {
  const { displayName, quantity, specialPrice, amount } = product;

  return (
    <li className={styles.product}>
      <Row>
        <Col xs={12} md={5}>
          <P inline>{displayName}</P>
        </Col>
        <Col xs={2} md={3}>
          <P inline secondary>
            {quantity}
          </P>
        </Col>
        <Col xs={4} md={2}>
          <P inline secondary>
            {getFormattedPrice(specialPrice)}
          </P>
        </Col>
        <Col xs={4} md={1} className={styles.amount}>
          <P inline>{getFormattedPrice(amount)}</P>
        </Col>
        <Col xs={2} md={1} className={styles.action}>
          <AddToCart icon product={product} />
        </Col>
      </Row>
    </li>
  );
};

class ProductList extends Component {
  render() {
    const { type, products, onAddToCart } = this.props;

    return (
      <ul className={styles.container}>
        {products.map(product => (
          <OrderProduct
            type={type}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    );
  }
}

export default ProductList;
