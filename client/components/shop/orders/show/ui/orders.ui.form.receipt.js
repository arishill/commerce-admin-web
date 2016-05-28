'use strict';

Admin.components.shop.orders.show.ui.form.receipt = {
  controller: function() {
    return new Admin.components.shop.orders.show.controller();
  },
  view: function(ctrl) {
    return m('section#orders-form-receipt', [
      m('h3.form-title.relative', 'Items ', [
        m('div.form-title--action',
          Admin.components.shop.orders.show.state.isEditingItems() ? [
            m('a.btn-white.btn--small.icon--left.icon--xsmall.icon-plus-site[href=#].margin-right-xsmall', 'Item'),
            m('a.btn-white.btn--small.icon--left.icon--xsmall.icon-plus-site[href=#].margin-right-xsmall', 'Discount'),
            m('a[href=#].btn-black.btn--small', {
              onclick: function(event) {
                event.preventDefault();
                Admin.components.shop.orders.show.state.isEditingItems(false);
              }
            }, 'Done') ] :
            [m('a[href=#].btn-black.btn--small.icon-pencil-white.icon--center', {
              onclick: function(event) {
                event.preventDefault();
                Admin.components.shop.orders.show.state.isEditingItems(true);
              }
            }, 'Edit')]
        )
      ]),
      m('table.table', [
        m('thead', [
          m('tr', [
            m('th.text-left.padding-horz-xsmall', { colspan: 3 }, 'Title / Variant'),
            m('th.text-right.padding-reset', [
              m('span.padding-right-small', 'Qty / Price'),
            ]),
            Admin.components.shop.orders.show.state.isEditingItems() ?
              m('th.set-10.padding-reset.text-center') : ''
          ])
        ]),
        m('tbody', [
          Admin.models.orders.data.single().items.map(function(item) {
            return m('tr.has-pointer' + (m.route.param('id') === item.id ? '.bg-gray-xxlight' : ''), {
              onclick: function(event) {
                let parent = event.target.parentElement ? event.target.parentElement.nodeName : null;
                if (parent && parent === 'TD' || event.target.nodeName === 'TD') {
                  event.preventDefault();
                  console.log('show product');
                }
              }
            }, [
              m('td.text-center.padding-horz-xsmall', [
                  m('i.icon-zoom-gray')
              ]),
              m('td.text-center.padding-horz-xsmall', [
                ctrl.hasImage(item) ?
                  // if has image
                  m('.img-1-1', {
                    style: {
                      backgroundImage: 'url(' + item.sku.images.cascade + ')'
                    }
                  }) :
                  // else
                  m('.img-placeholder-sq')
              ]),
              m('td.text-left', [
                m('h5.text-black', item.product.title),
                m('p.text-gray', item.sku.name)
              ]),
              m('td.text-right.padding-horz-xsmall', [
                m('h5.text-black', item.quantity),
                m('p.text-gray', accounting.formatMoney(item.sku.price.regular_cents/100))
              ]),

              Admin.components.shop.orders.show.state.isEditingItems() ?
                m('td.text-center.padding-reset.border-gray.border--left.border--bottom', [
                  m('a.btn.icon-trash-red.icon--center[href=#]', 'Delete')
                ]) : ''
            ]);
          })
        ]),
      ]),
      m('div.row.padding-vert-medium.border-gray-light.border--bottom', [
        m('div.row.margin-vert-small', [
          m('span.text-gray.col-pull.small-1-2.text-left', 'Subtotal'),
          m('span.text-gray.col-pull.small-1-2.text-right', accounting.formatMoney(Admin.models.orders.data.single().receipt.amount.subtotal_cents/100))
        ]),
        m('div.row.margin-vert-small', [
          m('span.text-gray.col-pull.small-1-2.text-left', 'Tax'),
          m('span.text-gray.col-pull.small-1-2.text-right', accounting.formatMoney(Admin.models.orders.data.single().receipt.amount.tax_cents/100))
        ]),
        m('div.row.margin-vert-small', [
          m('span.text-gray.col-pull.small-1-2.text-left', 'Shipping'),
          m('span.text-gray.col-pull.small-1-2.text-right', accounting.formatMoney(Admin.models.orders.data.single().receipt.amount.shipping_cents/100))
        ])
      ]),
      m('div.row.margin-vert-medium.text-right', [
        m('strong.head-black.col-pull.small-1-2.text-left', 'Total'),
        m('strong.head-black.col-pull.small-1-2.text-right', accounting.formatMoney(Admin.models.orders.data.single().receipt.amount.total_cents/100))
      ])
    ]);
  }
};
