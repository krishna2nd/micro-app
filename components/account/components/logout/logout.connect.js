import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { profileName } from 'src/components/user/user.selectors';
import { logout } from 'src/components/account/components/login/login.actions';
import Logout from './logout';

const mapStateToProps = state => ({
  profileName: profileName(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onLogout: () => logout()
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
