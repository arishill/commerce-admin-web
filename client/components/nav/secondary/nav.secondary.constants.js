'use strict';

Admin.components.nav.secondary.constants = {
  content: {
    items: [
      // group 1
      [
        {
        'name': 'dashboard',
        'href': '/content',
        'title': 'Dashboard'
        },
      ]
    ]
  },
  shop: {
    items: [
      // group 1
      [
        {
        'name': 'dashboard',
        'href': '/shop',
        'title': 'Dashboard'
        }
      ],
      // group 2
      [
        {
          'name': 'products',
          'href': '/shop/products',
          'title': 'Products'
        },
        {
          'name': 'discounts',
          'href': '/shop/discounts',
          'title': 'Discounts'
        }
      ],

      // group 3
      [
        {
          'name': 'orders',
          'href': '/shop/orders',
          'title': 'Orders'
        }
      ]
    ]
  },
  settings: {
    items: [
      // group 1
      [
        {
        'name': 'dashboard',
        'href': '/content',
        'title': 'Dashboard'
        },
      ]
    ]
  },
};
