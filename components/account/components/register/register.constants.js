import React from 'react';
import { Link } from 'react-router-dom';
import { FORGOT_PASSWORD_PATH } from 'src/components/app/app.constants';
import { fullWidth } from 'src/components/account/account.styles.css';

export const REGISTER_API_PATH =
  '/api/rest/model/atg/userprofiling/ProfileActor/userRegister';

export const GET_CONFIGURED_CONTENT_API_PATH =
  '/api/rest/model/atg/commerce/catalog/ProductCatalogActor/lookupContent';

export const REGISTER_SUCCESS = ({ firstName, lastName }) => {
  return (
    <div>
      <div className={fullWidth}>
        Bienvenido, {firstName} {lastName}
      </div>
      <div className={fullWidth}>Creaste tu cuenta correctamente</div>
    </div>
  );
};

export const registerErrors = error => {
  if (error.errorcode === 'userAlreadyExists')
    return (
      <div>
        Este correo electrónico ya está registrado, si olvidaste tu contraseña{' '}
        <Link to={FORGOT_PASSWORD_PATH}>haz clic aquí</Link>
      </div>
    );

  return error.message;
};
