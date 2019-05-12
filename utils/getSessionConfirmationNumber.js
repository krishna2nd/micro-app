//import localStorage from './localStorage';
//import { SESSION_CONFIG_KEY } from '../components/user/components/meta/meta.constants';
let _dynSessConf;
const SESSION_CONFIG_KEY = '_dynSessConf';
const getSessionConfirmationNumber = () => {
  //let _dynSessConf = localStorage.getItem(SESSION_CONFIG_KEY);
  try {
    _dynSessConf = _dynSessConf && JSON.parse(_dynSessConf);
  } catch (err) {}
  console.log(
    '_dynSessConf',
    _dynSessConf && _dynSessConf.sessionConfirmationNumber
  );
  return _dynSessConf && _dynSessConf.sessionConfirmationNumber;
};

export default getSessionConfirmationNumber;
