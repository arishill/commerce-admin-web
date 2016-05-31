'use strict';

Admin.components.shop.reports.index.ui.container = {
  view: function(ctrl) {
    return m('section#shop-reports-index', [
      m.component(Admin.components.shared.header.ui.container, {
        title: 'Reports',
        icon: 'icon-doc-site',
        buttons: {
          has_add: true
        },
        search: ctrl.search
      })
    ]);
  }
};
