// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.transactions = (_.isUndefined(Schemas.collections.transactions)) ? {} : Schemas.collections.transactions;

/* TRANSACTION DEFAULT SCHEMA
.................................................*/
Schemas.collections.transactions.default = new SimpleSchema({
 'status': {
    type: String,
    label: "Transactions Status",
    regEx: /(^authorization_expired$|^authorized$|^authorizing$|^settlement_pending$|^settlement_confirmed$|^settlement_declined$|^failed$|^gateway_rejected$|^processor_declined$|^settled$|^settling$|^submitted_for_settlement$|^voided$)/
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
    type: String,
    optional: true
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
    type: Schemas.collections.transactions.card,
    optional: true
  }
});

Schemas.collections.transactions.context = Schemas.collections.transactions.default.namedContext('Transactions');

Schemas.collections.transactions.default.messages({});