import get from 'lodash/get';

export const normalizeReservation = response => {
  const slot = get(response, 'shippingGroups[0].slot', {});

  return {
    slotId: get(slot, 'slotId', ''),
    slotDeliveryDate: get(slot, 'slotDeliveryDate', ''),
    slotBeginTime: get(slot, 'slotBeginTime', ''),
    slotEndTime: get(slot, 'slotEndTime', ''),
    slotReservationTime: get(slot, 'slotReservationTime')
  };
};

export const orderNormalizr = ({ pendingOrders }) => {
  return {
    pendingOrders
  };
};
