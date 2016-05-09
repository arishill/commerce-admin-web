'use strict';

Admin.components.nav.primary.ui.container = {
  controller: function() {
    return new Admin.components.nav.primary.controller();
  },
  view: function() {
    return m('nav.nav-primary.bg-site.z-xhigh', [
      m('div.col-pull.text-center.contain', [
        m('h1.symbol-logo-arishill', 'Arishill')
      ]),
      m('ul.list-inline-force.pull', [
        Admin.components.nav.primary.constants.items.map(function(item) {
          return m('li', [
            m('a.btn.' + item.icon + (item.name === Admin.route.section ? '.is-active' : '') + '.icon--right', {
              'href': item.href,
              'target': item.target || ''
            }, item.title)
          ]);
        })
      ])
    ]);
  }
};
