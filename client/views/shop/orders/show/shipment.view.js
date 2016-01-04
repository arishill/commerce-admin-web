'use strict';

(function(order, c, m) {

  order.edit.shipment = {
    view: function(ctrl, doc) {
      return m('section.row.margin-top-xlarge', [
        m('h3.form-title', 'Shipment', [
          m('a[href=#].form-title---icon', 'Help with this section')
        ]),
        m('div.row.padding-bottom-large.padding-top-medium.border-gray-light.border--bottom', [
          m('div.col.small-1-3', [
            m('h4.text-black.padding-bottom-small', 'This order is a gift'),
            m('p.text-gray-dark.padding-bottom-medium', 'Pricing information will not be shown on the packing slip'),
            m('h5.text-black.icon-gift-site.icon--large.icon--left', 'Gift Wrapping Requested')
          ]),
          m('div.col.small-2-3.gutter-left-medium', [
            m('h4.text-black.padding-bottom-medium', 'Personal Message'),
            m('div.text-gray.border-gray-light.border--all padding-medium.arrow-top-left.text--italic', doc.options.message || 'No message')
          ])
        ]),
        m('div.row padding-vert-large', [
          m('div.col.small-1-3', [
            m('div.embed--medium')
          ]),
          m('div.col.small-1-3.gutter-left-large', [
            m('h4.text-black.padding-bottom-small', 'Shipping Address'),
            m('p.text-gray', m.trust(
              doc.customer.shipping.address.line_1 + '<br>' +
              (doc.customer.shipping.address.line_2 ? doc.customer.shipping.address.line_2 + '<br>' : '') +
              doc.customer.shipping.address.city + ', ' + doc.customer.shipping.address.province + ' ' + doc.customer.shipping.address.postal_code
            ))
          ]),
          m('div.col.small-1-3.gutter-left-medium', [
            m('h4.text-black.padding-bottom-small', 'Delivery Contact'),
            m('p.text-gray.margin-bottom-medium', m.trust(
                doc.customer.name.first + ' ' + doc.customer.name.last + '<br>' +
                doc.customer.phone
              )
            ),
            m('h4.text-black', 'Delivery Instructions'),
            m('p.text-gray', 'None given.')
          ])
        ]),
        m('div.row.padding-vert-medium.border-gray-light.border--bottom.border--top', [
          m('div.col.small-1-2.text-left', [
            m('h4', [
              m('strong.head-black.is-inline.padding-right-large', 'Shipment Status:'),
              m('span.head-green.is-inline', 'Ready to ship')
            ])
          ]),
          m('div.col.small-1-2.text-right', [
            m('a.btn-black.icon-icon--left[href=#]', 'Ship Now')
          ])
        ])
      ]);
    }
  };

})(app.component.shop.orders.show, app.component, m);
