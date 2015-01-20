Package.describe({
  name: 'arishill:uploader',
  summary: 'Uploads API for the Aristotle Admin Platform.',
  version: '0.1.0'
});

Npm.depends({
  "request": "2.51.0",
  "fibers": "1.0.5",
  "google-oauth-jwt": "0.1.4"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'underscore',
    ]);

  api.use([
    'minimongo',
    'templating',
    'ui',
    'spacebars'
  ], 'client');

  api.addFiles([
    'lib/test.js'
  ]);

  api.addFiles([
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
    'UploaderEvents',
    'UploaderHelpers'
  ], 'client');

  api.export([
    'Uploader',
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});