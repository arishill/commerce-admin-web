Package.describe({
  name: 'arishill:products',
  summary: 'Products API for the Aristotle Admin Platform.',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    /* meteor */
    'mongo',
    'random',
    'underscore',
    /* vendor */
    'iron:router@=1.0.6',
    'aldeed:simple-schema@1.2.0',
    'momentjs:moment',
    'tmeasday:publish-counts',
    /* arishill */
    'arishill:core',
    'arishill:uploader',
    'arishill:imgix',
    'arishill:fixtures',
    'arishill:forms'
  ]);

  api.use([
    'templating',
    'minimongo',
    'spacebars',
    'less',
    'reactive-var',
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
    'lib/schema.js',

    /* fixtures */
    'fixtures/example.clothing_botique.js',
    'fixtures/example.flower_botique.js'
  ]);

  api.addFiles([
    /* index */
    'client/index/template.html',
    'client/index/_table_head.html',
    'client/index/_table_row.html',
    'client/index/callbacks.js',
    'client/index/events.js',
    'client/index/helpers.js',
    'client/index/styles.less',

    /* edit & create */
    'client/write/create.html',
    'client/write/edit.html',
    'client/write/form/_form.html',
    'client/write/form/categories.html',
    'client/write/form/shipping.html',
    'client/write/form/info.html',
    'client/write/form/images.html',
    'client/write/form/schedule.html',
    'client/write/form/flags.html',
    'client/write/form/options.html',
    'client/write/form/price.html',
    'client/write/form/relationships.html',
    'client/write/form/variants.html',
    'client/write/callbacks.js',
    'client/write/helpers.js',
    'client/write/styles.less',
    'client/write/events.js'
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