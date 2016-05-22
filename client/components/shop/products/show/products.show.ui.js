'use strict';

/* .........................................
  Products Show Container
......................................... */
Admin.components.shop.products.show.ui.container = {
  controller: function() {
    return new Admin.components.shop.products.show.controller({
      init: true
    });
  },
  view: function() {
    if (Admin.models.products.data.single()) {
      return m('section#shop-products-show', [
        m.component(Admin.components.shop.products.show.ui.header),
        m('form.form.padding-large.contain', [
          m.component(Admin.components.shop.products.show.ui.form.info),
          m.component(Admin.components.shop.products.show.ui.form.price),
          m.component(Admin.components.shop.products.show.ui.form.flags),
          m.component(Admin.components.shop.products.show.ui.form.schedule),
          m.component(Admin.components.shop.products.show.ui.form.categories)
        ]),
        m.component(Admin.components.shop.products.show.ui.actions),
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
  Products Show Header
......................................... */
Admin.components.shop.products.show.ui.header = {
  controller: function() {
    return new Admin.components.shop.products.show.controller();
  },
  view: function(ctrl) {
    return m('header.fixed.bg-white.z-high.border-gray-light.border--bottom', [
      m('div.row.padding-top-medium.padding-medium', [
        m('.col.small-1-1.text-left.text-middle', [
          m('p.contain-50.margin-horz-small', [
            ctrl.hasImage(Admin.models.products.data.single()) ?
              // if has image
              m('.img-1-1', {
                style: {
                  backgroundImage: 'url(' + Admin.models.products.data.single().skus[0].images.cascade + ')'
                }
              }) :
              // else
              m('.img-placeholder-sq')
          ]),

          m('h1.is-inline.margin-left-small.text-middle', [
            m('strong.is-block.head-black.text--large',  m.route().match(/create/) ? 'Create Product' : Admin.models.products.data.single().title),
            m('a.text-gray-dark.text--medium.is-inline.icon-external-link-gray.icon--right.icon--small', {
               href: '{{site.domain}}/{{product.url}}',
               target: '_blank'
            },  Admin.models.products.data.single().url)
          ]),
        ])
      ])
    ]);
  }
};

/* .........................................
  Products Show Actions
......................................... */
Admin.components.shop.products.show.ui.actions = {
  controller: function() {
    return new Admin.components.shop.products.show.controller();
  },
  view: function(ctrl) {
    return m('footer.fill-width.bottom.absolute.bg-white.z-high.border-gray-light.border--top', [
      m('div.row.text-right.padding-medium', [
        m('a.btn-white.margin-right-small', {
          href: '/' + Admin.route.section + '/' + Admin.route.subsection,
          config: m.route
        }, 'Cancel'),
        m('button.btn-green.btn--wide', 'Save')
      ])
    ]);
  }
};
