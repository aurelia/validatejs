import {inject} from 'aurelia-framework';
import {length, required, date, datetime, email, equality, exclusion, inclusion, format, url, numericality} from 'aurelia-validatejs';
import {ValidationEngine} from 'aurelia-validatejs';

export class Decorators {
  model;
  errors = [];
  subscriber;
  constructor() {
    this.model = new Model();
    this.reporter = ValidationEngine.getValidationReporter(this.model);
    this.subscriber = this.reporter.subscribe(result => {
      this.renderErrors(result);
    });
  }
  detached() {
    this.subscriber.dispose();
  }
  submit() {
    if (!this.hasErrors()) {
      alert('Submitted successfully');
    } else {
      alert('Form has errors');
    }
  }
  hasErrors() {
    return !!this.errors.length;
  }
  renderErrors(result) {
    this.errors.splice(0, this.errors.length);
    result.forEach(error => {
      this.errors.push(error)
    });
  }
}

class Model {
  @length({ minimum: 5, maximum: 25 }) firstName = 'Luke';
  @required lastName = 'Skywalker';
  // @date lastUpdated = new Date();
  // @datetime lastTimeUpdated = new Date();
  @email email = 'luke@skywalker.net';
  @length({ minimum: 5, maximum: 25 }) password = 'equal';
  @equality('password') confirmPassword = 'equal';
  @inclusion(['blue', 'red']) blueOrRed = 'yellow';
  @exclusion(['male']) gender = 'male';
  @url website = 'http://www.google.com';
  @numericality({ onlyInteger: true, lessThan: 115, greaterThan: 0 }) age = 25;
  @format(/\d{5}(-\d{4})?/) zipCode = '12345';
}
