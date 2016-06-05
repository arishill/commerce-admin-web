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
          has_add: false
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
            m('th.text-center', 'Order No.'),
            m('th.text-left.set-30', 'Date'),
            m('th.text-left.small-3-16', 'Ship to'),
            m('th.text-left', 'Name'),
            m('th.text-right', 'Order Total'),
            m('th.text-center.set-75', 'Payment'),
            m('th.text-center.set-75', 'Fulfillment'),
            m('th.set-20', 'Actions')
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
    return m('tr.has-pointer' + (m.route.param('id') === item.id ? '.is-selected' : ''), {
      onclick: function(event) {
        let parent = event.target.parentElement ? event.target.parentElement.nodeName : null;
        if (parent && parent === 'TD' || event.target.nodeName === 'TD') {
          event.preventDefault();
          m.route('/shop/orders/' + item.id);
        }
      }
    }, [
      m('td.text-center', [
        m.component(Admin.components.shared.checkbox.ui.container, { checked: false, name: item.id, index: index})
      ]),
      m('td.text-left.text-center', item.order_number),
      m('td.text-left', moment(item.date.created).format('MM/DD/YYYY')),
      m('td.text-left', item.customer.shipping.address.city + ', ' + item.customer.shipping.address.province),
      m('td.text-left', [
        m('span', item.customer.name.first + ' ' + item.customer.name.last)
      ]),
      m('td.text-right', [
        m('span', accounting.formatMoney(item.receipt.amount.total_cents/100), [
          item.options.gift_wrapping ? m('i.padding-left-small.icon-gift-gray') : '',
          item.receipt.discount_code ? m('i.icon-tag-gray') : ''
        ])
      ]),
      m('td.text-center', [
        m('.contain', [
          m('div', [
            m('span.tag-' + ctrl.getPaymentStatus(item).color, {
              style: {
                minWidth: '80px'
              }
            }, ctrl.getPaymentStatus(item).text)
          ])
        ])
      ]),
      m('td.text-center', [
        m('.contain', [
          m('div', [
            m('span.tag-' + ctrl.getFulfillmentStatus(item).color, {
              style: {
                minWidth: '80px'
              }
            }, ctrl.getFulfillmentStatus(item).text)
          ])
        ])
      ]),
      m('td.text-center', [
        m.component(Admin.components.shared.dropdown.ui.container, {
          label: '',
          width: 'medium',
          icon_only: true,
          color: 'white',
          input: true,
          selectedVal: m.prop(null),
          items: [
            {
              name: 'edit',
              label: 'Edit Order'
            },
            {
              name: 'ship',
              label: 'Print & Ship'
            },
            {
              name: 'refund',
              label: 'Refund Order'
            },
            {
              name: 'email',
              label: 'Email Customer'
            }
          ],
          onselect: function(selected) {

          }
        })
      ])
    ]);
  }
};
