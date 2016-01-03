'use strict';

(function(products, c, m) {

  products.container = {
    controller: function() {
      A.products.list();
    },
    view: function() {
      return m('section#shop-products-index', [
        m.component(c.header, {
          title: 'Products',
          icon: 'icon-product-site',
          buttons: {
            has_arrange: true,
            has_add: true
          }
        }),
        m.component(products.table)
      ]);
    }
  };

  products.table = {
    view: function() {
      if (app.model.products.list()) {
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
            app.model.products.list().map(function(item) {
              return m.component(products.row, item);
            })
          ])
        ]);
      }
      else {
        return m('.text-center.text-gray.padding-medium', 'Loading...');
      }
    }
  };

  products.row = {
    view: function(ctrl, item) {
      return m('tr', [
        m('td.text-center.set-20'),
        m('td.text-center', [
          m('.img-placeholder-sq') // <div class="img-1-1" style="background-image: url({{imgix images.thumb 'thumb'}})"></div>
        ]),
        m('td.text-center', [
          m('form', [
            m('input[type=hidden]', { value: '0', name: 'flags[is_active]' }),
            m('input.btn-' + (item.flags.is_active ? 'green' : 'gray') + '.btn--fill.btn--small[type=submit]', { value: item.flags.is_active ? 'Active' : 'Inactive' })
          ])
        ]),
        m('td.text-left', item.title),
        m('td.text-center', [
          m('span.is-block' + (item.flags.is_sale ? 'text--line' : ''), item.price.regular_cents),
          item.flags.is_sale ? m('span.is-block.text-yellow', item.price.sale_cents) : m('span.is-hidden.is-transparent-mid.text-yellow', item.price.sale_cents)
        ]),
        m('td.text-center', [
          m('form') // sale toggle
        ]),
        m('td.text-center', [
          m('span', 0) // product stock
        ]),
        m('td.text-center.border-gray.border--left.border--bottom.padding-horz-small.btn-block', [
          m('a.btn.icon-pencil-black.icon--center[href=#]', 'Edit')
        ]),
        m('td.text-center.border-gray.border--left.border--bottom.padding-horz-small.btn-block', [
          m('form', [
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

})(app.component.shop.products.index, app.component, m);
