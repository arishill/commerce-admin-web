Package.describe({
  name: 'arishill:client',
  summary: 'Template helpers and events for the Aristotle Admin Platform.',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'templating',
    'underscore'
  ], 'client');

  api.addFiles([
    'client/events.js',
    'client/helpers.js'
  ], 'client');

  api.export([
    'GlobalTemplates'
  ], 'client');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});