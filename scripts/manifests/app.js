'use strict';

let Manifest = [
  'client/scope.js',
  /* primary nav component */
  'client/navigation/primary/helpers.js',
  'client/navigation/primary/state.js',
  'client/navigation/primary/view.js',

  /* secondary nav component */
  'client/navigation/secondary/helpers.js',
  'client/navigation/secondary/state.js',
  'client/navigation/secondary/view.js',

  /* layouts */
  'client/layouts/default/view.js',

  /* routes */
  'client/routes.js'
];

module.exports = Manifest;
