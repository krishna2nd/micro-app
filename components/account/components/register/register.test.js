import * as actions from './register.actions';

describe('Register Reducers', () => {
  it('shoudl register a new user', () => {
    const receivedAction = {};
    const expectedAction = {
      type: 'account/REGISTER_SUCCESS',
      payload: {
        error: false,
        fetching: false,
        response: {}
      }
    };
    expect(actions.registerSuccess(receivedAction)).toEqual(expectedAction);
  });
});
