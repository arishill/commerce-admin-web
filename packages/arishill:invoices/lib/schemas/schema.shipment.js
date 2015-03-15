// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.orders = (_.isUndefined(Schemas.collections.orders)) ? {} : Schemas.collections.orders;

/* SHIPMENT SCHEMA
.................................................*/
Schemas.collections.orders.shipment = new SimpleSchema({
  'status': {
    type: String,
    label: "Shipment Status",
    regEx: /(^in_transit$|^out_for_delivery$|^delivered$|^return_to_sender$|^failure$|^pre_transit$|^unknown$)/
  },
  'name': {
    type: String,
  },
  'address': {
    type: Schemas.address('usa'),
    optional: true
  },
  'delivery': {
    type: Object,
    optional: true
  },
  'delivery.phone': {
    type: Schemas.phone('usa'),
    optional: true
  },
  'delivery.instructions': {
    type: String,
    optional: true
  },
  'delivery.date': {
    type: Date
  },
  'tracking': {
    type: Object,
    optional: true
  },
  'tracking.carrier': {
    type: String,
    regEx: /(^ups$|^usps$|^fedex$|^dhl$|^ontrac$|^purolator$|^norco$|^lasership$|^colisprive$|^gso$|$candapost$)/,
  },
  'tracking.number': {
    type: String
  },
  'tracking.status': {
    type: String,
    regEx: /(^in_transit$|^out_for_delivery$|^delivered$|^return_to_sender$|^failure$|^pre_transit$|^unknown$)/
  },
  'tracking.estimated_delivery': {
    type: Date
  }
});