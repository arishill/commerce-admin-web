Package.describe({
  name: 'arishill:admin-modules',
  summary: 'Arishill Admin Platform Modules',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'templating',
    'spacebars',
    'underscore',
    'arishill:components'
  ], 'client');

  api.addFiles([
    'client/views/pagination.html',
    'client/scripts/helpers.js',
    'client/scripts/callbacks.js'
  ], 'client');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('arishill:aesop');
  // api.addFiles('arishill:aesop-tests.js');
});
