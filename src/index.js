import {Validator as ValidatorInterface} from 'aurelia-validation';
import {Validator} from './validator';

export function configure(config) {
  config.container.registerInstance(ValidatorInterface, new Validator());
}
