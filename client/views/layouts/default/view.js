'use strict';

(function(layout, c, m) {

  layout.container = {
    controller: function() {
      let pathname = window.location.pathname;

      app.route = {
        pathname: pathname,
        method: m.route.param('id') ? 'show' : 'index',
        id: m.route.param('id'),
        section: pathname.split('/')[1],
        subsection: pathname.split('/')[2] || 'dashboard',
      };
    },
    view: function() {
      return [
        m.component(c.navigation.primary.container),
        m.component(c.navigation.secondary.container),
        m('section.stage.has-drawer', [
          m('.contain', [
            m.component(c[app.route.section][app.route.subsection][app.route.method].container),
          ]),
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
          ])
        ])
      ];
    }
  };

})(app.layout.default, app.component, m);
