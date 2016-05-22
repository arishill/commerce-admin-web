Admin.components.shop.products.show.ui.form.flags = {
  controller: function() {},
  view: function() {
    return m('section#products-form-flags', [
      m('h3.form-title', [
        m('span', 'Flags', [
          // m('a.form-title---icon', { href: '#' }, 'Help with this section')
        ])
      ]),
      m('row', [
        m('fieldset', [
          m('label.form-label', { for: 'flags-status' }, Admin.models.products.data.single().flags.is_active ? 'Product is active' : 'Product is inactive'),
          m.component(Admin.components.shared.toggle.ui.container, {
            name: 'flags-status',
            checked: Admin.models.products.data.single().flags.is_active,
            onchange: function() {}
          })
          //error
        ]),
        m('fieldset', [
          m('label.form-label', { for: 'flags-taxable' }, Admin.models.products.data.single().flags.is_taxable ? 'Product is taxable' : 'Product is tax exempt'),
          m.component(Admin.components.shared.toggle.ui.container, {
            name: 'flags-taxable',
            checked: Admin.models.products.data.single().flags.is_taxable,
            onchange: function() {}
          })
          //error
        ])
      ])
    ]);
  }
};
