Package.describe({
  name: 'arishill:content',
  summary: 'Content Aristotle Admin Platform.',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'mongo',
    'random',
    'underscore',
    'arishill:core',
    'arishill:fixtures',
    'iron:router@=1.0.6'
  ]);

  api.use([
    'templating',
    'minimongo',
    'spacebars',
    'arishill:components'
  ], 'client');

  api.addFiles([
    'lib/collections.js',
    'lib/routes.js',
    'lib/controllers.js',
    'fixtures/fixtures.example.js'
  ]);

  api.addFiles([
    'client/index/__index.html',
    'client/index/_summary.html',
    'client/index/_table.html',
    'client/index/_stat-card.html',

    'client/write/__edit.html',
    'client/write/helpers.js',
    'client/write/events.js',
    'client/write/callbacks.js',

    'client/fields/checkboxes.html',
    'client/fields/datepicker.html',
    'client/fields/dropdown.html',
    'client/fields/images.html',
    'client/fields/repeatable.html',
    'client/fields/tags.html',
    'client/fields/text.html',
    'client/fields/_helpers.js',
    'client/fields/_callbacks.js',
    'client/fields/_events.js'
  ], 'client');

  api.addFiles([
    'server/methods.js',
    'server/publications.js'
  ], 'server');

  api.export([
    'Collections',
    'ContentIndex',
    'ContentEdit'
  ]);

  api.export([
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});