Helpers = {};
Helpers.orders = {};

Helpers.orders.getOrderStatus = function(order) {
    var order = '<span class="text-green">Ready to deliver</span>';

    return order;
  }

Template.aristotle__orders__table_body.helpers({
  getOrderStatus: Helpers.orders.getOrderStatus
});

Template.aristotle__orders__edit.helpers({
  getOrderStatus: Helpers.orders.getOrderStatus
});

Template.aristotle__orders__form_details.helpers({
  editable: function(name) {
    return Session.get(name);
  },

  getDropdownOptions: function(value) {
    return {
      css: 'dropdown--bottom dropdown--xsmall',
      anchor: {
        css: 'btn-dropdown-white btn--small',
        text: value
      },
      options: {
        close_on_click: true,
        select_input: true,
        name: 'quantity'
      },
      list: {
        css: 'text-center text-small border-gray-light border--all arrow-top-middle',
        items: [
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' }
        ]
      }
    };
  }
});

Template.aristotle__orders__form_shipment.helpers({
  locationMap: function() {

    var address = this.shipment.address.line_1 + ' ' + this.shipment.address.line_2 + ', ' + this.shipment.address.city + ', ' + this.shipment.address.province + ' ' + this.shipment.address.postal_code;

    if (GoogleMaps.geocodeRetrieved()) {
      return {
        center: new google.maps.LatLng(GoogleMaps.geocodeData[0].geometry.location.A, GoogleMaps.geocodeData[0].geometry.location.F),
        zoom: 8
      };
    }
    if (GoogleMaps.loaded()) {
      var Geocoder = new google.maps.Geocoder();

      Geocoder.geocode({ address: address }, function(response, status) {
        GoogleMaps.geocode_success = true;
        GoogleMaps.geocodeData = response;
        GoogleMaps.tracker.changed();
      });
    }
  }
});