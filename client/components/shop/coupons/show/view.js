'use strict';

(function(coupon, c, m) {

  coupon.container = {
    controller: function() {
      app.model.coupons.doc(null);
      A.coupons.retrieve(m.route.param('id'));
    },
    view: function() {
      let view = [
        m('.text-center.text-gray.padding-medium', 'Loading...')
      ];

      if (app.model.coupons.doc()) {
        view = [
          m.component(coupon.header, app.model.coupons.doc()),
          m.component(coupon.edit.container, app.model.coupons.doc())
        ];
      }

      return m('section#shop-coupons-show', view);
    }
  };

  coupon.header = {
    view: function(ctrl, doc) {
      return m('header.row.padding-vert-medium.padding-right-large.padding-left-small.border-gray-light.border--bottom', [
        m('div.col.small-1-2.text-left.text-middle', [
          m('a[href=/shop/orders].col-pull.icon--center.icon--large.icon-chevron-left-gray.btn.margin-right-xsmall', { config: m.route }, 'Back'),
          m('div.border-gray-light.border--left', [
            m('p.contain-50 margin-horz-small', [
              m('i.icon-coupon-gray icon--xlarge')
            ])
          ]),
          m('h1.is-inline', [
            m('strong.is-block.head-black.text--bold', m.trust(doc.title)),
            m('span.text-gray-dark', 'Applies to ')
          ])
        ]),
        m('div.col.small-1-2.text-right', [
          m('p.padding-bottom-xsmall', [
            m('form', [
              m('input[type=hidden]', { value: '0', name: 'flags[is_active]' }),
              m('input.btn-' + (doc.flags.is_active ? 'green' : 'gray') + '.btn--small[type=submit]', { value: doc.flags.is_active ? 'Active' : 'Inactive' })
            ])
          ])
        ])
      ]);
    }
  };

  coupon.edit = {
    container: {
      view: function(ctrl, doc) {
        return m('form.form.padding-horz-xlarge.margin-horz-medium.padding-vert-xlarge', [
          m('div.contain.padding-bottom-xlarge', [
            m.component(coupon.edit.details, doc),
            m.component(coupon.edit.applies, doc),
            m.component(coupon.edit.schedule, doc),
            m.component(coupon.edit.notify, doc),
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

  coupon.helpers = {};

})(app.component.shop.coupons.show, app.component, m);
