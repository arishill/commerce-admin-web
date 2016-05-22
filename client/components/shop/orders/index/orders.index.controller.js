'use strict';

Admin.components.shop.orders.index.controller = function(opts) {
  let self = this;

  self.init = function() {
    Admin.models.orders.all();

    if (m.route.param('query')) {
      self.search(m.route.param('query'));
    }
  };

  self.orders = function() {
    if (Admin.models.orders.data.search()) {
      return Admin.models.orders.data.search();
    } else {
      return Admin.models.orders.data.all();
    }
  };

  self.getShipmentColor = function(item) {
    let color = 'gray';

    switch (item.shipments[0].status) {
      case 'delivered':
        color = 'green';
        break;
      case 'cancelled':
        color = 'gray';
        break;
      case 'pending':
        color = 'yellow';
        break;
      case 'fail':
        color = 'red';
        break;
    }

    return color;
  };

  self.getPaymentColor = function(item) {
    let color = 'gray';

    switch (item.payment.status) {
      case 'approved':
        color = 'green';
        break;
      case 'cancelled':
        color = 'gray';
        break;
      case 'pending':
        color = 'yellow';
        break;
      case 'fail':
        color = 'red';
        break;
    }

    return color;
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
      Admin.models.orders.data.search([]);
      Admin.models.orders.data.all().map(function(item, index) {
        let searchable = JSON.stringify(item);
        let regex = new RegExp(val.replace(/\s+/g, '|'), 'i');
        if (searchable.match(regex)) {
          Admin.models.orders.data.search().push(item);
        }
      });
    }
    else {
      Admin.models.orders.data.search(null);
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  self.toggleStatus = function(id, flags, event) {
    flags.is_active = !flags.is_active;
    Admin.models.orders.update(id, {
      flags: flags
    });
  };

  // self.deleteProduct = function(id, event) {
  //   event.preventDefault();
  //   Admin.components.shop.products.state.isDeleteProcessing(id);
  //
  //   Admin.models.products.delete(id, function() {
  //     Admin.components.shop.products.state.isDeleteProcessing(null);
  //     Admin.components.shop.products.state.isDeletingId(null);
  //   });
  // };
  //
  // self.deleteConfirm = function(id, event) {
  //   event.preventDefault();
  //   Admin.components.shop.products.state.isDeletingId(id);
  // };
  //
  // self.deleteCancel = function(event) {
  //   event.preventDefault();
  //   Admin.components.shop.products.state.isDeletingId(null);
  // };

  if (opts && opts.init) {
    self.init();
  }
};
