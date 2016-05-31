'use strict';

Admin.components.nav.secondary.constants = {
  content: {
    items: [
      // group 1
      [
        {
        'name': 'dashboard',
        'href': '/content',
        'title': 'Dashboard',
        'is_active': true
        }
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
          'title': 'Dashboard',
          'is_active': true
        },
        {
          'name': 'reports',
          'href': '/shop/reports',
          'title': 'Reports',
          'is_active': false
        }
      ],
      // group 2
      [
        {
          'name': 'products',
          'href': '/shop/products',
          'title': 'Products',
          'is_active': true
        },
        // {
        //   'name': 'subscriptions',
        //   'href': '/shop/subscriptions',
        //   'title': 'Subscriptions',
        //   'is_active': false
        // },
        {
          'name': 'discounts',
          'href': '/shop/discounts',
          'title': 'Discounts',
          'is_active': true
        },
        {
          'name': 'collections',
          'href': '/shop/collections',
          'title': 'Collections',
          'is_active': false
        }
      ],

      // group 3
      [
        {
          'name': 'orders',
          'href': '/shop/orders',
          'title': 'Orders',
          'is_active': true
        },
        {
          'name': 'customers',
          'href': '/shop/customers',
          'title': 'Customers',
          'is_active': false
        },
        {
          'name': 'carts',
          'href': '/shop/carts',
          'title': 'Carts',
          'is_active': false
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
