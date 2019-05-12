import get from 'lodash/get';

export const initListNormalizr = (
  data = {},
  listIdPropertyName,
  itemsPropertyName
) => {
  const items = get(data, itemsPropertyName, []);
  const listId = get(data, listIdPropertyName, '');
  return {
    [listId]: {
      id: listId,
      ids: items.map(p => p.skuId)
    }
  };
};
