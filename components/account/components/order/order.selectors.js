import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { createSelector } from 'reselect';
import { ALERT_TYPES, AlertBannerType } from 'src/components/shared/alert';
import { isLoggedIn } from 'src/components/user/user.selectors';
import { generateAnnouncementIcon } from 'src/components/user/components/announcement/announcement.utils';

export const order = ({ accountReducer: { orderReducer } }) => orderReducer;

export const delivery = createSelector(
  order,
  data => data.delivery
);

export const reservation = createSelector(
  order,
  data => data.reservation
);

export const submittedDate = createSelector(
  order,
  data => data.submittedDate
);

export const priceDetails = createSelector(
  order,
  data => get(data, 'priceDetails', {})
);

export const cartProducts = createSelector(
  order,
  data => data.cartProducts
);

export const store = createSelector(
  order,
  data => data.store
);

export const pickup = createSelector(
  order,
  data => data.pickup
);

export const fullName = createSelector(
  delivery,
  data =>
    `${get(data, 'firstName', '')} ${get(data, 'middleName', '')} ${get(
      data,
      'lastName',
      ''
    )}`
);

export const payment = createSelector(
  order,
  data => data.payment
);

export const paymentMethod = createSelector(
  payment,
  data => get(data, 'paymentMethod')
);

export const slotDateAndTime = createSelector(
  reservation,
  x => !isEmpty(x) && x
);

export const storeName = createSelector(
  store,
  store => store.storeName
);

export const getAnnouncementInfo = ({ accountReducer: { orderReducer } }) => {
  const { pendingOrders } = orderReducer;
  return {
    type: ALERT_TYPES.ERROR,
    icon: generateAnnouncementIcon(),
    content: AlertBannerType.ANNOUNCEMENT_BANNER,
    contentProps: {
      pendingOrders: {
        currentState: pendingOrders.currentState,
        orderId: pendingOrders.orderId
      },
      deviceType: {}
    },
    delayTimeInMs: null,
    showCloseBtn: true
  };
};

export const showAnnouncement = state => {
  const {
    accountReducer: {
      orderReducer: { pendingOrders }
    }
  } = state;

  let cachedData;
  try {
    cachedData = JSON.parse(localStorage.getItem('order-notification'));
  } catch (e) {
    return false;
  }

  if (
    !(
      pendingOrders &&
      isLoggedIn(state) &&
      pendingOrders.orderId &&
      pendingOrders.currentState
    )
  )
    return false;

  const cachedOrder = cachedData && cachedData[pendingOrders.orderId];

  if (
    !(
      cachedOrder &&
      cachedOrder.isAcknowledge &&
      cachedOrder.status === pendingOrders.currentState
    )
  )
    return false;

  return true;
};
