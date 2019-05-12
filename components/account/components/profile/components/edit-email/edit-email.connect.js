import { connect } from 'react-redux';
import EditEmail from './edit-email';
import { push } from 'react-router-redux';
import { ACCOUNT_PROFILE_PATH } from 'src/components/app/app.constants';
import { profile } from 'src/components/user/components/profile/profile.selectors';
import { getProfileDetails, updateProfileDetails } from '../../profile.actions';
import set from 'lodash/set';

const mapStateToProps = state => ({
  profileDetails: profile(state)
});
const mapDispatchToProps = dispatch => ({
  onUpdateProfileDetails: formParams => {
    //While Changing password, backend expects passwordCheckBox to be TRUE.
    set(formParams, 'passwordCheckBox', 'true');
    dispatch(updateProfileDetails(formParams))
      .then(() => dispatch(getProfileDetails()))
      .then(() => dispatch(push(ACCOUNT_PROFILE_PATH)));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEmail);
