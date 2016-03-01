export class Validator {
  validate(object, prop) {
    if (prop) {
      object.validate(prop);
    } else {
      object.validate();
    }
  }
  getProperties() {
    console.error('Not yet implemented');
  }
}
