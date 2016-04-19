export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-validate');

  aurelia.start().then(a => a.setRoot('app'));
}
