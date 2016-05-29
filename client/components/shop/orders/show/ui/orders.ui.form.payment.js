'use strict';

Admin.components.shop.orders.show.ui.form.payment = {
  controller: function() {
    return new Admin.components.shop.orders.show.controller();
  },
  view: function(ctrl) {
    let status = ctrl.getPaymentStatus(Admin.models.orders.data.single());
    return m('section#orders-form-payment', [
      m('.row.margin-vert-medium', [
        m('div.col.small-1-2.text-left', [
          m('h4.padding-top-xsmall.text-gray', [
            m('span.is-inline.padding-right-small','Status: '),
            m('span.tag-' + status.color + '.tag--fixed.is-inline', status.text),
          ])
        ]),
        m('div.col.small-1-2.text-right', [
          m('a.btn-black.icon-return-white.icon--left[href=#]', 'Refund Order')
        ])
      ]),
      m('h3.form-title', 'Details'),
      m('.margin-vert-medium', [
        m('p.text-gray-dark.padding-bottom-medium', 'Paid with ' + ctrl.cardType(Admin.models.orders.data.single().payment.transactions[0].method.card.type), [
          m('span.text-black.margin-left-medium.icon-' + Admin.models.orders.data.single().payment.transactions[0].method.card.type + '.icon--large.icon--left', m.trust('<span>**** **** ****</span> ' + Admin.models.orders.data.single().payment.transactions[0].method.card.last_4))
        ]),
        m('.row', [
          m('div.text-gray.border-gray-light.border--all.padding-reset.arrow-top-middle', [
            m('div.padding-medium.border-gray-light.border--bottom', [
              m('h4.text-black.padding-bottom-small', 'Billing Info'),
              m('p',
                m.trust(
                  Admin.models.orders.data.single().customer.name.first + ' ' + Admin.models.orders.data.single().customer.name.last + '<br>' +
                  Admin.models.orders.data.single().customer.shipping.address.line_1 + '<br>' +
                  (Admin.models.orders.data.single().customer.shipping.address.line_2 ? Admin.models.orders.data.single().customer.shipping.address.line_2 + '<br>' : '') +
                  Admin.models.orders.data.single().customer.shipping.address.city + ', ' + Admin.models.orders.data.single().customer.shipping.address.province + ' ' + Admin.models.orders.data.single().customer.shipping.address.postal_code + ', ' + Admin.models.orders.data.single().customer.shipping.address.country_code
                )
              ),
              m('a.btn-white.btn--small.icon--small.icon--left.icon-profile.absolute.bottom.right.margin-bottom-medium.margin-right-medium', {
                href: '#'
              }, 'Customer')
            ]),
            m('ul.list-inline.padding-medium', [
              m('li.icon--left.icon-mail-gray.padding-right-medium', Admin.models.orders.data.single().customer.email),
              m('li.icon--left.icon-phone-gray.padding-left-medium', Admin.models.orders.data.single().customer.phone),
            ])
          ])
        ])
      ]),
      m('h3.form-title', 'Transaction History'),
      m('.row.margin-vert-medium', [
        m('table.table', [
          m('thead', [
            m('tr', [
              m('th.text-left.small-2-8', 'Date'),
              m('th.text-left.small-3-8', 'Method'),
              m('th.text-right.small-1-8', 'Amount'),
              m('th.text-right.small-1-8', 'Status'),
            ])
          ]),
          m('tbody', [
            Admin.models.orders.data.single().payment.transactions.map(function(item) {
              return m('tr', [
                m('td.text-left', moment(item.date).format('MM/DD/YY'), [
                  m('p.text-gray.text--small', moment(item.date).format('h:MM a'))
                ]),
                m('td.text-left', [
                  m('span.icon--left.icon-' + item.method.card.type, 'Credit'),
                  m('p.text-gray.text--small', '**** ' + item.method.card.last_4)
                ]),
                m('td.text-right', accounting.formatMoney(item.amount_cents/100), [
                  m('p.text-gray.text-right.text--small.text--upper', item.currency)
                ]),
                m('td.text-right', [
                  m('div', [
                    m('span.tag-' + ctrl.getPaymentStatus(item).color, {
                    }, ctrl.getPaymentStatus(item).text)
                  ])
                ])
              ]);
            })
          ])
        ])
      ]),
    ]);
  }
};
