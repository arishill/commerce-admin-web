'use strict';

Admin.components.shop.products.index.controller = function(opts) {
  let self = this;

  self.init = function() {
    Admin.models.products.all();

    if (m.route.param('query')) {
      self.search(m.route.param('query'));
    }
  };

  self.products = function() {
    if (Admin.models.products.data.search()) {
      return Admin.models.products.data.search();
    } else {
      return Admin.models.products.data.all();
    }
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
      Admin.models.products.data.search([]);
      Admin.models.products.data.all().map(function(item, index) {
        let searchable = JSON.stringify(item);
        let regex = new RegExp(val.replace(/\s+/g, '|'), 'i');
        if (searchable.match(regex)) {
          Admin.models.products.data.search().push(item);
        }
      });
    }
    else {
      Admin.models.products.data.search(null);
      window.history.replaceState({}, '', window.location.pathname);
    }
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
