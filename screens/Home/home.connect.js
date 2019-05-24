import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { HomeScreen } from "./home.screen";
import { fetchHomeLayout } from "./home.actions";
import { fetchCartList } from "../Cart/cart.actions";
import {
  getBanners,
  getCategories,
  getDepartments,
  productCarousels,
  getRecomendedProducts
} from "./home.selectors";

const mapStateToProps = state => ({
  //device: deviceType(state),
  //isLoggedIn: isLoggedIn(state),
  url: {
    bannersApiUrl: "https://www.walmartmobile.com.mx/sams/account/getBanners",
    homeCategoriesUrl:
      "https://www.sams.com.mx/images/App/Splash_app/configfin.txt",
    recommendedProductsUrl:
      "https://www.walmartmobile.com.mx/sams/PLP/getRecommendedItems"
  },
  categories: getCategories(state),
  banners: getBanners(state),
  departments: getDepartments(state),
  carousels: productCarousels(state),
  recomendedProducts: getRecomendedProducts(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchHomeLayout: fetchHomeLayout,
      fetchCartList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
