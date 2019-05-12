import React, { Component } from 'react';

/* === COMPONENTS === */
import NarrowLayout from 'src/components/shared/layout/narrow';
import Header from './components/header';
import OrderList from './components/order-list';
import ProfileNav from 'src/components/account/components/nav/profile-nav';

/* === STYLES === */
import styles from './orders.styles.css';

class Orders extends Component {
  componentDidMount() {
    const { onGetOrders } = this.props;
    onGetOrders();
  }

  render() {
    const {
      location: { pathname },
      orders
    } = this.props;

    return (
      <div className={styles.container}>
        <ProfileNav pathname={pathname} />

        <NarrowLayout>
          <Header />
          <OrderList orders={orders} />
        </NarrowLayout>
      </div>
    );
  }
}

export default Orders;
