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
      m('div.padding-horz-medium.padding-top-small', [
        m.component(Admin.components.shared.dropdown.ui.container, {
          label: 'Go to',
          color: 'white',
          size: 'small',
          selectedVal: m.prop({
            name: 'shop',
            label: 'Shop'
          }),
          items: [
            {
              name: 'content',
              label: 'Content',
              is_disabled: true
            },
            {
              name: 'shop',
              label: 'Shop'
            },
            {
              name: 'settings',
              label: 'Settings',
              is_disabled: true
            },
            {
              name: 'campaigns',
              label: 'Campaigns',
              is_disabled: true
            },
            {
              name: 'numbers',
              label: 'Numbers',
              is_disabled: true
            }
          ],
          onselect: function(selected) {}
        })
      ]),
      Admin.components.nav.secondary.constants[Admin.route.section].items.map(function(group) {
        return m('ul.list-no-bullets', [
          group.map(function(item){
            return m('li', [
              !item.is_active ?
              m('a.btn-block-site' + (!item.is_active ? '.is-transparent-high' : ''), {
                href: item.href,
                config: m.route
              }, item.title) :
              m('a.btn-block-site' + (item.name === Admin.route.subsection ? '.is-active' : ''), {
                href: item.href,
                // config: m.route
                onclick: function() {
                  Admin.components.shared.modal.state.isOpen(false);
                  m.route(item.href);
                }
              }, item.title)
            ]);
          })
        ]);
      })
    ]);
  }
};
