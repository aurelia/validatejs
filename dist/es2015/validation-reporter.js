function getRandomId() {
  let rand = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  let id = new Date().getTime() + rand;
  return id;
}

export let ValidationObserver = class ValidationObserver {
  constructor(reporter, callback) {
    this.id = getRandomId();

    this.reporter = reporter;
    this.callback = callback;
  }
  dispose() {
    this.reporter.destroyObserver(this);
  }
};

export let ValidationReporter = class ValidationReporter {
  constructor() {
    this.__callbacks__ = {};
  }

  subscribe(callback) {
    let observer = new ValidationObserver(this, callback);
    this.__callbacks__[observer.id] = observer;
    return observer;
  }
  publish(errors) {
    for (let key of Object.keys(this.__callbacks__)) {
      let observer = this.__callbacks__[key];
      observer.callback(errors);
    }
  }
  destroyObserver(observer) {
    delete this.__callbacks__[observer.id];
    return true;
  }
};