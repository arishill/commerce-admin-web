'use strict';

(function(order, c, m) {

  order.container = {
    controller: function() {
      app.model.orders.doc(null);
      A.orders.retrieve(m.route.param('id'));
    },
    view: function() {
      let view = [
        m('.text-center.text-gray.padding-medium', 'Loading...')
      ];

      if (app.model.orders.doc()) {
        view = [
          m.component(order.header, app.model.orders.doc()),
          m.component(order.edit.container, app.model.orders.doc())
        ];
      }

      return m('section#shop-orders-show', view);
    }
  };

  order.header = {
    view: function(ctrl, doc) {
      return m('header.row.padding-vert-medium.padding-right-large.padding-left-small.border-gray-light.border--bottom', [
        m('div.col.small-1-2.text-left.text-middle', [
          m('a[href=/shop/orders].col-pull.icon--center.icon--large.icon-chevron-left-gray.btn.margin-right-xsmall', { config: m.route }, 'Back'),
          m('div.border-gray-light.border--left', [
            m('p.contain-50 margin-horz-medium', [
              m('i.icon-order-gray icon--xmedium')
            ])
          ]),
          m('h1.is-inline', [
            m('strong.is-block.head-black.text--bold', m.trust('Order ' + doc.id.split('-')[0] + ' &mdash; ' + moment(doc.date.created).format('MM/DD/YYYY'))),
            m('span.text-gray-dark', 'by ' + doc.customer.name.first + ' ' + doc.customer.name.last + ' from ' + doc.customer.billing.address.city + ', ' + doc.customer.billing.address.province)
          ])
        ]),
        m('div.col small-1-2 text-right', [
          m('p.padding-bottom-xsmall', 'status')
        ])
      ]);
    }
  };

  order.edit = {
    container: {
      view: function(ctrl, doc) {
        return m('form.form.padding-horz-xlarge.margin-horz-medium.padding-vert-xlarge', [
          m('div.contain.padding-bottom-xlarge', [
            m.component(order.edit.details, doc),
            m.component(order.edit.shipment, doc),
            m.component(order.edit.payment, doc),
            m('nav.form-action', [
              m('div.row.fill-width.fill-height.text-middle', [
                m('div.col.small-1-2.text-left', [
                  m('a.icon--center icon-trash-red btn margin-left-small[href=#]', 'Delete')
                ]),
                m('div.col.small-1-2.text-right', [
                  m('button.btn-green.margin-right-medium[type=submit]', 'Save')
                ])
              ])
            ])
          ])
        ]);
      }
    }
  };

  order.helpers = {
    cardType: function(card) {
      switch(card) {
        case 'amex':
          return 'American Express';
        case 'mc':
          return 'MasterCard';
        case 'visa':
          return 'Visa Card';
        default:
          return 'Credit Card';
      }
    },
    transactionStatus: function(status) {
      switch(status) {
        case 'approved':
          return '.icon-check-green.text-green';
        case 'declined':
          return '.icon-x-red.text-red';
        case 'pending':
          return '.icon-clock-yellow.text-yellow';
        default:
          return '';
      }
    }
  };

})(app.component.shop.orders.show, app.component, m);
