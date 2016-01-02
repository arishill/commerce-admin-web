'use strict';

(function(c, m) {

  c.container = {
    view: function() {
      return m('nav.nav-primary.bg-site.z-xhigh', [
        m('div.col-pull.text-center.contain', [
          m('h1.symbol-logo-arishill', 'Arishill')
        ]),
        m('ul.list-inline-force.pull', [
          c.helpers.items.map(function(item) {
            return m('li', [
              m('a.btn.' + item.icon + '.icon--right', {
                'href': item.href,
                'target': item.target || ''
              }, item.text)
            ]);
          })
        ])
      ]);
    }
  };

})(app.component.navigation.primary, m);
