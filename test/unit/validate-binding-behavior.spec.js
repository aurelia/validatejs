// import {ValidateBindingBehavior, getPropertyContext} from 'src/validate-binding-behavior';
// import {Container} from 'aurelia-dependency-injection';
// import {AccessScope, createScopeForTest} from 'aurelia-binding';
//
// describe('ValidateBindingBehavior', () => {
//   let container;
//   let bindingBehavior;
//   beforeEach(() => {
//     container = new Container();
//     bindingBehavior = container.get(ValidateBindingBehavior);
//   });
//
//   describe('getPropertyContext', () => {
//     xit('returns the proper context of the property', () => {
//       let source = {
//         name: 'Testing'
//       };
//       let scope = createScopeForTest(source);
//       let result = bindingBehavior.getPropertyContext('name', scope);
//       expect(result).toEqual(source);
//     });
//   });
//
//   describe('getTargetProperty', () => {
//     it('returns the target property from the binding expression', () => {
//       let binding = {
//         sourceExpression: {
//           expression: {
//             name: 'name'
//           }
//         }
//       };
//       let result = bindingBehavior.getTargetProperty(binding);
//       expect(result).toEqual(binding.sourceExpression.expression.name);
//     });
//   });
// });
