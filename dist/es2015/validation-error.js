export let ValidationError = class ValidationError {
  constructor(data) {
    this.message = '';
    this.propertyName = '';

    for (let prop in data) {
      if (data.hasOwnProperty(prop)) {
        let properties = {
          propertyName: prop,
          message: data[prop][0]
        };
        Object.assign(this, properties);
      }
    }
  }
};