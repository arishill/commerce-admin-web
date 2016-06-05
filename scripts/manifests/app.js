'use strict';

let Manifest = [
  'client/_core/ext.js',
  'client/_core/scope.js',

  /* utils */
  'client/_utils/utils.strings.js',

  /* models */
  'client/models/products.js',
  'client/models/discounts.js',
  'client/models/orders.js',

  /* shared components */
  'client/components/_shared/header/header.state.js',
  'client/components/_shared/header/header.ui.js',
  'client/components/_shared/checkbox/checkbox.ui.js',
  'client/components/_shared/dropdown/dropdown.ui.js',
  'client/components/_shared/toggle/toggle.ui.js',
  'client/components/_shared/modal/modal.ui.js',
  'client/components/_shared/modal/modal.state.js',
  'client/components/_shared/modal/modal.controller.js',

  /* primary nav component */
  'client/components/nav/primary/nav.primary.constants.js',
  'client/components/nav/primary/nav.primary.controller.js',
  'client/components/nav/primary/nav.primary.state.js',
  'client/components/nav/primary/nav.primary.ui.js',

  /* secondary nav component */
  'client/components/nav/secondary/nav.secondary.constants.js',
  'client/components/nav/secondary/nav.secondary.controller.js',
  'client/components/nav/secondary/nav.secondary.state.js',
  'client/components/nav/secondary/nav.secondary.ui.js',

  // /* content > dashboard component */
  // 'client/components/content/dashboard/index/view.js',
  //
  /* shop ..................................... */

    /* dashboard components */
    'client/components/shop/dashboard/index/dashboard.index.ui.js',

    /* products components */
    'client/components/shop/products/data/products.all.js',
    'client/components/shop/products/index/products.index.controller.js',
    'client/components/shop/products/index/products.index.state.js',
    'client/components/shop/products/index/products.index.ui.js',
    'client/components/shop/products/show/products.show.controller.js',
    'client/components/shop/products/show/products.show.ui.js',
    'client/components/shop/products/show/products.show.state.js',
    'client/components/shop/products/show/ui/products.ui.form.info.js',
    'client/components/shop/products/show/ui/products.ui.form.price.js',
    'client/components/shop/products/show/ui/products.ui.form.flags.js',
    'client/components/shop/products/show/ui/products.ui.form.schedule.js',
    'client/components/shop/products/show/ui/products.ui.form.categories.js',
    'client/components/shop/products/show/ui/products.ui.form.images.js',

    /* orders components */
    'client/components/shop/orders/data/orders.all.js',
    'client/components/shop/orders/index/orders.index.controller.js',
    'client/components/shop/orders/index/orders.index.state.js',
    'client/components/shop/orders/index/orders.index.ui.js',
    'client/components/shop/orders/show/orders.show.controller.js',
    'client/components/shop/orders/show/orders.show.state.js',
    'client/components/shop/orders/show/orders.show.ui.js',
    'client/components/shop/orders/show/ui/orders.ui.form.receipt.js',
    'client/components/shop/orders/show/ui/orders.ui.form.payment.js',
    'client/components/shop/orders/show/ui/orders.ui.form.fulfillment.js',

    /* discounts components */
    'client/components/shop/discounts/data/discounts.all.js',
    'client/components/shop/discounts/index/discounts.index.controller.js',
    'client/components/shop/discounts/index/discounts.index.state.js',
    'client/components/shop/discounts/index/discounts.index.ui.js',
    'client/components/shop/discounts/show/discounts.show.controller.js',
    'client/components/shop/discounts/show/discounts.show.state.js',
    'client/components/shop/discounts/show/discounts.show.ui.js',
    'client/components/shop/discounts/show/ui/discounts.ui.form.applies.js',
    'client/components/shop/discounts/show/ui/discounts.ui.form.details.js',
    'client/components/shop/discounts/show/ui/discounts.ui.form.notify.js',
    'client/components/shop/discounts/show/ui/discounts.ui.form.schedule.js',

    /* collections components */
    'client/components/shop/collections/index/collections.index.ui.js',

    /* customers components */
    'client/components/shop/customers/index/customers.index.ui.js',

    /* carts components */
    'client/components/shop/carts/index/carts.index.ui.js',

    /* reports components */
    'client/components/shop/reports/index/reports.index.ui.js',

  //
  //   /* coupons components */
  //   'client/components/shop/coupons/index/view.js',
  //   'client/components/shop/coupons/show/view.js',
  //   'client/components/shop/coupons/show/details.view.js',
  //   'client/components/shop/coupons/show/applies.view.js',
  //   'client/components/shop/coupons/show/schedule.view.js',
  //   'client/components/shop/coupons/show/notify.view.js',
  //
  //   /* sales components */
  //   'client/components/shop/sales/index/view.js',
  //   'client/components/shop/sales/show/view.js',
  //
  //   /* categories components */
  //   'client/components/shop/categories/index/view.js',
  //   'client/components/shop/categories/show/view.js',
  //
  // /* settings > dashboard component */
  // 'client/components/settings/dashboard/index/view.js',

  /* layouts */
  'client/layouts/standard/standard.controller.js',
  'client/layouts/standard/standard.state.js',
  'client/layouts/standard/standard.ui.js',

  /* routes */
  'client/_core/routes.js'
];

module.exports = Manifest;
