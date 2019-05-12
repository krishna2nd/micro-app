import React, { Component } from 'react';
import replace from 'lodash/replace';
import Url from 'src/utils/url';
import { ANNOUNCEMENT } from './announcement.locale.es';
import { SrcType, MsgType } from './announcement.constants';
import { getPaymentCategory } from './announcement.utils';
import styles from './announcement.styles.css';

class Announcement extends Component {
  getHeading = (srcType, msgType, orderId) => {
    if (msgType === MsgType.Awaiting) {
      if (srcType === SrcType.Order) {
        return ANNOUNCEMENT.order.heading.awaiting;
      } else {
        return replace(
          ANNOUNCEMENT.generic.heading.awaiting,
          '{orderId}',
          orderId
        );
      }
    } else if (msgType === MsgType.Success) {
      return replace(
        ANNOUNCEMENT.generic.heading.success,
        '{orderId}',
        orderId
      );
    } else if (msgType === MsgType.Cancelled) {
      return replace(
        ANNOUNCEMENT.generic.heading.cancelled,
        '{orderId}',
        orderId
      );
    }
  };

  getSubHeading = (srcType, msgType, orderId) => {
    if (msgType === MsgType.Awaiting) {
      if (srcType === SrcType.order) {
        return (
          <div className={styles.subHeading}>
            {ANNOUNCEMENT.order.subHeading.awaiting}
            <span
              onClick={() => {
                this.setAcknowledgement('details');
              }}
            >
              {`Mis órdenes `}
            </span>
            en tu cuenta.
          </div>
        );
      } else {
        return (
          <div className={styles.subHeading}>
            {replace(
              ANNOUNCEMENT.generic.subHeading.awaiting,
              '{orderId}',
              orderId
            )}
          </div>
        );
      }
    } else if (msgType === MsgType.Success) {
      if (srcType === SrcType.Order) {
        return (
          <div className={styles.subHeading}>
            {ANNOUNCEMENT.order.subHeading.success}
            <span
              onClick={() => {
                this.setAcknowledgement('details');
              }}
            >
              {`Mis Órdenes `}
            </span>
            para obtener detalles del pedido.
          </div>
        );
      } else {
        return (
          <div className={styles.subHeading}>
            {ANNOUNCEMENT.generic.subHeading.success}
          </div>
        );
      }
    } else if (msgType === MsgType.Cancelled) {
      if (srcType === SrcType.Order) {
        return (
          <div className={styles.subHeading}>
            {ANNOUNCEMENT.order.subHeading.cancelled}
          </div>
        );
      } else {
        return (
          <div className={styles.subHeading}>
            {ANNOUNCEMENT.generic.subHeading.cancelled}
          </div>
        );
      }
    }
  };

  setAcknowledgement = action => {
    const { pendingOrders } = this.props.content;
    this.setState({ isDisplay: false });
    switch (action) {
      case 'history':
        Url.goToMyOrders();
        break;
      case 'details':
        Url.goToMyOrders(this.props.pendingOrders.orderId);
        break;
      case 'close':
        let data = {
          isAcknowledge: true,
          status: pendingOrders.currentState
        };
        this.updateLocalStorage('update', pendingOrders.orderId, data);
        break;
      default:
        break;
    }
  };

  /** update the local storage **/
  updateLocalStorage = (orderId, value) => {
    try {
      let data = JSON.parse(localStorage.getItem('order-notification')) || {};
      data[orderId] = value;
      localStorage.setItem('order-notification', JSON.stringify(data));
    } catch (e) {}
  };

  render() {
    const { pendingOrders } = this.props.content;

    const { srcType } = this.props;
    const orderId = pendingOrders.orderId;

    const status = pendingOrders.currentState,
      statusClass = getPaymentCategory(status);

    return (
      <div
        className={styles.container}
        ref={elem => {
          this.banner = elem;
        }}
      >
        <div>
          <span className={styles.heading}>
            {this.getHeading(srcType, statusClass, orderId)}
          </span>
          {this.getSubHeading(srcType, statusClass, orderId)}
        </div>
      </div>
    );
  }
}

export default Announcement;
