import {validationMetadataKey} from 'aurelia-validation';
import {ValidationConfig} from './validation-config';
import {metadata} from 'aurelia-metadata';

export class Validator {
  validate(object, prop) {
    let config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, object);
    if (prop) {
      config.validate(object, prop)
    } else {
      config.validate(object);
    }
  }
  getProperties() {
    console.error('Not yet implemented');
  }
  ensure(object, prop) {
    console.log(this);

    return this;
  }
}
