'use strict';

Admin.components.shop.orders.show.controller = function(opts) {
  let self = this;

  self.init = function() {
    if (m.route.param('tab')) {
      Admin.components.shop.orders.show.state.page(m.route.param('tab'));
    }

    if (Admin.models.orders.data.single() && Admin.models.orders.data.single().id === m.route.param('id')) {
      return;
    }

    if (m.route().match(/create/)) {
      Admin.models.orders.retrieve('new');
      return;
    }

    if (m.route.param('id')) {
      setTimeout(function() {
        Admin.models.orders.retrieve(m.route.param('id'), function() {
          Admin.components.shop.orders.show.state.geocodeData(null);
            self.getGeocodeData();
        });

        m.endComputation();
      }, 600);
    }
  };

  self.cardType = function(card) {
    if (card.match(/amex/)) {
      return 'American Express';
    }
    if (card.match(/amex/)) {
      return 'MasterCard';
    }
    if (card.match(/amex/)) {
      return 'visa';
    }
    if (card.match(/amex/)) {
      return 'Visa Card';
    }

    return 'Credit Card';
  };

  self.getPaymentStatus = function(item) {
    let status = {
      color: 'gray',
      text: null,
      icon: null
    };

    let payment = item.payment ? item.payment : item;

    switch (payment.status) {
      case 'approved':
        status.text = 'Approved';
        status.color = 'green';
        status.icon = 'check';
        break;
      case 'cancelled':
        status.text = 'Cancelled';
        status.color = 'gray';
        break;
      case 'declined':
        status.text = 'Decline';
        status.color = 'red';
        status.icon = 'icon';
        break;
      case 'pending':
        status.text = 'Pending';
        status.color = 'orange';
        status.icon = 'clock';
        break;
    }

    return status;
  };

  self.getFulfillmentStatus = function(item) {
    let status = {
      color: 'gray',
      text: null,
      icon: 'clock'
    };

    let fulfillment = item.fulfillment ? item.fulfillment : item;

    if (fulfillment.method.match(/digital_download/)) {
      status.icon = 'download';
    }

    switch (fulfillment.status) {
      case 'delivered':
        status.text = 'Delivered';
        status.color = 'green';
        status.icon = 'check';
        break;
      case 'in_transit':
        status.text = 'In transit';
        status.color = 'orange';
        status.icon = 'truck';
        break;
      case 'pending':
        status.text = 'Pending';
        status.color = 'orange';
        status.icon = 'clock';
        break;
      case 'failed':
        status.text = 'Failed';
        status.color = 'red';
        status.icon = 'x';
        break;
    }

    return status;
  };

  self.getGeocodeData = function() {
    m.startComputation();
    let address = Admin.models.orders.data.single().customer.shipping.address.line_1 + ' ' +
                  Admin.models.orders.data.single().customer.shipping.address.line_2 + ', ' +
                  Admin.models.orders.data.single().customer.shipping.address.city + ', ' +
                  Admin.models.orders.data.single().customer.shipping.address.province + ' ' +
                  Admin.models.orders.data.single().customer.shipping.address.postal_code;

    let Geocoder = new google.maps.Geocoder();

    Geocoder.geocode({ address: address }, function(response, status) {
      Admin.components.shop.orders.show.state.geocodeData(response);
      m.endComputation();
    });
  };

  self.getFulfillmentMap = function(el) {
    el.innerHTML = '';

    if (Admin.components.shop.orders.show.state.geocodeData()) {
      let map = new google.maps.Map(el, {
        center: Admin.components.shop.orders.show.state.geocodeData()[0].geometry.location,
        zoom: 10
      });

      let marker = new google.maps.Marker({
        position: Admin.components.shop.orders.show.state.geocodeData()[0].geometry.location,
        map: map
      });
    }
  };

  self.hasImage = function(item) {
    return item.sku && item.sku.images.cascade;
  };

  if (opts && opts.init) {
    self.init();
  }
};
