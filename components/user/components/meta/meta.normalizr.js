export const normalizeMeta = ({ securityStatus = 0 }) => {
  let isLoggedIn = false;

  if (securityStatus === 2 || securityStatus === 4 || securityStatus === 5) {
    isLoggedIn = true;
  }
  return {
    isLoggedIn
  };
};
