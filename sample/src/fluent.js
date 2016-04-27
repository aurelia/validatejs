import {ValidationEngine, Validator, length, required, date, datetime, email, equality, url, numericality} from 'aurelia-validatejs';

export class Fluent {
  model;
  static inject = [Validator];
  constructor(validator) {
    this.model = new Model();
    this.validator = validator
      .ensure(this.model, 'firstName')
        .required()
        .length({minimum: 3, maximum: 10})
      .ensure(this.model, 'lastName')
        .required()
      .ensure(this.model, 'email')
        .email()
      .ensure(this.model, 'password')
        .length({ minimum: 5, maximum: 25 })
      .ensure(this.model, 'confirmPassword')
        .equality('password')
      .ensure(this.model, 'blueOrRed')
        .inclusion(['blue', 'red'])
      .ensure(this.model, 'gender')
        .exclusion(['male'])
      .ensure(this.model, 'website')
        .url()
      .ensure(this.model, 'age')
        .numericality({ onlyInteger: true, lessThan: 115, greaterThan: 0 })
      .ensure(this.model, 'zipCode')
        .format(/\d{5}(-\d{4})?/);
        ;
    this.reporter = ValidationEngine.getValidationReporter(this.model);
    this.reporter.subscribe(result => {
      console.log(result);
    });
  }
  validate() {
    this.validator.validate();
  }
}

class Model {
  firstName = 'Luke';
  lastName = 'Skywalker';
  // @date lastUpdated = new Date();
  // @datetime lastTimeUpdated = new Date();
  email = 'luke@skywalker.net';
  password = 'equal';
  confirmPassword = 'equal';
  blueOrRed = 'yellow';
  gender = 'male';
  website = 'http://www.google.com';
  age = 25;
  zipCode = '12345';
}
