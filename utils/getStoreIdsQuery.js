import localStorage from './localStorage';
const getStoreIdsQuery = function(atg) {
  const storeId = localStorage.getItem('storeId');
  const selectedZipCode = window.getSelectedZipCode();
  const centerPoints = selectedZipCode && selectedZipCode.centerPoints;
  let query = '';
  if (centerPoints) {
    query = `${atg ? 'centerPoints=' : 'centralPts='}${
      centerPoints ? centerPoints.join(',') : ''
    }`;
  }
  if (storeId) {
    query = query + '&storeId=' + storeId;
  }
  if (atg) {
    return {
      centerPoints: centerPoints ? centerPoints.join(',') : undefined,
      storeId: storeId || '0000009999'
    };
  }
  return query;
};

export default getStoreIdsQuery;
