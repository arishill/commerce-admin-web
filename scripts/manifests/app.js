'use strict';

let Manifest = [
  'client/ext.js',
  'client/scope.js',

  /* shared components */
  'client/views/_shared/header/view.js',

  /* primary nav component */
  'client/views/navigation/primary/helpers.js',
  'client/views/navigation/primary/state.js',
  'client/views/navigation/primary/view.js',

  /* secondary nav component */
  'client/views/navigation/secondary/helpers.js',
  'client/views/navigation/secondary/state.js',
  'client/views/navigation/secondary/view.js',

  /* content > dashboard component */
  'client/views/content/dashboard/index/view.js',

  /* shop ..................................... */

    /* dashboard components */
    'client/views/shop/dashboard/index/view.js',

    /* products components */
    'client/views/shop/products/index/view.js',
    'client/views/shop/products/show/view.js',

    /* orders components */
    'client/views/shop/orders/index/view.js',
    'client/views/shop/orders/show/view.js',

    /* coupons components */
    'client/views/shop/coupons/index/view.js',
    'client/views/shop/coupons/show/view.js',

    /* sales components */
    'client/views/shop/sales/index/view.js',
    'client/views/shop/sales/show/view.js',

    /* categories components */
    'client/views/shop/categories/index/view.js',
    'client/views/shop/categories/show/view.js',

  /* settings > dashboard component */
  'client/views/settings/dashboard/index/view.js',

  /* layouts */
  'client/views/layouts/default/view.js',

  /* routes */
  'client/routes.js'
];

module.exports = Manifest;
