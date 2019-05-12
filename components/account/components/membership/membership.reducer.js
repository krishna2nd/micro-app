import { handleActions } from 'redux-actions';
import { initUserSuccess } from 'src/components/user/user.actions';
import { membershipNormalizr } from './membership.normalizr';
import { membershipRenewSuccess } from 'src/components/cart/cart.actions';
const initialState = {};

const onInitSetMembershipInfo = (state, { payload: { response } }) => {
  const {
    isRenewVisible,
    aboutToExpire,
    isRenewItemInCart,
    membershipNumber,
    cardholderType
  } = membershipNormalizr(response);
  return {
    ...state,
    isRenewVisible,
    aboutToExpire,
    isRenewItemInCart,
    membershipNumber: membershipNumber || '',
    cardholderType: cardholderType || ''
  };
};

export default handleActions(
  {
    [initUserSuccess]: onInitSetMembershipInfo,
    [membershipRenewSuccess]: state => ({
      ...state,
      isRenewVisible: false
    })
  },
  initialState
);
