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

  if (opts && opts.init) {
    self.init();
  }
};
