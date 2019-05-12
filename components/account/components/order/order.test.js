import * as actions from './order.actions';

describe('Get Order Reducers', () => {
  it('Order history of user success', () => {
    const receivedAction = {};
    const expectedAction = {
      type: 'account/order/GET_ORDER_SUCCESS',
      payload: {
        error: false,
        fetching: false,
        response: {}
      }
    };
    expect(actions.getOrderSuccess(receivedAction)).toEqual(expectedAction);
  });
  it('Order history of user failure', () => {
    const receivedAction = {};
    const expectedAction = {
      type: 'account/order/GET_ORDER_FAILURE',
      payload: {
        error: true,
        fetching: false,
        details: {}
      }
    };
    expect(actions.getOrderFailure(receivedAction)).toEqual(expectedAction);
  });
});
