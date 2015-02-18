// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.orders = (_.isUndefined(Schemas.collections.orders)) ? {} : Schemas.collections.orders;

/* TRANSACTION SCHEMA
.................................................*/
Schemas.collections.orders.transaction = new SimpleSchema({
 'status': {
    type: String,
    label: "Shipment Status",
    regEx: /(^approved$|^refunded$|^pending$|^canceled$|^failed$)/
  },
  'date': {
    type: Date
  },
  'method': {
    type: String,
    label: "Method of Payment",
    regEx: /(^credit$|^debit$|^cash$|^bitcoin$|^paypal$|^bank$)/
  },
  'gateway': {
    type: Object,
    optional: true
  },
  'gateway.provider': {
    type: String,
    label: 'Gateway Provider',
    regEx: /(^braintree$|^stripe$|^paypal$|^coinbase$)/
  },
  'gateway.charge_id': {
    type: String
  },
  'bank': {
    type: String,
    optional: true
  },
  'paypal': {
    type: String,
    optional: true
  },
  'bitcoin': {
    type: String,
    optional: true
  },
  'cash': {
    type: String,
    optional: true
  },
  'card': {
    type: Schemas.credit_card(),
    optional: true
  }
});

// authorization_expired
// authorized
// authorizing
// settlement_pending
// settlement_confirmed
// settlement_declined
// failed
// gateway_rejected
// processor_declined
// settled
// settling
// submitted_for_settlement
// voided