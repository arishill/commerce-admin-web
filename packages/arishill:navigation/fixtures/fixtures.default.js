// definitions
Fixtures = (_.isUndefined(Fixtures)) ? {} : Fixtures;
Fixtures.sections = (_.isUndefined(Fixtures.sections)) ? [] : Fixtures.sections;

// set timestamps

/* NAVIGATION
.................................................*/
Fixtures.sections['defaults'] = {
  "shop": {
    "nav": [
      {
        "is_available": true,
        "path": "dashboard",
        "route": "dashboard_index",
        "title": "Dashboard",
        "group": 0
      },
      {
        "is_available": true,
        "path": "reports",
        "route": "reports",
        "title": "Reports",
        "group": 0
      },
      {
        "is_available": true,
        "path": "products",
        "route": "products_index",
        "title": "Products",
        "group": 1
      },
      {
        "is_available": false,
        "path": "subscriptions",
        "route": "subscriptions_index",
        "title": "Subscriptions",
        "group": 1
      },
      {
        "is_available": true,
        "path": "coupons",
        "route": "coupons_index",
        "title": "Coupons",
        "group": 1
      },
      {
        "is_available": true,
        "path": "categories",
        "route": "categories_index",
        "title": "Categories",
        "group": 1
      },
      {
        "is_available": true,
        "path": "orders",
        "route": "orders_index",
        "title": "Orders",
        "group": 2
      },
      {
        "is_available": true,
        "path": "invoices",
        "route": "invoices_index",
        "title": "Invoices",
        "group": 2
      },
      {
        "is_available": false,
        "path": "customers",
        "route": "customers_index",
        "title": "Customers",
        "group": 2
      },
      {
        "is_available": true,
        "path": "taxes",
        "route": "taxes_index",
        "title": "Taxes",
        "group": 3
      },
      {
        "is_available": true,
        "path": "shipping",
        "route": "shipping_index",
        "title": "Shipping",
        "group": 3
      }
    ]
  },
  "content": {
    "nav": [
      {
        "is_available": true,
        "path": "home/edit",
        "route": "home",
        "title": "Home",
        "group": 0
      },
      {
        "is_available": true,
        "path": "about/edit",
        "route": "about",
        "title": "About",
        "group": 0
      }
    ]
  },
  "settings": {
    "nav": [
      {
        "is_available": true,
        "path": "navigation",
        "route": "navigation",
        "title": "Navigation",
        "group": 0
      },
      {
        "is_available": true,
        "path": "groups",
        "route": "groups",
        "title": "Groups",
        "group": 0
      },
      {
        "is_available": true,
        "path": "billing",
        "route": "billing",
        "title": "Billing",
        "group": 1
      }
    ]
  }
};