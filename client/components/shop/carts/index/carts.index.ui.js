'use strict';

Admin.components.shop.carts.index.ui.container = {
  view: function(ctrl) {
    return m('section#shop-carts-index', [
      m.component(Admin.components.shared.header.ui.container, {
        title: 'Carts',
        icon: 'icon-cart-site',
        buttons: {
          has_add: true
        },
        search: ctrl.search
      })
    ]);
  }
};
