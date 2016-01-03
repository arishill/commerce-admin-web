'use strict';

(function(c) {

  c.helpers = {
    items: [
      {
        'name': 'site',
        'href': 'http://arishill.com',
        'target': '_blank',
        'title': 'arishill.com',
        'icon': 'icon-external-link-white',
      },
      {
        'name': 'content',
        'href': '/content',
        'title': 'Content',
        'icon': 'icon-content-white',
      },
      {
        'name': 'shop',
        'href': '/shop',
        'title': 'Shop',
        'icon': 'icon-cart-white',
      },
      {
        'name': 'settings',
        'href': '/settings',
        'title': 'Settings',
        'icon': 'icon-gear-white',
      }
    ]
  };

})(app.component.navigation.primary);
