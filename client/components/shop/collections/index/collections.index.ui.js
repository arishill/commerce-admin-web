'use strict';

Admin.components.shop.collections.index.ui.container = {
  view: function(ctrl) {
    return m('section#shop-collections-index', [
      m.component(Admin.components.shared.header.ui.container, {
        title: 'Collections',
        icon: 'icon-arrange-site',
        buttons: {
          has_add: true
        },
        search: ctrl.search
      })
    ]);
  }
};
