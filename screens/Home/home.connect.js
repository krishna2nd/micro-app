import { connect } from 'react-redux';

import { HomeScreen } from './home.screen';

const mapStateToProps = state => ({
  //device: deviceType(state),
  //isLoggedIn: isLoggedIn(state),
  url: {
    bannersApiUrl: "https://www.walmartmobile.com.mx/sams/account/getBanners",
    homeCategoriesUrl: "https://www.sams.com.mx/images/App/Splash_app/configfin.txt",
    recommendedProductsUrl: "https://www.walmartmobile.com.mx/sams/PLP/getRecommendedItems"
  }
});

export default connect(mapStateToProps)(HomeScreen);
