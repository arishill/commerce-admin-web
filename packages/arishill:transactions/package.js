Package.describe({
  name: 'arishill:transactions',
  summary: 'Transactions API for the Aristotle Admin Platform.',
  version: '0.1.0'
});

Npm.depends({
  'braintree': '1.21.0',
  'fibers': '1.0.5',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'mongo',
    'random',
    'underscore',
    'iron:router@=1.0.6',
    'aldeed:simple-schema@1.2.0',
    'momentjs:moment',
    'arishill:forms'
    ]);

  api.use([
    'templating',
    'spacebars',
    'arishill:client'
  ], 'client');

  api.addFiles([
    'lib/collections.js',
    'lib/schemas/schema.card.js',
    'lib/schema.js'
  ]);

  api.addFiles([
    'client/definitions.js',
    'client/views/head.html',
    'client/views/form.html',
    'client/braintree/events.js',
    'client/template.callbacks.js',
    'client/template.events.js',
    'client/config.js'
  ], 'client');

  api.addFiles([
    'server/config.js',
    'server/methods.js',
    'server/braintree/errors.js',
    'server/braintree/schema.js',
    'server/braintree/methods.js',
    'server/stripe/errors.js',
    'server/stripe/schema.js',
    'server/stripe/methods.js'
  ], 'server');

  api.export([
    'Aristotle',
    'Transactions'
  ]);

  api.export([
    'Gateway'
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});