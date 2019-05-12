import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import EditAddress from './edit-address';
import { ACCOUNT_ADDRESSES_PATH } from 'src/components/app/app.constants';

const mapDispatchToProps = dispatch => ({
  goToAddressesPage: () => dispatch(push(ACCOUNT_ADDRESSES_PATH))
});

export default connect(
  null,
  mapDispatchToProps
)(EditAddress);
