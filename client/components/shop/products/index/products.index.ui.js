'use strict';

Admin.components.shop.products.index.ui.container = {
  controller: function() {
    return new Admin.components.shop.products.index.controller({
      init: true
    });
  },
  view: function() {
    return m('section#shop-products-index', [
      m.component(Admin.components.shared.header.ui.container, {
        title: 'Products',
        icon: 'icon-product-site',
        buttons: {
          has_arrange: true,
          has_add: true
        }
      }),
      m.component(Admin.components.shop.products.index.ui.table)
    ]);
  }
};

Admin.components.shop.products.index.ui.table = {
  view: function() {
    if (Admin.models.products.data.all()) {
      return m('table.table', [
        m('thead', [
          m('tr', [
            m('th.text-center.set-20'),
            m('th.text-center.small-1-16', 'Thumb'),
            m('th.text-center.small-1-16', 'Status'),
            m('th.text-left', 'Title'),
            m('th.text-center', 'Price'),
            m('th.text-center', 'On Sale'),
            m('th.text-center', 'Stock'),
            m('th.text-center.set-30.padding-horz-small'),
            m('th.text-center.set-30.padding-horz-small')
          ]),
        ]),
        m('tbody', [
          Admin.models.products.data.all().map(function(item) {
            return m.component(Admin.components.shop.products.index.ui.row, item);
          })
        ])
      ]);
    }
    else {
      return m('.text-center.text-gray.padding-medium', 'Loading...');
    }
  }
};

Admin.components.shop.products.index.ui.row = {
  controller: function() {
    return new Admin.components.shop.products.index.controller();
  },
  view: function(ctrl, item) {
    return m('tr', [
      m('td.text-center.set-20'),
      m('td.text-center', [
        ctrl.hasImage(item) ?
          // if has image
          m('.img-1-1', {
            style: {
              backgroundImage: 'url(' + item.skus[0].images.cascade + ')'
            }
          }) :
          // else
          m('.img-placeholder-sq')
      ]),
      m('td.text-center', [
        m('form', [
          m('input[type=hidden]', { value: '0', name: 'flags[is_active]' }),
          m('input.btn-' + (item.flags.is_active ? 'green' : 'gray') + '.btn--fill.btn--small[type=submit]', { value: item.flags.is_active ? 'Active' : 'Inactive' })
        ])
      ]),
      m('td.text-left', item.title),
      m('td.text-center', [
        m('span.is-block' + (item.flags.is_sale ? '.text--line' : ''), accounting.formatMoney(item.price.regular_cents/100)),
        item.flags.is_sale ? m('span.is-block.text-yellow', accounting.formatMoney(item.price.sale_cents/100)) : m('span.is-hidden.is-transparent-mid.text-yellow', item.price.sale_cents)
      ]),
      m('td.text-center', [
        m('form') // sale toggle
      ]),
      m('td.text-center', [
        m('span', item.skus[0].stock)
      ]),
      m('td.text-center.border-gray.border--left.border--bottom.padding-horz-small.btn-block', [
        m('a.btn.icon-pencil-black.icon--center', {
          href: '/shop/products/' + item.id,
          config: m.route
        }, 'Edit')
      ]),
      m('td.text-center.border-gray.border--left.border--bottom.padding-horz-small.btn-block', [
        m('form', {
          onsubmit: ctrl.deleteProduct
        }, [
          m('div.bg-white.box-shadow.arrow-right-middle.padding-small.is-hidden[data-confirm]', [
            m('h5.is-inline.margin-right-small', 'Are you sure?'),
            m('a[href=#][data-cancel]btn-gray.btn--small.margin-right-xsmall', 'Cancel'),
            m('a[href=#][data-ok].btn-red.btn--small', 'Delete')
          ]),
          m('input.btn.icon-trash-red.icon--center[type=submit]', { value: 'Delete '})
        ])
      ])
    ]);
  }
};
