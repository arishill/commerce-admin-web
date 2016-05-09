'use strict';

(function(order, c, m) {

  order.edit.details = {
    view: function(ctrl, doc) {
      return m('section.box-shadow', [
        m('h3.form-title', 'Details ', [
          // m('a[href=#].form-title---icon', 'Help with this section'),
          m('div.form-title--action', [
            m('a[href=#].btn-white.btn--small.icon-pencil-black.icon--center', 'Edit')
          ])
        ]),
        m('.padding-large', [
          m('table.table', [
            m('thead', [
              m('tr', [
                m('th.set-10.padding-horz-xsmall'),
                m('th.set-50">Item'),
                m('th.text-left'),
                m('th.text-center.small-2-16', 'Sku'),
                m('th.text-center.small-1-16', 'Qty'),
                m('th.text-right.small-1-16', 'Price'),
                m('th.small-3-16.text-right', 'Subtotal'),
                m('th.set-30'),
              ])
            ]),
            m('tbody', [
              doc.items.map(function(item) {
                return m('tr', [
                  m('td.text-center.padding-horz-xsmall', [
                    m('a[href=#]', [
                      m('i.icon-zoom-gray')
                    ])
                  ]),
                  m('td.text-center', [
                      m('div.img-placeholder-sq')
                  ]),
                  m('td.text-left', [
                    m('h5.text-black', item.title)
                  ]),
                  m('td.text-right', item.sku_id.split('-')[0]),
                  m('td.text-center', item.quantity),
                  m('td.text-right', accounting.formatMoney((item.flags.is_sale ? item.price.sale_cents : item.price.regular_cents)/100)),
                  m('td.text-right', accounting.formatMoney(item.amount.subtotal_cents/100)),
                  m('td.text-center.border-gray.border--left.border--bottom', [
                    m('a.btn.icon-trash-red.icon--center[href=#]', 'Delete')
                  ])
                ]);
              })
            ]),
          ]),
          m('.padding-top-medium.text-right', [
            m('a.link-site.icon--left.icon--small.icon-plus-site[href=#]', 'Add Item')
          ]),
          m('div.row.padding-vert-medium.border-gray-light.border--bottom', [
            m('span.col.small-1-4.text-right.text-black', 'Subtotal'),
            m('span.col.small-3-4.text-right.text-gray', accounting.formatMoney(doc.receipt.amount.subtotal_cents/100))
          ]),
          m('div.row.margin-bottom-medium', [
            m('div.col-push.small-1-3.border-gray-light.border--bottom', [
              m('div.row.margin-vert-small', [
                m('span.text-gray.col-pull.small-1-2.text-left', 'Tax'),
                m('span.text-gray col-pull small-1-2 text-right', accounting.formatMoney(doc.receipt.amount.tax_cents/100))
              ]),
              m('div.row.margin-vert-small', [
                m('span.text-gray.col-pull.small-1-2.text-left', 'Shipping'),
                m('span.text-gray.col-pull.small-1-2.text-right', accounting.formatMoney(doc.receipt.amount.shipping_cents/100))
              ]),
              m('div.row.margin-vert-medium.text-right', [
                m('a.link-site.icon--left.icon--small.icon-plus-site[href=#]', 'Add Discount')
              ])
            ])
          ]),
          m('div.row.margin-bottom-medium', [
            m('div.col-push.small-1-3', [
              m('div.row.margin-vert-small', [
                m('strong.head-black.col-pull.small-1-2.text-left', 'Total'),
                m('strong.head-black.col-pull.small-1-2.text-right', accounting.formatMoney(doc.receipt.amount.total_cents))
              ])
            ])
          ])
        ])
      ]);
    }
  };

})(app.component.shop.orders.show, app.component, m);
