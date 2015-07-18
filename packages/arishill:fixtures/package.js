Package.describe({
  name: 'arishill:fixtures',
  summary: 'Fixtures for testing/demoing the Aristotle Admin Platform.',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'arishill:forms'
  ]);

  api.use([
    'underscore'
  ], 'client');

  api.addFiles([
    'client/fixtures.js'
  ], 'client');

  api.addFiles([
    'server/methods.js'
  ], 'server');

  api.export([
    'Fixtures'
  ], 'client');
});