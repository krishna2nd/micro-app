import get from "lodash";

export const userCart = ({ CartReducer: { list } }) => list;
export const cartTotals = ({ CartReducer: { list } }) => {
  let subTotal = 0;
  const uniqItems = {}
  list.forEach(item => {
    subTotal += (item.price || 0);
    count = uniqItems[item.id];
    if (!count) {
      count = 1
    } else {
      count++;
    }
    uniqItems[item.id] = count;
  });
  const discount = subTotal * 0.1;

  return {
    subTotal,
    total: subTotal - discount,
    discount,
    totalCount: Object.keys(uniqItems).length,
    itemCount: uniqItems,
  };
}
