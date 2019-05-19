import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router';

import { PDPScreen } from "./pdp.screen";
import { fetchSkuDetails } from "./pdp.actions";
import { getSkuDetails } from "./pdp.selectors";

const mapStateToProps = state => ({
  product: getSkuDetails(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSkuDetails: fetchSkuDetails
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PDPScreen));
