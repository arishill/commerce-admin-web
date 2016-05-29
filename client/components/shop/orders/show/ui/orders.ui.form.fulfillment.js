'use strict';

Admin.components.shop.orders.show.ui.form.fulfillment = {
  controller: function() {
    return new Admin.components.shop.orders.show.controller();
  },
  view: function(ctrl) {
    let status = ctrl.getFulfillmentStatus(Admin.models.orders.data.single());

    return m('section#orders-form-fulfillment', [
      m('.row.margin-vert-medium', [
        m('div.col.small-1-2.text-left', [
          m('h4.padding-top-xsmall.text-gray', [
            m('span.is-inline.padding-right-small','Status: '),
            m('span.tag-' + status.color + '.tag--fixed.is-inline', status.text),
          ])
        ]),
        m('div.col.small-1-2.text-right', [
          Admin.models.orders.data.single().fulfillment.status === 'delivered' ?
            m('a.btn-black.icon-tracking-white.icon--left[href=#]', 'View Tracking') :
            m('a.btn-black.icon-truck-white.icon--left[href=#]', 'Ship Now')
        ])
      ]),
      m('h3.form-title', 'Shipment'),
      m('.row.margin-vert-medium', [
        m('div.text-gray.border-gray-light.border--all.padding-reset.arrow-bottom-middle', [
          m('.row', [
            m('div.col.small-1-1', [
              m('.row.padding-medium.border-gray-light.border--bottom', [
                m('div.col.small-2-3', [
                  m('h4.text-black.padding-bottom-small', 'Ship to'),
                  m('p.text-gray', m.trust(
                    Admin.models.orders.data.single().customer.name.first + ' ' + Admin.models.orders.data.single().customer.name.last + '<br>' +
                    Admin.models.orders.data.single().customer.shipping.address.line_1 + '<br>' +
                    (Admin.models.orders.data.single().customer.shipping.address.line_2 ? Admin.models.orders.data.single().customer.shipping.address.line_2 + '<br>' : '') +
                    Admin.models.orders.data.single().customer.shipping.address.city + ', ' + Admin.models.orders.data.single().customer.shipping.address.province + ' ' + Admin.models.orders.data.single().customer.shipping.address.postal_code
                  )),
                  m('a.btn-white.btn--small.icon--small.icon--left.icon-profile.absolute.bottom.right.margin-bottom-medium.margin-right-medium', {
                    href: '#'
                  }, 'Customer')
                ]),
                Admin.models.orders.data.single().customer.shipping.delivery.instructions ?
                m('div.col.small-1-3', [
                  m('h4.text-black.padding-bottom-small', 'Instructions'),
                  m('p.text-gray.text--italic', Admin.models.orders.data.single().customer.shipping.delivery.instructions)
                ]) : ''
              ])
            ]),
            m('div.col.small-1-1', [
              m('ul.list-inline.padding-medium', [
                Admin.models.orders.data.single().customer.shipping.delivery.phone ?
                  m('li.icon--left.icon-phone-gray.padding-left-medium', Admin.models.orders.data.single().customer.shipping.delivery.phone) :
                  m('li', 'No delivery contact information given.')
              ])
            ])
          ])
        ])
      ]),
      m('div.row', [
        m('div.embed--medium.margin-bottom-large', {
          config: ctrl.getFulfillmentMap
        })
      ]),
      m('h3.form-title', 'Package'),
      m('.row.margin-vert-medium', [
        m('div.row.padding-bottom-large.padding-top-medium', [
          m('div.col.small-1-3', [
            m('h4.text-black.padding-bottom-small', 'This order is a gift'),
            m('p.text-gray-dark.padding-bottom-medium', 'Pricing information will not be shown on the packing slip'),
          ]),
          m('div.col.small-2-3.gutter-left-medium', [
            m('h4.text-black.padding-bottom-medium', 'Personal Message'),
            m('div.text-gray.border-gray-light.border--all padding-medium.arrow-top-left.text--italic', Admin.models.orders.data.single().options.message || 'No message')
          ]),
          m('div.col.small-1-1.padding-top-medium', [
            m('h5.text-yellow.icon-gift-yellow.icon--medium.icon--left', 'Gift Wrapping Requested')
          ])
        ])
      ]),
      m('h3.form-title', 'Tracking'),
      m('.row.margin-vert-medium', [
      ])
    ]);
  }
};
