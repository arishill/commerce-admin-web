'use strict';

Admin.components.shared.header.ui.container = {
  view: function(ctrl, data) {
    return m('header.row.padding-medium', [
      m('div.col.small-1-2.text-left', [
        m('div.unit-horz', [
          m('h1.header-icon.' + data.icon + '.padding-right-medium.border--right.unit-block', data.title),
          m('form.form-search.btn--medium.btn.is-inline icon--left.icon-search-black.unit-block.unit-fill', [
            m('input.data-search.text-gray.text--xmedium.padding-left-xsmall.is-block.text-left.fill-width[type=text]', {
              placeholder: 'Type here to search...' ,
              onkeyup: data.search,
              onkeydown: data.search
            })
          ]),
        ])
      ]),
      m('div.col.small-1-2.text-right', [
        data.buttons.has_arrange ? m('a[href=#].btn-white.btn--medium.icon--left.icon-arrange-site.icon--small.margin-right-small', 'Arrange ' + data.title) : '',
        data.buttons.has_add ? m('a.btn-white.btn--medium.icon--left.icon-plus-' + (Admin.components.shared.header.state.addHover() ? 'black' : 'gray') + '.icon--small', {
          href: m.route() + '/create',
          config: m.route,
          onmouseenter: function() {
            Admin.components.shared.header.state.addHover(true);
          },
          onmouseleave: function() {
            Admin.components.shared.header.state.addHover(false);
          }
        }, 'Create ' + data.title.replace(/s$/, '') ) : ''
      ])
    ]);
  }
};
