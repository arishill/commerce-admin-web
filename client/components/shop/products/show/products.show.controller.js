'use strict';

Admin.components.shop.products.show.controller = function(opts) {
  let self = this;

  self.init = function() {
    Admin.models.products.retrieve(m.route.param('id'));
  };

  if (opts && opts.init) {
    self.init();
  }
};
