Package.describe({
  name: 'arishill:products',
  summary: 'Products API for the Aristotle Admin Platform.',
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
    'momentjs:moment',
    'arishill:core',
    'arishill:uploader',
    'arishill:imgix',
    'arishill:forms'
  ]);

  api.use([
    'templating',
    'minimongo',
    'spacebars',
    'less',
    'arishill:aesop',
    'arishill:admin-modules'
  ], 'client');

  api.addFiles([
    'lib/collections.js',
    'lib/controllers.js',
    'lib/routes.js',
    'lib/schemas/schema.flags.js',
    'lib/schemas/schema.price.js',
    'lib/schemas/schema.scheduled.js',
    'lib/schemas/schema.shipping.js',
    'lib/schemas/schema.variants.js',
    'lib/schema.js'
  ]);

  api.addFiles([
    'client/styles/edit.less',

    'client/views/index.html',
    'client/views/create.html',
    'client/views/edit.html',
    'client/views/table/_table.html',
    'client/views/table/head.html',
    'client/views/table/body.html',
    'client/views/form/_form.html',
    'client/views/form/categories.html',
    'client/views/form/shipping.html',
    'client/views/form/info.html',
    'client/views/form/images.html',
    'client/views/form/schedule.html',
    'client/views/form/flags.html',
    'client/views/form/options.html',
    'client/views/form/price.html',
    'client/views/form/relationships.html',
    'client/views/form/variants.html',
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
    'Products',
    'ProductsIndex',
    'ProductsCreate',
    'ProductsEdit',
    'moment'
  ]);

  api.export([
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});