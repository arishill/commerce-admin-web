Package.describe({
  name: 'arishill:imgix',
  summary: 'Generate images with the Imgix API.',
  version: '0.1.0'
});

Npm.depends({
  'imgix-core-js': '0.2.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    ]);

  api.use([
    'templating',
    'underscore',
    'spacebars'
  ], 'client');

  api.addFiles([
    'client/config.js',
    'client/core.js',
    'client/definitions.js',
    'client/helpers.js'
  ], 'client');

  api.addFiles([
    'server/config.js'
  ], 'server');

  api.export([
    'Imgix',
    'ImgixHelpers'
  ], 'client');

  api.export([
    'Imgix'
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});