import get from "lodash";

export const userCart = ({ ConfirmReducer : { list } }) => list;
export const cartTotals = ({ ConfirmReducer: { list } }) => {
  let subTotal = 0;
  const uniqItems = {}
  list.forEach(item => {
    subTotal += ((Number(item.price) * item.count) || 1);
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
