'use strict';

/* .........................................
  Discounts Show Container
......................................... */
Admin.components.shop.discounts.show.ui.container = {
  controller: function() {
    return new Admin.components.shop.discounts.show.controller({
      init: true
    });
  },
  view: function() {
    if (Admin.models.discounts.data.single()) {
      return m('section#shop-orders-show', [
        m.component(Admin.components.shop.discounts.show.ui.header),
        m('form.form.padding-large.contain', [
          m.component(Admin.components.shop.discounts.show.ui.form.details),
          m.component(Admin.components.shop.discounts.show.ui.form.applies),
          m.component(Admin.components.shop.discounts.show.ui.form.schedule),
          m.component(Admin.components.shop.discounts.show.ui.form.notify)
          // m.component(Admin.components.shop.discounts.show.ui.form[Admin.components.shop.discounts.show.state.page()])
        ]),
        m.component(Admin.components.shop.discounts.show.ui.actions),
      ]);
    }
    else {
      return m('div.contain--absolute.fill-width.fill-height', [
        m('.loader.loader--medium')
      ]);
    }
  }
};

/* .........................................
  Discounts Show Header
......................................... */
Admin.components.shop.discounts.show.ui.header = {
  controller: function() {
    return new Admin.components.shop.discounts.show.controller();
  },
  view: function(ctrl) {
    return m('header.absolute.fill-width.bg-white.z-high.border-gray-light.border--bottom', [
      m('div.row.padding-medium', [
        m('.col.small-2-3.text-left', [
          m('h1.margin-left-small', [
            m('p.head-black.text--large',  m.route().match(/create/) ? 'Create Discount' : Admin.models.discounts.data.form().title())
          ])
        ])
      ])
    ]);
  }
};


/* .........................................
  Discounts Show Actions
......................................... */
Admin.components.shop.discounts.show.ui.actions = {
  controller: function() {
    return new Admin.components.shop.discounts.show.controller();
  },
  view: function(ctrl) {
    return m('footer.fill-width.bottom.absolute.bg-white.z-high.border-gray-light.border--top', [
      m('div.row.padding-medium', [
        m('.col.small-1-2.text-left', [
          m('button.btn.icon-trash-red.icon--center' + (Admin.components.shop.discounts.show.state.isDeleteProcessing() === Admin.models.discounts.data.single().id ? '.is-loading' : ''), {})
        ]),
        m('.col.small-1-2.text-right', [
          m('a.btn-white.margin-right-small', {
            href: '/' + Admin.route.section + '/' + Admin.route.subsection,
            config: m.route
          }, 'Cancel'),
          m('button.btn-green.btn--wide', 'Save')
        ])
      ])
    ]);
  }
};
