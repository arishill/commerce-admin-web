'use strict';

(function(order, c, m) {

  order.edit.payment = {
    view: function(ctrl, doc) {
      return m('section.row.margin-top-xlarge', [
        m('h3.form-title', 'Payment', [
          m('a.form-title---icon[href=#]', 'Help with this section')
        ]),
        m('div.row.padding-bottom-large.padding-top-medium.border-gray-light.border--bottom', [
          m('div.col.small-1-3', [
            m('h4.text-black.padding-bottom-small', 'Payment Details'),
            m('p.text-gray-dark.padding-bottom-medium', 'Paid with American Express'),
            m('h5.text-black.icon-amex.icon--large.icon--left', m.trust( + ' <br> <span>**** **** ****</span> ' + doc.payment.transactions[0].card))
          ]),
          m('div.col.small-2-3.gutter-left-medium', [
            m('div.text-gray.border-gray-light.border--all.padding-reset.arrow-left-top', [
              m('div.padding-medium.border-gray-light.border--bottom', [
                m('h4.text-black.padding-bottom-small', 'Billing Info'),
                m('p',
                  m.trust('Scott Robertson<br> 1715 DeMarietta Ave Apt 4<br>San Jose, CA 95126, United States')
                ),
              ]),
              m('ul.list-inline.padding-medium', [
                m('li.icon--left.icon-mail-gray.padding-right-medium', 'scottusrobus@gmail.com'),
                m('li.icon--left.icon-phone-gray.padding-left-medium', '(570) 856-4235'),
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
              m('tr', [
                m('td.text-left', '02/05/2015 3:50pm'),
                m('td.text-left', [
                  m('span.icon--left icon-discover', 'Credit Card **** **** **** 3129'),
                ]),
                m('td.text-right', '$65.00'),
                m('td.text-center', 'USD'),
                m('td.text-right', [
                  m('span.icon--right icon-check-green text-green', 'Success'),
                ])
              ])
            ])
          ])
        ]),
        m('div.row.padding-vert-medium.border-gray-light.border--bottom.border--top', [
          m('div.col.small-1-2.text-left', [
            m('h4', [
              m('strong.head-black.is-inline.padding-right-large', 'Payment Status:'),
              m('span.head-green.icon--right.icon-check-green.is-inline', 'Success'),
            ])
          ]),
          m('div.col.small-1-2.text-right', [
            m('a.btn-black.icon-return-white.icon--left[href=#]', 'Refund Order')
          ])
        ])
      ]);
    }
  };

})(app.component.shop.orders.show, app.component, m);
