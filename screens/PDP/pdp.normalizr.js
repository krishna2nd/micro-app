import get from "lodash/get";

export const normalizeSkuDetails = response => {
  //response; // get(payload, "response", {});
  const auxiliaryMedia = get(response, "sku.auxiliaryMedia", undefined);
  // console.log(
  //   "auxiliaryMedia",
  //   auxiliaryMedia,
  //   auxiliaryMediaParser(auxiliaryMedia)
  // );
  if (auxiliaryMedia) {
    response.sku.auxiliaryMedia = auxiliaryMediaParser(auxiliaryMedia);
  } else {
    if (!response.sku) response.sku = {};
    response.sku.auxiliaryMedia = [];
  }
  // console.log("auxiliaryMedia", response.sku.auxiliaryMedia);
  return response;
};

export const normalizeEndecaProducts = (products = []) => {
  return extractInfoEndeca(products);
};

export const normalizeCarousels = (components = []) => {
  // console.log('home_categories',home_categories)
  components.forEach((component, index) => {
    if (component.name === "ProductsCarousel") {
      const carousel = component;
      const contents = carousel.contents[0];
      const products = (contents && contents.records) || [];
      components[index].contents = extractInfoEndeca(products);
    }
  });
  return components;
};

const RootDomain = "https://www.sams.com.mx";
const prefixHost = url => url.indexOf(RootDomain) === -1 ? RootDomain + url : url
const auxiliaryMediaParser = auxiliaryMedia => {
  const mediaMap = [
    ["ICON", "MEDIUM"],
    ["LEFT_ICON", "LEFT_MEDIUM"],
    ["RIGHT_ICON", "RIGHT_MEDIUM"],
    ["SUPERIOR_ICON", "SUPERIOR_MEDIUM"]
  ];
  const medias = [];
  mediaMap.forEach(keyMap => {
    const icon = auxiliaryMedia[keyMap[0]];
    const media = auxiliaryMedia[keyMap[1]];

    if (icon && icon.url) icon.url = prefixHost(icon.url);
    if (media && media.url) media.url = prefixHost( media.url);
    medias.push({
      icon,
      media
    });
  });
  return medias;
};

export const extractInfoEndeca = (products = []) => {
  const value = field => field && field[0];
  const numFields = ["sku.finalPrice", "sku.lastPrice", "sku.weighable"];
  const listFields = [
    "PaymentPlan",
    "product.department",
    "product.family",
    "sku.availableStores",
    "sku.oosStores"
  ];
  const normalizeFields = obj => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
      if (listFields.indexOf(key) >= 0) {
        return;
      }
      let val = obj[key];

      if (val.length > 1 || !val) {
        return;
      }
      val = value(val);

      if (numFields.indexOf(key) >= 0) {
        val = Number(val || 0);
      } else if (typeof val === "string") {
        const tmpVal = val.toLowerCase();
        if (tmpVal === "true" || tmpVal === "false") {
          val = Boolean(val || 0);
        }
      }
      obj[key] = val;
    });
    return obj;
  };

  return products.map(product => {
    const attr = product.attributes;
    return normalizeFields(attr);
  });
};
