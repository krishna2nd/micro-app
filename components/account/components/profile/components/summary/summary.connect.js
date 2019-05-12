import { connect } from 'react-redux';
import Summary from './summary';
import { profile } from 'src/components/user/components/profile/profile.selectors';
import { primaryAddress } from 'src/components/addresses/addresses.selectors';

const mapStateToProps = state => ({
  profileDetails: profile(state),
  primaryAddress: primaryAddress(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
