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
              m('th.text-left.set-30', 'Date'),
              m('th.text-left.small-3-16', 'Ship to'),
              m('th.text-left.small-3-16', m.trust('Name / <em>Email</em>')),
              m('th.text-right.small-3-16', 'Order Total'),
              m('th.text-center.small-3-16', 'Status'),
              m('th.text-center.set-30.padding-horz-small'),
              m('th.text-center.set-30.padding-horz-small')
            ]),
          ]),
          m('tbody', [
            app.model.orders.list().map(function(item, index) {
              return m.component(orders.row, item, index);
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
    view: function(ctrl, item, index) {
      return m('tr', [
        m('td.text-center', [
          m.component(c.checkbox, { checked: false, name: item.id, index: index})
        ]),
        m('td.text-left', moment(item.date.created).format('MM/DD/YYYY')),
        m('td.text-left', item.customer.shipping.address.city + ', ' + item.customer.shipping.address.province),
        m('td.text-left', m.trust(item.customer.name.first + ' ' + item.customer.name.last + '<br>'), [
          m('em', item.email)
        ]),
        m('td.text-right', [
          m('span', accounting.formatMoney(item.receipt.amount.total_cents), [
            m('i.padding-left-small.icon-gift-gray'),
            m('i.icon-tag-gray')
          ])
        ]),
        m('td.text-center'),
        m('td.text-center.border-gray.border--left.border--bottom.padding-horz-small.btn-block', [
          m('a.btn.icon-pencil-black.icon--center[href=/shop/orders/'+ item.id + ']', {config: m.route}, 'Edit')
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
