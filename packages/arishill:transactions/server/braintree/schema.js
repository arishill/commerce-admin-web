// definitions
Transactions = (_.isUndefined(Transactions)) ? {} : Transactions;
Transactions.schemas = (_.isUndefined(Transactions.schemas)) ? {} : Transactions.schemas;

/* BRAINTREE TRANSACTION SCHEMA
.................................................*/

Transactions.schemas.braintree = new SimpleSchema({
  'orderId': {
    type: String,
    optional: true
  },
  'amount': {
    type: Number,
    decimal: true
  },
  'paymentMethodNonce': {
    type: String
  },
  'customer': {
    type: Object,
    optional: true
  },
  'customer.id': {
    type: String,
    optional: true
  },
  'customer.firstName': {
    type: String,
    optional: true
  },
  'customer.lastName': {
    type: String,
    optional: true
  },
  'customer.company': {
    type: String,
    optional: true
  },
  'customer.phone': {
    type: String,
    optional: true
  },
  'customer.fax': {
    type: String,
    optional: true
  },
  'customer.website': {
    type: String,
    optional: true
  },
  'customer.email': {
    type: String,
    optional: true
  },
  'billing': {
    type: Object,
    optional: true
  },
  'billing.firstName': {
    type: String,
    optional: true
  },
  'billing.lastName': {
    type: String,
    optional: true
  },
  'billing.company': {
    type: String,
    optional: true
  },
  'billing.streetAddress': {
    type: String,
    optional: true
  },
  'billing.extendedAddress': {
    type: String,
    optional: true
  },
  'billing.locality': {
    type: String,
    optional: true
  },
  'billing.region': {
    type: String,
    optional: true
  },
  'billing.postalCode': {
    type: String,
    optional: true
  },
  'billing.countryCodeAlpha3': {
    type: String,
    optional: true
  }
});

Transactions.schemas.braintree.context = Transactions.schemas.braintree.namedContext('Braintree');