import {required} from 'src/rules/required-property';

class TestModel {
  @required name = 'Sunny';
  setName(value) {
    this.name = value;
  }
}

describe('required rule', () => {
  let subject;

  beforeEach(() => {
    subject = new TestModel();
  });

  describe('.initializeValidation', () => {
    it('should add empty validationMessages array', () => {
      subject.name = 'Testing';
      expect(subject.name).toEqual('Sunny');
    });
  });
});