import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { ACCOUNT_PROFILE_PATH } from 'src/components/app/app.constants';
import EditTelephone from './edit-telephone';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  goToProfilePage: () => dispatch(push(ACCOUNT_PROFILE_PATH))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTelephone);
