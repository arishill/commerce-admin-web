Package.describe({
  name: 'arishill:products',
  summary: 'Products API for the Aristotle Admin Platform.',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  api.use(['mongo', 'random', 'iron:router@=1.0.6', 'aldeed:template-extension@3.1.1', 'aldeed:simple-schema@1.2.0', 'arishill:forms']);
  api.use(['underscore', 'minimongo', 'templating', 'ui', 'spacebars'], 'client');

  api.addFiles([
    'lib/collections.js',
    'lib/controllers.js',
    'lib/routes.js',
    'lib/schema.js'
  ]);

  api.addFiles([
    'client/callbacks.js',
    'client/events.js',
    'client/helpers.js',
    'client/views/index.html',
    'client/views/form.html',
    'client/views/form/shipping.html',
    'client/views/form/info.html',
    'client/views/form/schedule.html',
    'client/views/form/flags.html',
    'client/views/form/options.html',
    'client/views/form/price.html',
    'client/views/form/variants.html'
  ], 'client');

  api.addFiles([
    'server/methods.js',
    'server/publications.js'
  ], 'server');

  api.export([
    'Products',
    'ProductsIndex',
    'ProductsCreate',
    'ProductsEdit',
    'ProductsTemplates',
    'ProductsCollection'
  ]);

  api.export([
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});