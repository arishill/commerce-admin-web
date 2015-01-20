Package.describe({
  name: 'arishill:validate-card',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('arishill:validate-card.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('arishill:validate-card');
  api.addFiles('arishill:validate-card-tests.js');
});
