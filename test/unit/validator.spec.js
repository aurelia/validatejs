import {Validator} from 'src/validator';
import {ValidationReporter} from 'src/validation-reporter';
import {ValidationEngine} from 'src/validation-engine';
import {Container} from 'aurelia-dependency-injection';
import {validationMetadataKey} from 'aurelia-validation';
import {ValidationConfig} from 'src/validation-config';
import {metadata} from 'aurelia-metadata';

describe('ValidationEngine', () => {
  let container;
  let validation;
  let reporter;
  let target;

  describe('when validating against view-model-like object', () => {
    class Target {
      firstName = 'Patrick';
      constructor() {
        this.validation =
          validation.ensure(this, 'firstName')
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
      it('runs validation against the correct instance / config', (done) => {
        reporter = ValidationEngine.getValidationReporter(target);
        spyOn(reporter, 'publish');
        target.validation.validate();
        setTimeout(() => {
          expect(reporter.publish).toHaveBeenCalled();
          done();
        }, 1);
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

  describe('when validating against a model on a view-model', () => {
    class TargetModel {
      firstName = 'Patrick';
    }

    class Target {
      model = new TargetModel();
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
      metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target.model);
    });

    describe('.validate', () => {
      it('runs validation against the correct instance / config', (done) => {
        reporter = ValidationEngine.getValidationReporter(target.model);
        spyOn(reporter, 'publish');
        target.validation.validate();
        setTimeout(() => {
          expect(reporter.publish).toHaveBeenCalled();
          done();
        }, 1);
      });
    });
  });
});
