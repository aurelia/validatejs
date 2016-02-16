import {length} from 'src/rules/length-property';

class TestModel {
  @length({ maximum: 6 }) name = 'Sunny';
  setName(value) {
    this.name = value;
  }
}

describe('length rule', () => {
  let subject;

  beforeEach(() => {
    subject = new TestModel();
  });

  describe('.initializeValidation', () => {
    it('should add empty validationMessages array', () => {
      let badString = 'Moony';
      subject.name = badString;
      expect(subject.name).toEqual(badString);
    });
  });
});
