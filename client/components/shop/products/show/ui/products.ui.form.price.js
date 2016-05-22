Admin.components.shop.products.show.ui.form.price = {
  controller: function() {},
  view: function() {
    return m('section#products-form-pricing.row.margin-top-xlarge', [
      m('h3.form-title', [
        m('span', 'Pricing', [
          // m('a.form-title---icon', { href: '#' }, 'Help with this section')
        ])
      ]),
      m('div.col.small-1-2.gutter-right-medium', [
        m('fieldset', [
          m('label.form-label', {
            for: 'text-price-regular'
          }, 'Regular Price'),
          m('input#text-price-regular.fill-width', {
            type: 'text',
            value: accounting.formatMoney(Admin.models.products.data.single().price.regular_cents / 100)
          })
          //error
        ]),
        m('fieldset', [
          m('label.form-label', {
            for: 'text-price-sale'
          }, 'Sale Price'),
          m('input#text-price-sale.fill-width', {
            type: 'text',
            value: accounting.formatMoney(Admin.models.products.data.single().price.sale_cents / 100)
          })
          //error
        ])
      ]),
      m('div.col.small-1-2.gutter-left-medium', [
        m('fieldset.contain-text-60', [
          m.component(Admin.components.shared.toggle.ui.container, {
            name: 'bulk_markdown_toggle',
            checked: Admin.models.products.data.single().flags.ignore_bulk_markdowns,
            onchange: function() {}
          }),
          m('span.text-gray-dark.margin-left-small', 'Ignore Bulk Markdowns')
        ]),
        m('fieldset.contain-text-60', [
          m.component(Admin.components.shared.toggle.ui.container, {
            name: 'sale_toggle',
            checked: Admin.models.products.data.single().flags.is_sale,
            onchange: function() {}
          }),
          m('span.text-gray-dark.margin-left-small', 'On sale')
        ])
      ])
    ]);
  }
};
