Package.describe({
  name: 'arishill:validate-address',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('arishill:validate-address.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('arishill:validate-address');
  api.addFiles('arishill:validate-address-tests.js');
});
