Package.describe({
  name: 'arishill:products-fixtures',
  summary: 'Dummy data for Products Package for the Aristotle Admin Platform.',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use(['arishill:products', 'arishill:forms', 'underscore']);

  api.addFiles([
    'client/data.spina.js',
    'client/data.fgc.js',
    'client/fixtures.js'
  ], 'client');

  api.addFiles([
    'server/methods.js'
  ], 'server');

  api.export([
    'ProductsFixtures'
  ], 'client');
});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('arishill:products-fixtures');
  // api.addFiles('arishill:products-fixtures-tests.js');
});
