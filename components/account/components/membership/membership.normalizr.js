export const membershipNormalizr = ({
  membershipExpiry,
  aboutToExpire,
  isRenewItemInCart,
  membershipNumber,
  cardholderType
}) => {
  return {
    isRenewItemInCart,
    aboutToExpire,
    membershipNumber,
    cardholderType,
    isRenewVisible: membershipExpiry || aboutToExpire
  };
};
