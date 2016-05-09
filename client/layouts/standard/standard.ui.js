'use strict';

Admin.layouts.standard.ui.container = {
  controller: function() {
    return new Admin.layouts.standard.controller({
      init: true
    });
  },
  view: function() {
    return [
      m.component(Admin.components.nav.primary.ui.container),
      m.component(Admin.components.nav.secondary.ui.container),
      m('section.stage' + (Admin.layouts.standard.state.hasDrawer() ? '.has-drawer' : ''), [
        m('.contain', [
          m.component(Admin.components[Admin.route.section][Admin.route.subsection][Admin.route.method].ui.container),
        ]),
        Admin.layouts.standard.state.hasDrawer() ?
          m.component(Admin.components.standard.ui.drawer) : ''
      ])
    ];
  }
};

Admin.layouts.standard.ui.drawer = {
  controller: function() {
    return new Admin.layouts.standard.controller();
  },
  view: function() {
    m('aside.drawer', [
      m('.padding-medium', [
        m('.row', [
          m('.col.small-1-2.text-left', [
            m('h4.head-gray.icon-help-black.icon--left', 'Help')
          ]),
          m('.col.small-1-2.text-right', [
            m('a.icon-x-black.icon--small.icon--center[href=#]', 'Close')
          ]),
        ])
      ])
    ]);
  }
};
