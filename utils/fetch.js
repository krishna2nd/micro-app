const fetchBackendUrl = ({ url, method, onSuccess, onFailure, onRequest }) => (
  dispatch,
  getState
) => {
  dispatch(onRequest());
  return dispatch(
    method({
      url
    })
  )
    .then(response => {
      dispatch(onSuccess(response));
      //console.log(response);
      return response;
    })
    .catch(({ message }) => {
      console.error("ERR", url, message);
      dispatch(onFailure(message));
      return Promise.reject(message);
    });
};

export default fetchBackendUrl;
