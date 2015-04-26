Package.describe({
  name: 'arishill:reports',
  summary: 'Reports for the Aristotle Admin Platform.',
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
    'arishill:client'
  ]);

  api.use([
    'templating',
    'minimongo',
    'spacebars',
    'arishill:admin-modules',
    'arishill:components'
  ], 'client');

  api.addFiles([
    'lib/collections.js',
    'lib/controllers.js',
    'lib/routes.js'
  ]);

  api.addFiles([
    'client/_shared/_stat-card.html',

    'client/index/index.html',
    'client/index/_report-table.html',
    'client/index/_summary.html',
    'client/index/_table.html',

    'client/show/show.html',
    'client/show/_summary.html',
    'client/show/_table.html',

    'client/_shared/definitions.js',

    'client/index/callbacks.js',
    'client/index/events.js',
    'client/index/helpers.js',

    'client/show/callbacks.js',
    'client/show/events.js',
    'client/show/helpers.js'
  ], 'client');

  api.addFiles([
    'server/methods.js',
    'server/publications.js'
  ], 'server');

  api.export([
    'ReportsIndex',
    'ReportsShow'
  ]);

  api.export([
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});