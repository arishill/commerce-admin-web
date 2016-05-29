'use strict';

Admin.components.shop.discounts.index.controller = function(opts) {
  let self = this;

  self.init = function() {
    Admin.models.discounts.all();

    if (m.route.param('query')) {
      self.search(m.route.param('query'));
    }
  };

  self.discounts = function() {
    if (Admin.models.discounts.data.search()) {
      return Admin.models.discounts.data.search();
    } else {
      return Admin.models.discounts.data.all();
    }
  };

  self.search = function(event) {
    let val = event.target ? event.target.value : event;
    let state = window.location.href;

    if (val.length) {
      if (window.location.href.match(/query=/)) {
        state = state.replace(/query=(.*)?(?=(\&))?/, 'query=' + val);
      } else {
        state = state + '?query=' + val;
      }

      window.history.replaceState({}, '', state);
      Admin.models.discounts.data.search([]);
      Admin.models.discounts.data.all().map(function(item, index) {
        let searchable = JSON.stringify(item);
        let regex = new RegExp(val.replace(/\s+/g, '|'), 'i');
        if (searchable.match(regex)) {
          Admin.models.discounts.data.search().push(item);
        }
      });
    }
    else {
      Admin.models.discounts.data.search(null);
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  self.toggleStatus = function(id, flags, event) {
    flags.is_active = !flags.is_active;
    Admin.models.discounts.update(id, {
      flags: flags
    });
  };

  self.getDiscountStatus = function(discount) {
    let status = {
      color: 'gray',
      text: 'Inactive',
      subtext: null
    };

    if (discount.flags.is_scheduled && discount.scheduled.start) {
      status.text = 'Scheduled';
      status.subtext = discount.scheduled.end_date;
      return status;
    }

    if (discount.flags.is_active) {
      status.text = 'Active';
      status.color = 'green';
    }

    return status;
  };

  self.getMarkdown = function(discount) {
    if (discount.markdown.type === 'percentage') {
      return discount.markdown.percentage * 100 + '% OFF';
    }

    if (discount.markdown.type === 'free') {
      return 'FREE';
    }

    if (discount.markdown.type === 'amount') {
      return accounting.formatMoney(discount.markdown.amount_cents/100) + ' OFF';
    }
  };

  if (opts && opts.init) {
    self.init();
  }
};
