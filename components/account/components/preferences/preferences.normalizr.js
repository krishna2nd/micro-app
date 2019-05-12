export const normalizePreferencesResponse = ({
  abandonCartAlert,
  onlyTelephonicAlert,
  receivePromoEmail,
  forOBIEE,
  receiveInfoEmail,
  telephonicSmsAlert
}) => ({
  forOBIEE,
  abandonCartAlert,
  receiveInfoEmail,
  telephonicSmsAlert,
  onlyTelephonicAlert: onlyTelephonicAlert === 'receiveCallConfirmation',
  receivePromoEmail: receivePromoEmail === 'Si'
});

export const normalizeTelephoneAlert = x =>
  x ? 'receiveCallConfirmation' : 'onlySubstituteAvailable';

export const normalizeReceivePromoEmail = x => (x ? 'Si' : 'No');

export const normalizePreferencesParams = x => ({
  ...x,
  onlyTelephonicAlert: normalizeTelephoneAlert(x),
  receivePromoEmail: normalizeReceivePromoEmail(x)
});
