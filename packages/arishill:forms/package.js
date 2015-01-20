Package.describe({
  name: 'arishill:forms',
  summary: 'Validator utility built off of Simple Schema, with custom validors for the Aristotle platform.',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  api.use(['underscore', 'mongo', 'aldeed:simple-schema@1.2.0']);

  api.addFiles([
    'lib/clean.js',
    'lib/currency.js',
    'lib/serialize.js',
    'lib/schema.js',
    'server/modifier.js'
  ]);

  api.addFiles([
  ], 'client');

  api.addFiles([
  ], 'server');

  api.export([
    'Schemas',
    'SimpleSchema',
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