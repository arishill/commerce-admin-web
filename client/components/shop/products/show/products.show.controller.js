'use strict';

Admin.components.shop.products.show.controller = function(opts) {
  let self = this;

  self.init = function() {
    Admin.models.products.data.single(null);
    setTimeout(function() {
      if (m.route.param('id')) {
        Admin.models.products.retrieve(m.route.param('id'));
      }
      if (m.route().match(/create/)) {
        Admin.models.products.retrieve('new');
      }

      m.endComputation();
    }, 600);
  };

  self.hasImage = function(product) {
    return product.skus.length && product.skus[0].images.cascade;
  };

  if (opts && opts.init) {
    self.init();
  }
};
