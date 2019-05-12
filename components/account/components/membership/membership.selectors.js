import { createSelector } from 'reselect';
import { ALERT_TYPES, AlertBannerType } from 'src/components/shared/alert';
import { isLoggedIn } from 'src/components/user/user.selectors';
import { generateBannerIcon } from 'src/components/user/components/renew-banner/renew-banner.utils';

export const getRenewBannerInfo = ({
  accountReducer: { membershipReducer }
}) => {
  const {
    aboutToExpire,
    expiryDays,
    expiryDate,
    membershipNumber
  } = membershipReducer;

  return {
    type: ALERT_TYPES.ERROR,
    icon: generateBannerIcon(),
    content: AlertBannerType.RENEW_BANNER,
    contentProps: {
      membershipNumber,
      aboutToExpire,
      expiryDays: expiryDays || null,
      expiryDate: expiryDate || null
    },
    delayTimeInMs: null,
    showCloseBtn: true
  };
};

export const showRenewBanner = state => {
  const {
    accountReducer: { membershipReducer }
  } = state;
  const { isRenewVisible, isRenewItemInCart } = membershipReducer;
  return isRenewVisible && !isRenewItemInCart && isLoggedIn(state);
};

export const membershipDetails = ({ accountReducer: { membershipReducer } }) =>
  membershipReducer;

export const membershipNumber = createSelector(
  membershipDetails,
  membershipDetails => membershipDetails.membershipNumber
);
