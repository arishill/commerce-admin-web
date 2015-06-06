Package.describe({
  name: 'arishill:core',
  summary: 'Aristotle Core.',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'underscore'
  ]);

  api.addFiles([
    'lib.js'
  ]);

  api.addFiles([
    'client.js'
  ], 'client');

  api.addFiles([
    'server.js'
  ], 'server');

  api.export([
    'Collections'
  ]);
});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('arishill:products-fixtures');
  // api.addFiles('arishill:products-fixtures-tests.js');
});
