import * as actions from './login.actions';

describe('Login Reducers', () => {
  it('Should login a  user - Success', () => {
    const receivedAction = {};
    const expectedAction = {
      type: 'account/LOGIN_SUCCESS',
      payload: {
        error: false,
        fetching: false,
        response: {}
      }
    };
    expect(actions.loginSuccess(receivedAction)).toEqual(expectedAction);
  });

  it('Should login a  user - Failure', () => {
    const receivedAction = {};
    const expectedAction = {
      type: 'account/LOGIN_FAILURE',
      payload: {
        error: true,
        fetching: false,
        details: {}
      }
    };
    expect(actions.loginFailure(receivedAction)).toEqual(expectedAction);
  });
});
