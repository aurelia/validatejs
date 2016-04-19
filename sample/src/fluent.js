import {length, required, date, datetime, email, equality, url, numericality} from 'aurelia-validatejs';
import {ValidationReporter} from 'aurelia-validatejs';

export class App {
  static inject = [ValidationReporter];
  model;
  constructor(reporter) {
    this.model = new Model();
    this.reporter = reporter.subscribe(result => {
      console.log(result);
    });
  }
}


class Model {
  @length({ minimum: 5, maximum: 25 }) firstName = 'Luke';
  @required lastName = 'Skywalker';
}
