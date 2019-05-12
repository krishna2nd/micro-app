/* === LIBRARIES === */
import { connect } from 'react-redux';

/* === ACTIONS === */
import { getProfileDetails } from './profile.actions';
import { getDeliveryAddresses } from 'src/components/addresses/addresses.actions';

/* === COMPONENTS === */
import Profile from './profile';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onGetProfileDetails: () => dispatch(getProfileDetails()),
  onGetDeliveryAddresses: () => dispatch(getDeliveryAddresses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
