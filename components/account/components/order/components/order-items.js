import React from 'react';

import Button from 'src/components/shared/button';
import { H5 } from 'src/components/shared/typography';
import ProductList from './product-list';
import styles from '../order.styles.css';

const OrderItems = ({ products, onAddProductsToCart }) =>
  products.length > 0 && (
    <div className={styles.body}>
      <H5>Articulos entregados</H5>

      <ProductList type="fulfilled" products={products} />

      <div className={styles.actions}>
        <Button primary onClick={() => onAddProductsToCart(products)}>
          Agregar todo al carrito
        </Button>
      </div>
    </div>
  );

export default OrderItems;
