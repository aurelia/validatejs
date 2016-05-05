export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-validatejs');

  aurelia.start().then(a => {
    a.setRoot('app');

    System.config({
      paths: {
        "*": "dist/*"
      }
    })
  });
}
