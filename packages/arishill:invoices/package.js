Package.describe({
  name: 'arishill:invoices',
  summary: 'Invoices for the Aristotle Admin Platform.',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');

  api.use([
    'mongo',
    'random',
    'underscore',
    'iron:router@=1.0.6',
    'aldeed:simple-schema@1.2.0',
    'arishill:core',
    'arishill:transactions',
    'arishill:forms'
  ]);

  api.use([
    'templating',
    'spacebars'
  ], 'client');

  api.addFiles([
    'lib/collections.js',
    'lib/controllers.js',
    'lib/routes.js',
    'lib/schemas/schema.billing.js',
    'lib/schemas/schema.customer.js',
    'lib/schemas/schema.line_items.js',
    'lib/schemas/schema.invoice.js',
    'lib/schemas/schema.items.js',
    'lib/schemas/schema.receipt.js',
    'lib/schemas/schema.refunds.js',
    'lib/schemas/schema.shipment.js',
    'lib/schemas/schema.transactions.js',
    'lib/schema.js'
  ]);

  api.addFiles([
    'client/views/index.html',
    'client/views/edit.html',
    'client/views/create.html',
    'client/views/table/_table.html',
    'client/views/table/head.html',
    'client/views/table/body.html',
    'client/views/form/_form.html',
    'client/views/form/email.html',
    'client/views/form/line_items.html',
    'client/views/form/recepient.html',
    'client/views/form/transactions.html',
    'client/callbacks.js',
    'client/events.js',
    'client/helpers.js'
  ], 'client');

  api.addFiles([
    'server/methods.js',
    'server/publications.js'
  ], 'server');

  api.export([
    'Collections',
    'Invoices',
    'InvoicesCreate',
    'InvoicesEdit',
    'InvoicesIndex'
  ]);

  api.export([
  ], 'server');

});

Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('products');
  // api.addFiles('products-tests.js');
});