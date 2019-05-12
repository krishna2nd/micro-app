/* === LIBRARIES === */
import { connect } from 'react-redux';

/* === COMPONENTS  === */
import Login from './login';

/* === ACTIONS === */
import { login } from './login.actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onLogin: formParams => dispatch(login(formParams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
