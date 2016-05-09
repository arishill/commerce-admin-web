'use strict';

(function(order, c, m) {

  order.edit.payment = {
    view: function(ctrl, doc) {
      return m('section.box-shadow.row.margin-top-xlarge', [
        m('h3.form-title', 'Payment', [
          // m('a.form-title---icon[href=#]', 'Help with this section')
        ]),
        m('.padding-large', [
          m('div.row.padding-bottom-large.padding-top-medium.border-gray-light.border--bottom', [
            m('div.col.small-1-3', [
              m('h4.text-black.padding-bottom-small', 'Payment Details'),
              m('p.text-gray-dark.padding-bottom-medium', 'Paid with ' + order.helpers.cardType(doc.payment.transactions[0].method.card.type)),
              m('h5.text-black.icon-' + doc.payment.transactions[0].method.card.type + '.icon--large.icon--left', m.trust('<span>**** **** ****</span> ' + doc.payment.transactions[0].method.card.last_4))
            ]),
            m('div.col.small-2-3.gutter-left-medium', [
              m('div.text-gray.border-gray-light.border--all.padding-reset.arrow-left-top', [
                m('div.padding-medium.border-gray-light.border--bottom', [
                  m('h4.text-black.padding-bottom-small', 'Billing Info'),
                  m('p',
                    m.trust(
                      doc.customer.name.first + ' ' + doc.customer.name.last + '<br>' +
                      doc.customer.shipping.address.line_1 + '<br>' +
                      (doc.customer.shipping.address.line_2 ? doc.customer.shipping.address.line_2 + '<br>' : '') +
                      doc.customer.shipping.address.city + ', ' + doc.customer.shipping.address.province + ' ' + doc.customer.shipping.address.postal_code + ', ' + doc.customer.shipping.address.country_code
                    )
                  ),
                ]),
                m('ul.list-inline.padding-medium', [
                  m('li.icon--left.icon-mail-gray.padding-right-medium', doc.customer.email),
                  m('li.icon--left.icon-phone-gray.padding-left-medium', doc.customer.phone),
                ])
              ])
            ])
          ]),
          m('div.row.padding-vert-large', [
            m('h4.text-black.padding-bottom-small', 'Transaction History'),
            m('table.table', [
              m('thead', [
                m('tr', [
                  m('th.text-left.small-2-8', 'Date'),
                  m('th.text-left.small-3-8', 'Method'),
                  m('th.text-right.small-1-8', 'Amount'),
                  m('th.text-center.small-1-8', 'Currency'),
                  m('th.text-right.small-1-8', 'Status'),
                ])
              ]),
              m('tbody', [
                doc.payment.transactions.map(function(item) {
                  return m('tr', [
                    m('td.text-left', moment(item.date).format('MM/DD/YY h:MM a')),
                    m('td.text-left', [
                      m('span.icon--left icon-' + item.method.card.type, 'Credit Card **** **** **** ' + item.method.card.last_4),
                    ]),
                    m('td.text-right', accounting.formatMoney(item.amount_cents/100)),
                    m('td.text-center', item.currency),
                    m('td.text-right', [
                      m('span.icon--right' + order.helpers.transactionStatus(item.status), item.status),
                    ])
                  ]);
                })
              ])
            ])
          ]),
        ]),
        m('div.border-gray-light.border--top', [
          m('.padding-medium.row', [
            m('div.col.small-1-2.text-left', [
              m('h4', [
                m('strong.head-black.is-inline.padding-right-large', 'Payment Status:'),
                m('span.head-green.icon--right.icon-check-green.is-inline', doc.payment.status),
              ])
            ]),
            m('div.col.small-1-2.text-right', [
              m('a.btn-white.btn--small.icon-return-black.icon--left[href=#]', 'Refund Order')
            ])
          ])
        ])
      ]);
    }
  };

})(app.component.shop.orders.show, app.component, m);
