'use strict';

Admin.components.shop.products.show.ui.container = {
  controller: function() {
    return new Admin.components.shop.products.show.controller({
      init: true
    });
  },
  view: function() {
    if (Admin.models.products.data.single()) {
      return m('section#shop-products-show', [
        m('div', Admin.models.products.data.single().title)
      ]);
    }
    else {
      return m('div.contain--fixed.fill-width.fill-height', [
        m('.ui-loader')
      ]);
    }

  }
};
