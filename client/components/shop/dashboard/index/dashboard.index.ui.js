'use strict';

Admin.components.shop.dashboard.index.ui.container = {
  view: function(ctrl) {
    return m('section#shop-dashboard-index', [
      m.component(Admin.components.shared.header.ui.container, {
        title: 'Dashboard',
        icon: 'icon-graph',
        buttons: {

        }
      })
    ]);
  }
};
