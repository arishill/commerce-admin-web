'use strict';

Admin.components.nav.secondary.ui.container = {
  controller: function() {
    return new Admin.components.nav.secondary.controller();
  },
  view: function() {
    return m('nav.nav-secondary', [
      m('div.bg-site.fill-width.padding-vert-xsmall.text-center.contain', [
        m('h1.symbol-logo-default', 'Your Co.')
      ]),
      Admin.components.nav.secondary.constants[Admin.route.section].items.map(function(group) {
        return m('ul.list-no-bullets', [
          group.map(function(item){
            return m('li', [
              m('a.btn-block-site' + (item.name === Admin.route.subsection ? '.is-active' : ''), {
                href: item.href,
                config: m.route,
              }, item.title)
            ]);
          })
        ]);
      })
      // m('p.contain-abs-bottom.contain--50.text-center.padding-bottom-small', [
      //   m('a.text-gray.text--small.icon-help-site.icon--bottom[href=#]', 'Help for this page')
      // ])
    ]);
  }
};
