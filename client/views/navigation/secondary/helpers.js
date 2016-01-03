'use strict';

(function(c) {

  c.helpers = {
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
          },
          {
            'name': 'reports',
            'href': '/shop/reports',
            'title': 'Reports'
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
            'name': 'categories',
            'href': '/shop/categories',
            'title': 'Categories'
          },
          {
            'name': 'sales',
            'href': '/shop/sales',
            'title': 'Sales'
          },
          {
            'name': 'coupons',
            'href': '/shop/coupons',
            'title': 'Coupons'
          },
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

})(app.component.navigation.secondary);
