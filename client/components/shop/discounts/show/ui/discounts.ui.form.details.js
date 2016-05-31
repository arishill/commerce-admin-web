'use strict';

Admin.components.shop.discounts.show.ui.form.details = {
  controller: function() {
    return new Admin.components.shop.discounts.show.controller();
  },
  view: function(ctrl) {
    return m('section#discounts-form-details', [
      m('h3.form-title', [
        m('span', 'Details')
      ]),
      m('fieldset', [
        m('label.form-label', { for: 'text-title' }, 'Title'),
        m('input#text-title.fill-width', {
          type: 'text',
          value: Admin.models.discounts.data.form().title(),
          onkeydown: m.withAttr('value', Admin.models.discounts.data.form().title),
          onkeyup: m.withAttr('value', Admin.models.discounts.data.form().title)
        })
        //error
      ]),
      m('fieldset', [
        m('label.text-gray.is-block.margin-bottom-small', 'Discount Type'),
        m.component(Admin.components.shared.dropdown.ui.container, {
          label: 'Select Discount Type',
          input: true,
          // color: 'white',
          selectedVal: Admin.models.discounts.data.form().type() ? m.prop({
            name: Admin.models.discounts.data.form().type(),
            label: Admin.models.discounts.data.form().type() === 'sale' ? 'Bulk Sale' : 'Coupon'
          }) : m.prop(null),
          name: 'coupon_type',
          items: [
            {
              name: 'coupon',
              label: 'Coupon'
            },
            {
              name: 'sale',
              label: 'Bulk Sale'
            }
          ],
          onselect: function(selected) {
            Admin.models.discounts.data.form().type(selected.name);
          }
        })
      ]),
      Admin.models.discounts.data.form().type() === 'coupon' ?
        m.component(Admin.components.shop.discounts.show.ui.form.coupon) : '',
      Admin.models.discounts.data.form().type() === 'sale' ?
        m.component(Admin.components.shop.discounts.show.ui.form.sale) : ''
    ]);
  }
};

Admin.components.shop.discounts.show.ui.form.sale = {
  controller: function() {
    return new Admin.components.shop.discounts.show.controller();
  },
  view: function() {
    return m('div', [
      m.component(Admin.components.shop.discounts.show.ui.form.markdown)
    ]);
  }
};

Admin.components.shop.discounts.show.ui.form.coupon = {
  controller: function() {
    return new Admin.components.shop.discounts.show.controller();
  },
  view: function() {
    return m('div', [
      m.component(Admin.components.shop.discounts.show.ui.form.markdown),
      m.component(Admin.components.shop.discounts.show.ui.form.ticket)
    ]);
  }
};

Admin.components.shop.discounts.show.ui.form.ticket = {
  controller: function() {
    return new Admin.components.shop.discounts.show.controller();
  },
  view: function() {
    return  m('fieldset', [
      m('label.text-gray.is-block.margin-bottom-small', 'Coupon Ticket'),
      m.component(Admin.components.shared.dropdown.ui.container, {
        label: 'Select Code Type',
        input: true,
        // color: 'white',
        selectedVal: Admin.models.discounts.data.form().ticket() ? m.prop({
          name: Admin.models.discounts.data.form().ticket().type,
          label: Admin.models.discounts.data.form().ticket().type === 'code' ? 'Custom Code' : 'Generated Codes'
        }) : m.prop(null),
        name: 'coupon_type',
        items: [
          {
            name: 'code',
            label: 'Custom Code',
          },
          {
            name: 'generated',
            label: 'Generated Codes'
          }
        ]
      })
    ]);
  }
};

Admin.components.shop.discounts.show.ui.form.markdown = {
  controller: function() {
    return new Admin.components.shop.discounts.show.controller();
  },
  view: function(ctrl) {
    return m('.row', [
      m('fieldset.col.small-3-5', [
        m('label.text-gray.is-block.margin-bottom-small', 'Markdown Type'),
        m.component(Admin.components.shared.dropdown.ui.container, {
          label: 'Select Markdown Type',
          input: true,
          // color: 'white',
          selectedVal: Admin.models.discounts.data.form().markdown() ? m.prop({
            name: Admin.models.discounts.data.form().markdown().type,
            label: _.capitalizeFirstLetter(Admin.models.discounts.data.form().markdown().type)
          }) : m.prop(null),
          name: 'coupon_type',
          items: [
            {
              name: 'percentage',
              label: 'Percentage'
            },
            {
              name: 'amount',
              label: 'Amount'
            },
            {
              name: 'free',
              label: 'Free'
            }
          ],
          onselect: function(selected) {
            let val = {
              type: selected.name
            };

            if (selected.name === 'percentage') {
              val.percentage = null;
            }
            if (selected.name === 'amount') {
              val.amount_cents = null;
            }
            Admin.models.discounts.data.form().markdown(val);
          }
        })
      ]),
      (Admin.models.discounts.data.form().markdown() && Admin.models.discounts.data.form().markdown().type !== 'free') ?
        m('fieldset.col.small-2-5.gutter-left-medium', [
          m('label.text-gray.is-block.margin-bottom-small', Admin.models.discounts.data.form().markdown() ? ctrl.discountLabel() : ''),
          m('input[type=text].fill-width', {
            value: Admin.models.discounts.data.form().markdown() ? ctrl.discountValue() : ''
          })
        ]) : ''
    ]);
  }
};
