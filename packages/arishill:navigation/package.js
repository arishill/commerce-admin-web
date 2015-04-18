Package.describe({
  name: 'arishill:navigation',
  summary: 'Aristotle Admin Platform Navigation.',
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
    'arishill:core',
    'arishill:client',
    'arishill:fixtures'
  ]);

  api.use([
    'templating',
    'minimongo',
    'spacebars'
  ], 'client');

  api.addFiles([
    'lib/collections.js'
  ]);

  api.addFiles([
    'client/views/primary.html',
    'client/views/secondary.html',

    'client/definitions.js',
    'client/template.callbacks.js',
    'client/template.events.js',
    'client/template.helpers.js',

    'fixtures/fixtures.default.js'
  ], 'client');

  api.addFiles([
    'server/methods.js',
    'server/publications.js'
  ], 'server');

  api.export([
    'Collections'
  ]);


  api.export([
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});