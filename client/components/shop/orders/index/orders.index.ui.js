'use strict';

Admin.components.shop.orders.index.ui.container = {
  controller: function() {
    return new Admin.components.shop.orders.index.controller({
      init: true
    });
  },
  view: function(ctrl) {
    return m('section#shop-orders-index', [
      m.component(Admin.components.shared.header.ui.container, {
        title: 'Orders',
        icon: 'icon-order-site',
        buttons: {
          has_add: true
        },
        search: ctrl.search
      }),
      m.component(Admin.components.shop.orders.index.ui.table)
    ]);
  }
};

Admin.components.shop.orders.index.ui.table = {
  controller: function() {
    return new Admin.components.shop.orders.index.controller();
  },
  view: function(ctrl) {
    if (ctrl.orders()) {
      return m('table.table', [
        m('thead', [
          m('tr', [
            m('th.text-center.set-20'),
            m('th.text-left.set-30', 'Date'),
            m('th.text-center.set-75', 'Shipment'),
            m('th.text-center.set-75', 'Payment'),
            m('th.text-left.small-3-16', 'Ship to'),
            m('th.text-left', m.trust('Name / <em>Email</em>')),
            m('th.text-right', 'Order Total'),
            m('th.text-center.set-30.padding-horz-small'),
            m('th.text-center.set-30.padding-horz-small')
          ]),
        ]),
        m('tbody', [
          ctrl.orders().map(function(item, index) {
            return m.component(Admin.components.shop.orders.index.ui.row, item, index);
          })
        ])
      ]);
    }
    else {
      return m('.text-center.text-gray.padding-medium', 'Loading...');
    }
  }
};

Admin.components.shop.orders.index.ui.row = {
  controller: function() {
    return new Admin.components.shop.orders.index.controller();
  },
  view: function(ctrl, item, index) {
    return m('tr', [
      m('td.text-center', [
        m.component(Admin.components.shared.checkbox.ui.container, { checked: false, name: item.id, index: index})
      ]),
      m('td.text-left', moment(item.date.created).format('MM/DD/YYYY')),
      m('td.text-center', [
        m('.contain', [
          m('span.text-' + ctrl.getShipmentColor(item), item.shipments[0].status)
        ])
      ]),
      m('td.text-center', [
        m('.contain', [
          m('span.text-' + ctrl.getPaymentColor(item), item.payment.status)
        ])
      ]),
      m('td.text-left', item.customer.shipping.address.city + ', ' + item.customer.shipping.address.province),
      m('td.text-left', m.trust(item.customer.name.first + ' ' + item.customer.name.last + '<br>'), [
        m('em.is-block', item.customer.email)
      ]),
      m('td.text-right', [
        m('span', accounting.formatMoney(item.receipt.amount.total_cents), [
          item.options.gift_wrapping ? m('i.padding-left-small.icon-gift-gray') : '',
          item.receipt.discount_code ? m('i.icon-tag-gray') : ''
        ])
      ]),
      m('td.text-center.border-gray.border--left.border--bottom.padding-horz-small.btn-block', [
        m('a.btn.icon-pencil-black.icon--center', {
          href: '/shop/orders/' + item.id,
          config: m.route
        }, 'Edit')
      ]),
      m('td.text-center.border-gray.border--left.border--bottom.padding-horz-small.btn-block', [
        m('form', {
          onsubmit: function() {} // ctrl.deleteOrder.bind(event, item.id)
        }, [
          m('div.bg-white.box-shadow.arrow-right-middle.padding-medium[data-confirm]' + (Admin.components.shop.products.state.isDeletingId() === item.id ? '.is-active' : '.is-hidden'), [
            m('h5.is-inline.margin-right-medium', 'Are you sure?'),
            m('a.btn-gray.btn--small.margin-right-xsmall', {
              onclick: function() {} // ctrl.deleteCancel
            }, 'Cancel'),
            m('button.btn-red.btn--small[type=submit]', 'Delete')
          ]),
          m('button.btn.icon-trash-red.icon--center' + (Admin.components.shop.products.state.isDeleteProcessing() === item.id ? '.is-loading' : ''), {
            onclick: function() {} // ctrl.deleteConfirm.bind(event, item.id)
          }, { value: 'Delete '})
        ])
      ])
    ]);
  }
};
