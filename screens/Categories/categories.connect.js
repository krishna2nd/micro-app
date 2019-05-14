import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { CategoriesScreen } from "./categories.screen";

import { getDepartments } from "../Home/home.selectors";

const mapStateToProps = state => ({
  departments: getDepartments(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesScreen);
