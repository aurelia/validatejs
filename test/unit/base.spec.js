import {initializeValidation} from 'src/rules/base';

describe('base rule', () => {
  let object = {};

  describe('.initializeValidation', () => {
    it('should add empty validationMessages array', () => {
      initializeValidation(object);
      expect(object.validationMessages).toEqual([]);
      expect(object.isValid).toEqual(false);
    });
  });
});