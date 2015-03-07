Template.aristotle__orders__form_details.onRendered(function() {
  var quantity_dropdowns = Components.dropdown('[data-dropdown]', {});
});

Template.aristotle__orders__form_shipment.onCreated(function() {
  // var Geocoder = new google.maps.Geocoder()
  // Geocoder.geocode({ address: address }, function(here, now) {
  //   console.log(here); console.log(now);
  //     return {
  //       center: new google.maps.LatLng(-37.8136, -121.92399699999999),
  //       zoom: 8
  //     };
  // });

  GoogleMaps.tracker = new Tracker.Dependency;
  GoogleMaps.geocode_success = false;

  GoogleMaps.geocodeRetrieved = function() {
    this.tracker.depend();
    return GoogleMaps.geocode_success;
  }
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('locationMap', function(map) {


    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});