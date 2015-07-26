Package.describe({
  name: 'arishill:components',
  summary: 'UI Components/APIs',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  api.use([
    'underscore',
    'less',
    'jquery',
    'templating',
    'spacebars',
    'arishill:imgix'
  ], 'client');

  api.addFiles([
    'definitions.js',
    '_config/jquery.observer.js',

    /* dropdown */
    'dropdown/template.html',
    'dropdown/core.js',
    'dropdown/style.less',

    /* image multi */
    'image-multi/template.html',
    'image-multi/core.js',
    'image-multi/callbacks.js',
    'image-multi/style.less',

    /* datepicker */
    'datepicker/depends.js',
    'datepicker/template.html',
    'datepicker/core.js',
    'datepicker/callbacks.js',
    'datepicker/style.less',

    /* checkbox */
    'checkbox/template.html',
    'checkbox/helpers.js'
  ], 'client');

  api.export([
    'Components'
  ]);
});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('arishill:aesop');
  // api.addFiles('arishill:aesop-tests.js');
});
