import trim from 'lodash/trim';

export const required = (value = '') =>
  trim(value) ? undefined : 'Este campo no puede estar vacío';

export const maxLength = max => value =>
  value && value.length > max
    ? `debé tener menos de ${max} caracteres`
    : undefined;

export const maxLength40 = maxLength(40);
export const maxLength60 = maxLength(60);
export const maxLength150 = maxLength(150);

export const minLength = min => value =>
  value && value.length < min
    ? `debé tener más de ${min} caracteres`
    : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? 'Tiene que ser un número' : undefined;

export const email = value =>
  value && !/^[a-zA-Z0-9]+[A-Z0-9._%+-]*@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'El formato de correo electrónico no es válido'
    : undefined;

export const phoneNumber = value =>
  value && value.length < 10
    ? 'Debes ingresar un número de 10 dígitos mínimo'
    : undefined;

export const phoneNumberExtension = value =>
  value && value.length < 10 ? '' : undefined;

export const password = value =>
  value && !/^.{8,40}$/.test(value)
    ? 'Ingresa al menos 8 caracteres'
    : undefined;

export const zipCode = value =>
  value && value.length < 5 && isNaN(Number(value))
    ? 'Código postal no válido'
    : undefined;

export const noSpecialCharacters = value =>
  value && !/^[a-z A-Z À-ÿ 0-9]+$/.test(value)
    ? 'Caracteres especiales no están permitidos'
    : undefined;

export const duplicatePwd = (value, { oldPassword }) =>
  value && value === oldPassword && 'La contraseña es incorrecta.'
    ? 'La contraseña es incorrecta.'
    : undefined;

export const isFutureDate = value => {
  let today = new Date().getTime();
  value = value.split('/');
  value = new Date(value[2], value[1] - 1, value[0]).getTime();

  return today - value < 0 && 'Fecha inválida';
};

export const isValidDate = value => {
  if (!value) {
    return false;
  }

  let bits = (value || '').split('/');
  const year = parseInt(bits[2], 10);
  const month = parseInt(bits[1], 10);
  const date = parseInt(bits[0], 10);

  return !year ||
    !month ||
    !date ||
    (month && month > 12) ||
    (date && date > 31)
    ? 'Fecha inválida'
    : false;
};

export const isOver18 = value => {
  if (!value) return null;

  let bits = value.split('/');

  return new Date(
    parseInt(bits[2], 10) + 18,
    parseInt(bits[1], 10) - 1,
    parseInt(bits[0], 10)
  ) <= new Date()
    ? undefined
    : 'Debes ser mayor de 18 años';
};

export const duplicatePhoneNumber = (values, { phoneNumber, mobileNumber }) => {
  return phoneNumber && mobileNumber && phoneNumber === mobileNumber
    ? 'Número de teléfono duplicado'
    : undefined;
};
