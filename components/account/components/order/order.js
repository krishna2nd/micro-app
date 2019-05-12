import React, { Component } from 'react';
import classNames from 'classnames';

/* === COMPONENTS === */
import NarrowLayout from 'src/components/shared/layout/narrow';
import { P } from 'src/components/shared/typography';
import BackNav from 'src/components/account/components/nav/back-nav';
import Header from './components/header';
import Summary from './components/summary';
import PricingSummary from 'src/components/pricing/components/pricing-summary';
import OrderItems from './components/order-items';

/* === STYLES === */
import styles from './order.styles.css';

class Order extends Component {
  componentDidMount() {
    const { onGetOrder } = this.props;
    onGetOrder();
  }

  render() {
    const {
      className,
      priceDetails,
      orderId,
      delivery,
      fullName,
      slotDateAndTime,
      paymentMode,
      submittedDate,
      products,
      onAddProductsToCart,
      ...props
    } = this.props;

    return (
      <div className={classNames(className, styles.container)}>
        <BackNav goBackRouter />

        <NarrowLayout>
          <Header
            orderId={orderId}
            products={products}
            submittedDate={submittedDate}
            {...props}
          />

          <Summary
            delivery={delivery}
            fullName={fullName}
            slotDateAndTime={slotDateAndTime}
            paymentMode={paymentMode}
            {...props}
          />

          <OrderItems
            products={products}
            onAddProductsToCart={onAddProductsToCart}
          />

          <div className={styles.footer}>
            <PricingSummary pricing={priceDetails}>
              <P>
                El monto a pagar puede variar de acuerdo a los artículos
                sustituidos, cancelados y los cambios en los precios entre la
                fecha de realización del pedido y la entrega. El ajuste se verá
                reflejado en tu ticket de compra. Artículos sujetos a
                disponibilidad en tienda.
              </P>
            </PricingSummary>
          </div>
        </NarrowLayout>
      </div>
    );
  }
}

export default Order;
