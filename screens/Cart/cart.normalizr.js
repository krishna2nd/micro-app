import get from "lodash/get";

export const normalizeCart = payload => get(payload, "response", {});

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
