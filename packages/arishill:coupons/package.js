Package.describe({
  name: 'arishill:coupons',
  summary: 'Coupons for the Aristotle Admin Platform.',
  version: '0.1.0'
});

Npm.depends({
  'cron': '1.0.9'
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
    'client/index/__index.html',
    'client/index/_table.html',
    'client/index/callbacks.js',
    'client/index/events.js',
    'client/index/helpers.js',

    'client/write/__create.html',
    'client/write/_applies.html',
    'client/write/_email.html',
    'client/write/_discount.html',
    'client/write/_schedule.html',
    'client/write/callbacks.js',
    'client/write/events.js',
    'client/write/helpers.js'
  ], 'client');

  api.addFiles([
    'server/jobs.js',
    'server/methods.js',
    'server/publications.js'
  ], 'server');

  api.export([
    'Collections',
    'Coupons',
    'CouponsCreate',
    'CouponsEdit',
    'CouponsIndex'
  ]);

  api.export([
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});