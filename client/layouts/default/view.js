'use strict';

(function(layout, c, m) {

  layout.container = {
    view: function() {
      return [
        m.component(c.navigation.primary.container),
        m.component(c.navigation.secondary.container),
        m('section.stage.has-drawer', [
          m('.contain', []),
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
