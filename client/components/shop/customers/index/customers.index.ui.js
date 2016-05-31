'use strict';

Admin.components.shop.customers.index.ui.container = {
  view: function(ctrl) {
    return m('section#shop-customers-index', [
      m.component(Admin.components.shared.header.ui.container, {
        title: 'Customers',
        icon: 'icon-profile-site',
        buttons: {
          has_add: true
        },
        search: ctrl.search
      })
    ]);
  }
};
