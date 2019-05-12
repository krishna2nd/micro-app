import { connect } from 'react-redux';
import { membershipRenew } from 'src/components/cart/cart.actions';
import RenewBanner from './renew-banner';

const mapDispatchToProps = dispatch => ({
  onMembershipRenew: params => dispatch(membershipRenew(params))
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(RenewBanner);
