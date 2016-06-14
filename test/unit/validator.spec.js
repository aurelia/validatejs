// import {Validator} from 'src/validator';
// import {ValidationReporter} from 'src/validation-reporter';
// import {required} from 'src/decorators';
// import {ValidationError, validationMetadataKey} from 'aurelia-validation';
// import {ValidationEngine} from 'src/validation-engine';
// import {Container} from 'aurelia-dependency-injection';
// import {ValidationConfig} from 'src/validation-config';
// import {metadata} from 'aurelia-metadata';
//
describe('Validator', () => {
//   let container;
//   let validator;
//   let reporter;
//   let target;
//
//   describe('when validating against view-model-like object', () => {
//
//     beforeEach(() => {
//       container = new Container();
//     });
//
//     describe('with a single property', () => {
//       describe('with a single rule', () => {
//
//         class Target {
//           firstName = 'TestName';
//           constructor() {
//             this.validator =
//               new Validator(this).ensure('firstName')
//                 .length({minimum: 3});
//           }
//         }
//
//         beforeEach(() => {
//           target = new Target();
//           metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target);
//         });
//
//         describe('.validate', () => {
           it('runs validation against the correct instance / config', (done) => {
//             reporter = ValidationEngine.getValidationReporter(target);
//             spyOn(reporter, 'publish');
//             target.validator.validate();
//             setTimeout(() => {
//               expect(reporter.publish).toHaveBeenCalled();
               done();
//             }, 1);
           });
//
//           it('validates the proper rules', (done) => {
//             let error = new ValidationError({})
//             error.message = 'First name is too short (minimum is 3 characters)';
//             error.propertyName = 'firstName';
//             let expectedResult = [error];
//             reporter = ValidationEngine.getValidationReporter(target);
//             spyOn(reporter, 'publish');
//             target.firstName = 'no';
//             target.validator.validate();
//             setTimeout(() => {
//               expect(reporter.publish).toHaveBeenCalledWith(expectedResult);
//               done();
//             }, 1);
//           });
//
//           it('returns an existing reporter if present', () => {
//             let vrInstance = new ValidationReporter();
//             vrInstance.uniqueId = 1;
//             let mockInstance = { __validationReporter__: vrInstance };
//             let result = ValidationEngine.getValidationReporter(mockInstance);
//             expect(result).toEqual(vrInstance);
//           });
//         });
//       });
//
//       describe('with multiple rules', () => {
//
//         class Target {
//           firstName = 'Patrick';
//           constructor() {
//             this.validator =
//               new Validator(this).ensure('firstName')
//                 .numericality()
//                 .length({minimum: 3});
//           }
//         }
//
//         beforeEach(() => {
//           target = new Target();
//           metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target);
//         });
//
//         describe('.validate', () => {
//
//           it('validates the proper rules', (done) => {
//             let errorOne = new ValidationError({});
//             let errorTwo = new ValidationError({});
//             errorOne.message = 'First name is not a number';
//             errorOne.propertyName = 'firstName';
//             errorTwo.message = 'First name is too short (minimum is 3 characters)';
//             errorTwo.propertyName = 'firstName';
//             let expectedResult = [errorOne, errorTwo];
//             reporter = ValidationEngine.getValidationReporter(target);
//             spyOn(reporter, 'publish');
//             target.firstName = 'no';
//             target.validator.validate();
//             setTimeout(() => {
//               expect(reporter.publish).toHaveBeenCalledWith(expectedResult);
//               done();
//             }, 1);
//           });
//         });
//       });
//     });
//
//     describe('with multiple properties to validate', () => {
//
//       class Target {
//         firstName = 'Patrick';
//         lastName = 'Walters';
//         constructor() {
//           this.validator =
//             new Validator(this).ensure('firstName')
//                 .length({minimum: 3})
//               .ensure('lastName')
//                 .length({minimum: 3});
//         }
//       }
//
//       beforeEach(() => {
//         target = new Target();
//         metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target);
//       });
//
//       describe('.validate', () => {
//
//         it('validates the proper rules', (done) => {
//           let errorOne = new ValidationError({});
//           let errorTwo = new ValidationError({});
//           errorOne.message = 'First name is too short (minimum is 3 characters)';
//           errorOne.propertyName = 'firstName';
//           errorTwo.message = 'Last name is too short (minimum is 3 characters)';
//           errorTwo.propertyName = 'lastName';
//           let expectedResult = [errorOne, errorTwo];
//           reporter = ValidationEngine.getValidationReporter(target);
//           spyOn(reporter, 'publish');
//           target.firstName = 'no';
//           target.lastName = 'no';
//           target.validator.validate();
//           setTimeout(() => {
//             expect(reporter.publish).toHaveBeenCalledWith(expectedResult);
//             done();
//           }, 1);
//         });
//
//         it('runs validation against the correct instance / config', (done) => {
//           reporter = ValidationEngine.getValidationReporter(target);
//           spyOn(reporter, 'publish');
//           target.validator.validate();
//           setTimeout(() => {
//             expect(reporter.publish).toHaveBeenCalled();
//             done();
//           }, 1);
//         });
//       });
//     });
//   });
//
//   describe('when validating against a model on a view-model', () => {
//     class TargetModel {
//       firstName = 'Patrick';
//     }
//
//     class DecoTargetModel {
//       @required firstName = 'Patrick';
//     }
//
//     class Target {
//       model = new TargetModel();
//       decoModel = new DecoTargetModel();
//       constructor() {
//         this.validator =
//           new Validator(this.model).ensure('firstName')
//             .length({minimum: 3});
//         this.decoValidator =
//           new Validator(this.decoModel);
//       }
//     }
//
//     beforeEach(() => {
//       container = new Container();
//       target = new Target();
//       metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target.model);
//     });
//
//     describe('.validate', () => {
//       it('runs validation against the correct instance / config', (done) => {
//         reporter = ValidationEngine.getValidationReporter(target.model);
//         spyOn(reporter, 'publish');
//         target.validator.validate();
//         setTimeout(() => {
//           expect(reporter.publish).toHaveBeenCalled();
//           done();
//         }, 1);
//       });
//
//       it('can validate an object with decorators', (done) => {
//         reporter = ValidationEngine.getValidationReporter(target.decoModel);
//         spyOn(reporter, 'publish');
//         target.decoValidator.validate();
//         setTimeout(() => {
//           expect(reporter.publish).toHaveBeenCalled();
//           done();
//         }, 1);
//       });
//     });
//   });
});
