/* === LIBRARIES === */
import { connect } from 'react-redux';
import { getTermsConditionsData } from './terms-conditions.selectors';

/* === ACTIONS === */
import { getTermsConditionsDetails } from './terms-conditions.actions';

/* === COMPONENTS === */
import TermsConditions from './terms-conditions';
import { hideModal } from 'src/components/modal/modal.actions';

const mapStateToProps = state => ({
  termsConditionsDetails: getTermsConditionsData(state)
});

const mapDispatchToProps = dispatch => ({
  onGetTermsConditionsDetails: () => dispatch(getTermsConditionsDetails()),
  onHideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TermsConditions);
