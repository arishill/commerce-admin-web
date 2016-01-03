'use strict';

(function(c, app, m) {

  c.container = {
    view: function() {
      return m('nav.nav-secondary', [
        c.helpers[app.route.section].items.map(function(group) {
          return m('ul.list-no-bullets', [
            group.map(function(item){
              return m('li', [
                m('a.btn-block-site' + (item.name === app.route.subsection ? '.is-active' : ''), {
                  'href': item.href,
                }, item.title)
              ]);
            })
          ]);
        }),
        m('p.contain-abs-bottom.contain--50.text-center.padding-bottom-small', [
          m('a.text-gray.text--small.icon-help-site.icon--bottom[href=#]', 'Help for this page')
        ])
      ]);
    }
  };

})(app.component.navigation.secondary, app, m);
