'use strict';

Admin.components.shop.discounts.show.controller = function(opts) {
  let self = this;

  self.init = function() {
    if (m.route.param('tab')) {
      Admin.components.shop.discounts.show.state.page(m.route.param('tab'));
    }

    if (Admin.models.discounts.data.single() && Admin.models.discounts.data.single().id === m.route.param('id')) {
      return;
    }

    if (m.route().match(/create/)) {
      Admin.models.discounts.retrieve('new');
      return;
    }

    if (m.route.param('id')) {
      Admin.models.discounts.data.single(null);
      setTimeout(function() {
        Admin.models.discounts.retrieve(m.route.param('id'));
        m.endComputation();
      }, 600);
    }
  };

  self.discountType = m.prop({
    name: 'percentage',
    label: 'Percentage'
  });

  self.markdown_type = m.prop({
    name: 'percentage',
    label: 'Percentage'
  });

  self.coupon_ticket = m.prop({
    name: 'code',
    label: 'Code'
  });

  self.discountLabel = function(discount) {
    switch (Admin.models.discounts.data.form().markdown().type) {
      case 'amount':
        return 'Amount Off';
      case 'percentage':
        return 'Percent Off';
    }
  };

  self.discountValue = function() {
    let val = '';

    switch (Admin.models.discounts.data.form().markdown().type) {
      case 'amount':
        val = Admin.models.discounts.data.form().markdown() ? accounting.formatMoney(Admin.models.discounts.data.form().markdown().amount_cents/100) : 0;
        break;
      case 'percentage':
        val = Admin.models.discounts.data.form().markdown() ? ((Admin.models.discounts.data.form().markdown().percentage || 0) * 100) + '%' : '0%';
        break;
    }

    return val;
  };

  if (opts && opts.init) {
    self.init();
  }
};
