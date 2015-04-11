Package.describe({
  name: 'arishill:dashboard',
  summary: 'Dashboad the Aristotle Admin Platform.',
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
    'spacebars'
  ], 'client');

  api.addFiles([
    'lib/collections.js',
    'lib/controllers.js',
    'lib/routes.js'
  ]);

  api.addFiles([
    'client/views/index.html',
    'client/views/summary.html',
    'client/views/table.html',
    'client/views/_stat-card.html',
    'client/views/_stat-table.html',

    'client/definitions.js',
    'client/template.callbacks.js',
    'client/template.events.js',
    'client/template.helpers.js'
  ], 'client');

  api.addFiles([
    'server/methods.js',
    'server/publications.js'
  ], 'server');

  api.export([
    'DashboardIndex',
    // 'DashboardTemplates',
    // 'DashboardCollection'
  ]);

  api.export([
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});