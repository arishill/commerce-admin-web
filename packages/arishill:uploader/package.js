Package.describe({
  name: 'arishill:uploader',
  summary: 'Uploads API for the Aristotle Admin Platform.',
  version: '0.1.0'
});

Npm.depends({
  'fibers': '1.0.5',
  'google-oauth-jwt': '0.1.4',
  'request': '2.51.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'underscore',
    ]);

  api.use([
    'minimongo',
    'templating',
    'less',
    'ui',
    'url',
    'spacebars'
  ], 'client');

  api.addFiles([
  ]);

  api.addFiles([
    'client/styles.less',
    'client/xhr.js',
    'client/helpers.js',
    'client/events.js',
    'client/reader.js'
  ], 'client');

  api.addFiles([
    'server/methods.js',
    'server/auth.js',
    'server/config.js'
  ], 'server');

  api.export([
    'Uploader'
  ], 'client');

  api.export([
    'Uploader'
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});