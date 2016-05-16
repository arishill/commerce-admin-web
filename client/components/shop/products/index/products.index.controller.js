'use strict';

Admin.components.shop.products.index.controller = function(opts) {
  let self = this;

  self.init = function() {
    Admin.models.products.all();
  };

  self.hasImage = function(item) {
    return item.skus.length && item.skus[0].images.cascade;
  };

  self.toggleSale = function(id, flags, event) {
    flags.is_sale = !flags.is_sale;
    Admin.models.products.update(id, {
      flags: flags
    });
  };

  self.toggleStatus = function(id, flags, event) {
    flags.is_active = !flags.is_active;
    Admin.models.products.update(id, {
      flags: flags
    });
  };

  self.deleteProduct = function(id, event) {
    event.preventDefault();
    Admin.components.shop.products.state.isDeleteProcessing(id);

    Admin.models.products.delete(id, function() {
      Admin.components.shop.products.state.isDeleteProcessing(null);
      Admin.components.shop.products.state.isDeletingId(null);
    });
  };

  self.deleteConfirm = function(id, event) {
    event.preventDefault();
    Admin.components.shop.products.state.isDeletingId(id);
  };

  self.deleteCancel = function(event) {
    event.preventDefault();
    Admin.components.shop.products.state.isDeletingId(null);
  };

  if (opts && opts.init) {
    self.init();
  }
};
