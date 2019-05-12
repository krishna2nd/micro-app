import * as actions from './password-recovery.actions';

describe('Password-recovery actions', () => {
  it('should verify the password-recovery-success case', () => {
    const receivedAction = {};
    const expectedAction = {
      type: 'account/VERIFY_PASSWORD_TOKEN_SUCCESS',
      payload: {
        error: false,
        fetching: false,
        response: {}
      }
    };
    expect(actions.verifyPasswordTokenSuccess(receivedAction)).toEqual(
      expectedAction
    );
  });

  it('should verify the the password-recovery-failure case ', () => {
    const receivedAction = {};
    const expectedAction = {
      type: 'account/VERIFY_PASSWORD_TOKEN_FAILURE',
      payload: {
        error: true,
        fetching: false,
        details: {}
      }
    };
    expect(actions.verifyPasswordTokenFailure(receivedAction)).toEqual(
      expectedAction
    );
  });
});
