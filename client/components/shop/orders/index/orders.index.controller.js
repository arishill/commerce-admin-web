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

  self.getPaymentStatus = function(item) {
    let status = {
      color: 'gray',
      text: null,
      icon: 'credit-card'
    };

    switch (item.payment.status) {
      case 'approved':
        status.text = 'Approved';
        status.color = 'green';
        break;
      case 'cancelled':
        status.text = 'Cancelled';
        status.color = 'gray';
        break;
      case 'declined':
        status.text = 'Decline';
        status.color = 'red';
        break;
      case 'pending':
        status.text = 'Pending';
        status.color = 'orange';
        break;
    }

    return status;
  };

  self.getFulfillmentStatus = function(item) {
    let status = {
      color: 'gray',
      text: null,
      icon: 'truck'
    };

    if (item.fulfillment.method.match(/digital_download/)) {
      status.icon = 'download';
    }

    switch (item.fulfillment.status) {
      case 'delivered':
        status.text = 'Delivered';
        status.color = 'green';
        break;
      case 'in_transit':
        status.text = 'In transit';
        status.color = 'orange';
        break;
      case 'pending':
        status.text = 'Pending';
        status.color = 'orange';
        break;
      case 'failed':
        status.text = 'Failed';
        status.color = 'red';
        break;
    }

    return status;
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
