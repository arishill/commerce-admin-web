'use strict';

(function(c, m) {

  c.container = {
    view: function() {
      return m('nav.nav-secondary', [
        m('ul.list-no-bullets', [
          c.helpers.items.map(function(item) {
            return m('li', [
              m('a.btn-block-site', {
                'href': item.href,
              }, item.text)
            ]);
          })
        ]),
        m('p.contain-abs-bottom.contain--50.text-center.padding-bottom-small', [
          m('a.text-gray.text--small.icon-help-site.icon--bottom[href=#]', 'Help for this page')
        ])
      ]);
    }
  };

})(app.component.navigation.secondary, m);
