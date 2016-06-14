// import {ValidationReporter} from 'src/validation-reporter';
// import {ValidationReporterStub} from '../fixtures/validation-reporter-stub';
// import {Container} from 'aurelia-dependency-injection';
// import {base, addRule} from 'src/base-decorator';
// import {metadata} from 'aurelia-metadata';
// import {ValidationConfig} from 'src/validation-config';
// import {validationMetadataKey} from 'src/metadata-key';
// import {ValidationRule} from 'src/validation-rule';
//
// describe('base rule', () => {
//   let object = { test: 'name' };
//   let container;
//   let config;
//
//   beforeEach(() => {
//     container = new Container();
//     config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, object);
//   });
//
//   describe('when decorating with configuration', () => {
//     it('calls addRule with empty targetOrConfig', () => {
//       spyOn(config, 'addRule');
//       let result = base(object, 'blue', {}, ValidationRule.url);
//       expect(config.addRule).toHaveBeenCalledWith('blue', ValidationRule.url(null));
//     });
//   });
// });
