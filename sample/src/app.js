import {inject} from 'aurelia-framework';
import {required, length} from 'aurelia-validate';

export class App {
  model;
  constructor() {
    this.model = new Model();
  }
}

class Model {
  @required lastName = 'Skywalker';
  @length({ minimum: 5, maximum: 25 }) firstName = 'Luke';
}
