Package.describe({
  name: 'arishill:categories',
  summary: 'Categories for the Aristotle Admin Platform.',
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
    'arishill:transactions',
    'arishill:forms'
  ]);

  api.use([
    'templating',
    'spacebars'
  ], 'client');

  api.addFiles([
    'lib/collections.js',
    'lib/controllers.js',
    'lib/routes.js',
    'lib/schema.js'
  ]);

  api.addFiles([
    'client/views/index.html',
    'client/views/edit.html',
    'client/views/create.html',
    'client/views/table/_table.html',
    'client/views/table/head.html',
    'client/views/table/body.html',
    'client/views/form/_form.html',
    'client/views/form/customer.html',
    'client/views/form/items.html',
    'client/views/form/receipt.html',
    'client/views/form/type.html',
    'client/views/form/transactions.html',
    'client/callbacks.js',
    'client/events.js',
    'client/helpers.js'
  ], 'client');

  api.addFiles([
    'server/methods.js',
    'server/publications.js'
  ], 'server');

  api.export([
    'Collections',
    'Categorys',
    'CategorysCreate',
    'CategorysEdit',
    'CategorysIndex'
  ]);

  api.export([
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});