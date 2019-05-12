/* === API_PATHS === */
export const LOGIN_API_PATH =
  '/rest/model/atg/userprofiling/ProfileActor/login';

export const LOGOUT_API_PATH =
  '/rest/model/atg/userprofiling/ProfileActor/logout';

/* === ROUTES === */
export const LOGIN_ROUTE = '/login';

export const ERROR_MAP = {
  'user.invalid.or.incorectpassword':
    'El correo y/o contraseña son incorrectos',
  'account.locked':
    'Tu cuenta fue bloqueada. Espera 5 minutos o crea una nueva contraseña.',
  invalidPassword: 'El correo y/o contraseña son incorrectos',
  sessionExpired: 'Tu sesión expiró. Para continuar, inicia sesión',
  default: 'Algo salió mal. Por favor, inténtalo de nuevo más tarde.'
};

export const MERGE_CART_PARAM = '?source=checkout';
