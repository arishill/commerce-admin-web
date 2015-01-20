Package.describe({
  name: 'arishill:fixtures',
  summary: 'Dummy data for for the Aristotle Admin Platform.',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  api.use([
    'arishill:products',
    'arishill:orders',
    'arishill:forms',
    'underscore',
    'momentjs:moment'
  ]);

  api.addFiles([
    'client/data/spina.products.js',
    'client/data/spina.orders.js',
    'client/data/fgc.products.js',
    'client/data/fgc.orders.js',
    'client/fixtures.js'
  ], 'client');

  api.addFiles([
    'server/methods.js'
  ], 'server');

  api.export([
    'Fixtures'
  ], 'client');
});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('arishill:products-fixtures');
  // api.addFiles('arishill:products-fixtures-tests.js');
});
