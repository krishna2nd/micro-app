/* === API PATH === */
export const GET_ORDERS_API_PATH =
  '/api/rest/model/atg/userprofiling/ProfileActor/customOrderLookUp';

export const ERROR_MAP = {
  default: 'Ocurrió un error'
};

/* === SORT === */
export const ORDERS_SORT_FORM_NAME = 'SortOrders';

/* === FULFILLMENT TYPE === */
export const DELIVERY = 'hardgoodShippingGroup';
export const PICK_UP = 'inStorePickupShippingGroup';

export const FULFILLMENT_TYPES = {
  [DELIVERY]: 'Entrega a domicillio',
  [PICK_UP]: 'Recoger en tienda'
};

export const ORDER_GROUPS_MAP = {
  CREATED: 'SENT_TO_STORE',
  SENT_TO_FULFILLMENT: 'SENT_TO_STORE',
  SUBMITTED: 'SENT_TO_STORE',
  ORDER_IN_PROCESS: 'SENT_TO_STORE',
  READY_FOR_PACKING: 'SENT_TO_STORE',
  READY_TO_PICK: 'SENT_TO_STORE',
  PICK_IN_PROGRESS: 'SENT_TO_STORE',
  PROCESSING: 'SENT_TO_STORE',

  PACK_COMPLETE: 'PACK_COMPLETE',
  READY_TO_SHIP: 'PACK_COMPLETE',

  ORDER_DELIVERED: 'ORDER_DELIVERED',
  CUSTOMER_PICKED: 'ORDER_DELIVERED',
  SHIPMENT_INVOICED: 'ORDER_DELIVERED',
  SHIPMENT_DELIVERED: 'ORDER_DELIVERED',
  NO_PENDING_ACTION: 'ORDER_DELIVERED',

  ORDER_CANCELLED: 'ORDER_CANCELLED',
  GENERATE_ERROR: 'ORDER_CANCELLED',
  ORDER_RETURNED: 'ORDER_CANCELLED',
  PAYMENT_FAILE: 'ORDER_CANCELLED'
};

export const ORDER_TITLES = {
  SENT_TO_STORE: 'Enviado a Tienda',
  PACK_COMPLETE: 'Listo para entregar',
  ORDER_DELIVERED: 'Entregado',
  ORDER_CANCELLED: 'Cancelado'
};

export const DEFAULT_ORDER_OPTION = 'Todos';

export const SORT_OPTIONS = [DEFAULT_ORDER_OPTION];
