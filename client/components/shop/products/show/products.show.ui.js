'use strict';

Admin.components.shop.products.show.ui.container = {
  controller: function() {
    return new Admin.components.shop.products.show.controller({
      init: true
    });
  },
  view: function() {
    return m('section#shop-products-show', 'Show!');
  }
};
