import * as actions from './preferences.actions';

describe('Preferences Reducers', () => {
  it('shoudl get all the preferences', () => {
    const receivedAction = {};
    const expectedAction = {
      type: 'account/getPreferences/PREFERENCE_DETAILS_SUCCESS',
      payload: {
        error: false,
        fetching: false,
        response: {}
      }
    };
    expect(actions.preferenceDetailsSuccess(receivedAction)).toEqual(
      expectedAction
    );
  });
  it('shoudl set all the preferences', () => {
    const receivedAction = {};
    const expectedAction = {
      type: 'account/setPreferences/SET_PREFERENCE_DETAILS_SUCCESS',
      payload: {
        error: false,
        fetching: false,
        response: {}
      }
    };
    expect(actions.setPreferenceDetailsSuccess(receivedAction)).toEqual(
      expectedAction
    );
  });
});
