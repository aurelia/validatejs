import {Validator, ValidationEngine, length, required, date, datetime, email, equality, url, numericality} from 'aurelia-validatejs';

export class Fluent {
  model;
  constructor() {
    this.model = new Model();
    this.validator = new Validator(this.model)
      .ensure('firstName')
        .required()
        .length({minimum: 3, maximum: 10})
      .ensure('lastName')
        .required()
      .ensure('email')
        .email()
      .ensure('password')
        .length({ minimum: 5, maximum: 25 })
      .ensure('confirmPassword')
        .equality('password')
      .ensure('blueOrRed')
        .inclusion(['blue', 'red'])
      .ensure('gender')
        .exclusion(['male'])
      .ensure('website')
        .url()
      .ensure('age')
        .numericality({ onlyInteger: true, lessThan: 115, greaterThan: 0 })
      .ensure('zipCode')
        .format(/\d{5}(-\d{4})?/);

    this.reporter = ValidationEngine.getValidationReporter(this.model);
    this.observer = this.reporter.subscribe(result => {
      console.log(result);
    });
  }
  validate() {
    this.validator.validate();
  }
  detached() {
    this.observer.dispose();
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
