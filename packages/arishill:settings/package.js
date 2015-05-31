Package.describe({
  name: 'arishill:settings',
  summary: 'Settings for the Aristotle Admin Platform.',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'mongo',
    'random',
    'underscore',
    'iron:router@=1.0.6',
    'aldeed:simple-schema@1.2.0',
    'arishill:client'
  ]);

  api.use([
    'templating',
    'minimongo',
    'spacebars'
  ], 'client');

  api.addFiles([
    'lib/collections.js',
    'lib/controllers.js',
    'lib/routes.js'
  ]);

  api.addFiles([
    'client/index/__index.html',

    'client/show/__billing.html',
    'client/show/_payment.html',
    'client/show/_receipts.html',
    'client/show/_form.html'
  ], 'client');

  api.addFiles([
    'server/methods.js',
    'server/publications.js'
  ], 'server');

  api.export([
    'SettingsIndex',
    'BillingShow'
  ]);

  api.export([
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});