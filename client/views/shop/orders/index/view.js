'use strict';

(function(orders, c, m) {

  orders.container = {
    controller: function() {
      A.orders.list();
    },
    view: function() {
      return m('section#shop-orders-index', [
        m.component(c.header, {
          title: 'Orders',
          icon: 'icon-order-site',
          buttons: {
            has_add: true
          }
        }),
        m.component(orders.table)
      ]);
    }
  };

  orders.table = {
    view: function() {
      if (app.model.orders.list()) {
        return m('table.table', [
          m('thead', [
            m('tr', [
              m('th.text-center.set-20'),
              m('th.text-center.set-20'),
              m('th.text-center.set-30', 'Date'),
              m('th.text-left.small-3-16[colspan=2]', 'Ship to'),
              m('th.text-left.small-3-16', m.trust('Name / <em>Email</em>')),
              m('th.text-left.small-2-16', 'Order Total'),
              m('th.text-center.small-3-16', 'Status'),
              m('th.text-center.set-30.padding-horz-small'),
              m('th.text-center.set-30.padding-horz-small')
            ]),
          ]),
          m('tbody', [
            app.model.orders.list().map(function(item) {
              return m.component(orders.row, item);
            })
          ])
        ]);
      }
      else {
        return m('.text-center.text-gray.padding-medium', 'Loading...');
      }
    }
  };

  orders.row = {
    view: function(ctrl, item) {
      return m('tr', [
        m('td.text-center.set-20'),
        m('td.text-center.set-20', [
          m('a[href=#]', [
            m('i.icon-double-arrow-down-gray.icon--small')
          ])
        ]),
        m('td.text-center', item.date.created),
        m('td.text-center', 'Flag'),
        m('td.text-left', 'Paris, France'),
        m('td.text-left', m.trust(item.customer.name.first + ' ' + item.customer.name.last + '<br>'), [
          m('em', item.email)
        ]),
        m('td.text-right', [
          m('span', item.receipt.amount.total_cents, [
            m('i.padding-left-small.icon-gift-gray'),
            m('i.icon-tag-gray')
          ])
        ]),
        m('td.text-center'),
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

})(app.component.shop.orders.index, app.component, m);
