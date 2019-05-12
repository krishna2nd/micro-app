import React, { Component } from 'react';

import { Icon, ICONS } from 'src/components/shared/icon';
import AddToCartButton from 'src/components/shared/add-to-cart';
import Image from 'src/components/shared/image';
import styles from './product.styles.css';
import {
  getFormattedPrice,
  getProductImage
} from 'src/components/product/product.util';
import NavLink from 'src/components/shared/nav-link';
import { P } from 'src/components/shared/typography';

class Product extends Component {
  constructor() {
    super();
    this.handleDeletetFromList = this.handleDeletetFromList.bind(this);
  }

  handleDeletetFromList() {
    const { repositoryId, onRemoveProductsFromList } = this.props;
    onRemoveProductsFromList([repositoryId]);
  }

  render() {
    const { product } = this.props;
    const {
      id = '',
      displayName,
      basePrice,
      specialPrice,
      promotions = [],
      url
    } = product;

    const productImage = getProductImage(id);

    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <NavLink to={url} className={styles.image}>
            <Image src={productImage.MEDIUM} />
          </NavLink>
        </div>
        <div className={styles.right}>
          <NavLink to={url} className={styles.name}>
            {displayName}
          </NavLink>

          <div className={styles.price}>
            {basePrice > specialPrice && (
              <P secondary className={styles.oldPrice}>
                {getFormattedPrice(basePrice)}
              </P>
            )}

            <P bold>{getFormattedPrice(specialPrice)}</P>

            {promotions.map(promo => (
              <P inline small className={styles.promotion}>
                {promo}
              </P>
            ))}
          </div>

          <AddToCartButton
            className={styles.addToCart}
            product={product}
            disableLowStock
          />

          <span onClick={this.handleDeletetFromList}>
            <Icon
              className={styles.removeIcon}
              icon={ICONS.CROSS_CIRCLE}
              small
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
