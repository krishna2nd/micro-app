import * as actions from './forgot-password.actions';

describe('Forgot Password Reducers', () => {
  it('forgotPasswordSuccess', () => {
    const receivedAction = {};
    const expectedAction = {
      type: 'account/FORGOT_PASSWORD_SUCCESS',
      payload: {
        error: false,
        fetching: false,
        response: {}
      }
    };
    expect(actions.forgotPasswordSuccess(receivedAction)).toEqual(
      expectedAction
    );
  });
  it('forgotPasswordFailure', () => {
    const receivedAction = {};
    const expectedAction = {
      type: 'account/FORGOT_PASSWORD_FAILURE',
      payload: {
        error: true,
        fetching: false,
        details: {}
      }
    };
    expect(actions.forgotPasswordFailure(receivedAction)).toEqual(
      expectedAction
    );
  });
});
