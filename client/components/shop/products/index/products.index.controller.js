'use strict';

Admin.components.shop.products.index.controller = function(opts) {
  let self = this;

  self.init = function() {
    Admin.models.products.all();
  };

  self.hasImage = function(item) {
    return item.skus.length && item.skus[0].images.cascade;
  };

  self.deleteProduct = function(event) {
    event.preventDefault();
    alert('you are deleting this product!');
  };

  if (opts && opts.init) {
    self.init();
  }
};
