'use strict';

(function(coupon, c, m) {

  coupon.edit.details = {
    controller: function() {
      let self = this;

      self.markdown_type = m.prop({
        name: 'percentage',
        label: 'Percentage'
      });
      self.coupon_ticket = m.prop({
        name: 'code',
        label: 'Code'
      });
    },
    view: function(ctrl, doc) {
      return m('section.box-shadow.row', [
        m('h3.form-title', 'Details', [
          // m('a[href=#].form-title---icon', 'Help with this section')
        ]),
        m('.padding-large', [
          m('.row', [
            m('fieldset.margin-top-reset', [
              m('label.text-gray.is-block.margin-bottom-small', 'Title'),
              m('input[type=text].fill-width', { value: doc.title })
            ])
          ]),
          m('.row', [
            m('.col.small-1-2.gutter-right-medium', [
              m('fieldset.col.small-3-5', [
                m('label.text-gray.is-block.margin-bottom-small', 'Markdown Type'),
                m.component(c.dropdown, {
                  label: 'Select Type',
                  input: true,
                  selectedVal: ctrl.markdown_type,
                  name: 'coupon_type',
                  items: [
                    {
                      name: 'percentage',
                      label: 'Percentage'
                    },
                    {
                      name: 'amount',
                      label: 'Specific Amount'
                    },
                    {
                      name: 'free',
                      label: 'Free'
                    }
                  ]
                })
              ]),
              m('fieldset.col.small-2-5.gutter-left-medium', [
                m('label.text-gray.is-block.margin-bottom-small', coupon.helpers.discountLabel(ctrl.markdown_type())),
                m('input[type=text].fill-width', { value: coupon.helpers.discountValue(ctrl.markdown_type()) })
              ])
            ]),
            m('.col.small-1-2.gutter-left-medium', [
              m('fieldset', [
                m('label.text-gray.is-block.margin-bottom-small', 'Coupon Ticket'),
                m.component(c.dropdown, {
                  label: 'Select Code Type',
                  input: true,
                  selectedVal: ctrl.coupon_ticket,
                  name: 'coupon_type',
                  items: [
                    {
                      name: 'code',
                      label: 'Custom Code',
                    },
                    {
                      name: 'generated',
                      label: 'Generated'
                    }
                  ]
                })
              ])
            ])
          ])
        ])
      ]);
    }
  };

  coupon.helpers.discountLabel = function(discount) {
    switch (discount.name) {
      case 'amount':
        return 'Amount Off';
      case 'percentage':
        return 'Percent Off';
      case 'free':
        return 'Discount';
    }
  };

  coupon.helpers.discountValue = function(discount) {
    switch (discount.name) {
      case 'amount':
        return accounting.formatMoney(app.model.coupons.doc().discount.amount_cents/100);
      case 'percentage':
        return ((app.model.coupons.doc().discount.percentage || 0) * 100) + '%';
      case 'free':
        return 'FREE';
    }
  };


})(app.component.shop.coupons.show, app.component, m);
