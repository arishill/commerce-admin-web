Package.describe({
  name: 'arishill:validate-card',
  summary: 'Credit Card validation.',
  version: '0.1.0'
});

Npm.depends({
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'mongo',
    'underscore',
    'arishill:forms'
    ]);

  api.use([
    'templating',
    'spacebars',
    'arishill:client'
  ], 'client');

  api.addFiles([
    'client/definitions.js',
    'lib/regex.card_types.js',
    'lib/regex.country_codes.js'
  ]);

  api.addFiles([
    'client/methods.js',
    'client/validations.js',
    'client/config.js',
    'client/callbacks.js',
    'client/events.js',
    'client/helpers.js'
  ], 'client');

  api.addFiles([
  ], 'server');

  api.export([
    'Forms'
  ]);

  api.export([
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});