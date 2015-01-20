// definitions
Sales = (_.isUndefined(Sales)) ? {} : Sales;
Sales.schemas = (_.isUndefined(Sales.schemas)) ? {} : Sales.schemas;

/* SHIPMENT SCHEMA
.................................................*/
Sales.schemas.shipment = new SimpleSchema({
  'status': {
    type: String,
    label: "Shipment Status",
    regEx: /(^in_transit$|^out_for_delivery$|^delivered$|^return_to_sender$|^failure$|^pre_transit$|^unknown$)/
  },
  'name': {
    type: String,
  },
  'address': Schemas.address.usa,
  'delivery': {
    'phone': Schemas.phone(true),
    'instructions': {
      type: String,
      optional: true
    },
    'date': {
      type: Date
    }
  },
  'tracking': {
    'carrier': {
      type: String,
      regEx: /(^ups$|^usps$|^fedex$|^dhl$|^ontrac$|^purolator$|^norco$|^lasership$|^colisprive$|^gso$|$candapost$)/
    },
    'tracking_number': {
      type: String
    },
    'status': {
      type: String,
      regEx: /(^in_transit$|^out_for_delivery$|^delivered$|^return_to_sender$|^failure$|^pre_transit$|^unknown$)/
    },
    'estimated_delivery': {
      type: Date
    }
  }
});