Admin.components.shop.products.show.ui.form.categories = {
  controller: function() {},
  view: function() {
    return m('section#products-form-categories', [
      m('h3.form-title', [
        m('span', 'Categories', [
          // m('a.form-title---icon', { href: '#' }, 'Help with this section')
        ])
      ]),
      m('fieldset.margin-top-reset', [
          m('label.padding-top-medium.text-left.form-label', 'Type to choose or create a category'),
          m('input[type="text"].fill-width', {
            name: 'categories'
          }),
          m('ul.padding-vert-medium', [
            m('li.is-inline.padding-right-small', [
              m('a.btn-white.btn--small.text-left.icon--right.icon--xsmall.icon-x-black', {
                href: '#'
              }, 'Category')
            ]),
            m('li.is-inline.padding-right-small', [
              m('a.btn-white.btn--small.text-left.icon--right.icon--xsmall.icon-x-black', {
                href: '#'
              }, 'Category')
            ])
          ])
      ])
    ]);
  }
};
