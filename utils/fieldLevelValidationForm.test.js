import { isValidDate } from './fieldLevelValidationForm';

describe('utils/fieldLevelValidationForm', () => {
  describe('isValidDate', () => {
    it('should return false', () => {
      const foo = '10/10/1988';
      expect(isValidDate(foo)).toEqual(false);
    });

    it('should return Fecha inválida for inputing invalid string', () => {
      const foo = '10/09/83';
      expect(isValidDate(foo)).toEqual(false);
    });

    it('should return Fecha inválida for invalid month', () => {
      const foo = '10/13/1988';
      expect(isValidDate(foo)).toEqual('Fecha inválida');
    });

    it('should return Fecha inválida for inputing empty string', () => {
      const foo = '';
      expect(isValidDate(foo)).toEqual(false);
    });

    it('should return Fecha inválida for inputing invalid string', () => {
      const foo = '10/19';
      expect(isValidDate(foo)).toEqual('Fecha inválida');
    });

    it('should return Fecha inválida for inputing invalid date', () => {
      const foo = '32/09/83';
      expect(isValidDate(foo)).toEqual('Fecha inválida');
    });

    it('should return Fecha inválida for inputing invalid string', () => {
      let foo;
      expect(isValidDate(foo)).toEqual(false);
    });
  });
});
