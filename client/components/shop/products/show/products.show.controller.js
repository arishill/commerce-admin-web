'use strict';

Admin.components.shop.products.show.controller = function(opts) {
  let self = this;

  self.init = function() {
    setTimeout(function() {
      Admin.models.products.retrieve(m.route.param('id'));
      m.endComputation();
    }, 600);
  };

  if (opts && opts.init) {
    self.init();
  }
};
