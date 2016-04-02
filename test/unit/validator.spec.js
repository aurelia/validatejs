import {Validator} from 'src/validator';
import {ValidationReporter} from 'src/validation-reporter';
import {Container} from 'aurelia-dependency-injection';
import {validationMetadataKey} from 'aurelia-validation';
import {ValidationConfig} from 'src/validation-config';
import {metadata} from 'aurelia-metadata';

describe('ValidationEngine', () => {
  let container;
  let validation;

  class FakeModel {
    firstName = 'Patrick'
  }

  class Target {
    model = new FakeModel();
    constructor() {
      this.validation =
        validation.ensure(this.model, 'firstName')
          .length({minimum: 3});
    }
  }

  beforeEach(() => {
    container = new Container();
    validation = container.get(Validator);
    target = new Target();
    metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target);
  });

  describe('.validate', () => {
    it('runs validation against the correct instance / config', () => {
      let result = target.validate();
      expect(result).toEqual(new ValidationReporter());
    });

    it('returns an existing reporter if present', () => {
      let vrInstance = new ValidationReporter();
      vrInstance.uniqueId = 1;
      let mockInstance = { __validationReporter__: vrInstance };
      let result = ValidationEngine.getValidationReporter(mockInstance);
      expect(result).toEqual(vrInstance);
    })
  });
});
