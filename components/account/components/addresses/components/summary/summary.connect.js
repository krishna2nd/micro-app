import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { ADD_ADDRESS_PATH } from 'src/components/app/app.constants';
import Summary from './summary';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  onAddNew: () => dispatch(push(ADD_ADDRESS_PATH))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
