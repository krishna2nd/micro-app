import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { ACCOUNT_PROFILE_PATH } from 'src/components/app/app.constants';
import { profile } from 'src/components/user/components/profile/profile.selectors';
import { goBack } from 'react-router-redux';
import {
  getProfileDetails,
  updateProfileDetails
} from 'src/components/account/components/profile/profile.actions';
import Form from './form';

const mapStateToProps = state => {
  return {
    initialValues: profile(state)
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: formParams => {
    return dispatch(updateProfileDetails(formParams))
      .then(() => dispatch(getProfileDetails()))
      .then(() => dispatch(push(ACCOUNT_PROFILE_PATH)));
  },
  onGoBack: () => dispatch(goBack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
