import get from "lodash";

export const getBanners = ({ HomeReducer }) =>
  HomeReducer.bannerList.map(banner => banner.bannerUrlPhone);
export const getCategories = ({ HomeReducer: { home_categories = [] } }) => {
  // console.log('home_categories',home_categories)
  return home_categories;
};

export const getDepartments = ({ HomeReducer: { departments = [] } }) => {
  // console.log('home_categories',home_categories)
  return departments;
};

export const getRecomendedProducts = ({ HomeReducer: { recomendedProducts = [] } }) => {
  // console.log('home_categories',home_categories)
  return recomendedProducts;
};

export const productCarousels = ({ HomeReducer: { desktop = [] } }) => {
  // console.log('home_categories',home_categories)
  const carousels = desktop.filter(
    component => component.name === "ProductsCarousel"
  );

  return carousels;
};
