export class ValidationError {
  message = '';
  object;
  propertyName = '';
  value;
  constructor(data) {
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
}
