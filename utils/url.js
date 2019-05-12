const CHECKOUT = '/checkout';
const FULLCART = '/fullcart';
const MYORDERS = '/perfil/mis-ordenes/';
const LOGIN = '/login';
class UrlManager {
  Change = (path, addOns) => {
    let finalPath = path;
    if (addOns) {
      finalPath += addOns;
    }
    window.location.href = finalPath;
  };
  goToCheckout = () => {
    this.Change(CHECKOUT);
  };
  goToFullCart = () => {
    this.Change(FULLCART);
  };
  goToMyOrders = params => {
    this.Change(MYORDERS, params);
  };
  goToLogin = () => {
    this.Change(LOGIN);
  };
}

const Url = new UrlManager();
export default Url;

export const validateSKUURL = (url, skuId) => {
  const splitUrl = url.split(',');
  if (splitUrl.length === 1) return url;
  return splitUrl.filter(url => url.includes(skuId))[0];
};
