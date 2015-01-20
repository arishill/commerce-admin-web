// definitions
Sales = (_.isUndefined(Sales)) ? {} : Sales;
Sales.schemas = (_.isUndefined(Sales.schemas)) ? {} : Sales.schemas;

/* TRANSACTION SCHEMA
.................................................*/
Sales.schemas.transaction = new SimpleSchema({
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
    'provider': {
      type: String,
      label: 'Gateway Provider',
      regEx: /(^braintree$|^stripe$|^paypal$|^coinbase$)/
    },
    'charge_id': {
      type: String
    }
  },
  'bank': {},
  'paypal': {},
  'bitcoin': {},
  'cash': {},
  'card': {
    'type': {
      type: String,
      label: 'Card type',
      regEx: /(^visa$|^amex$|^mastercard$|^discover$|^jcb$|^diners$)/
    },
    'last_4': {
      type: Number,
      min: 4,
      max: 4
    },
    'expiry': {
      'month': {
        type: Number,
        min: 2,
        max: 2
      },
      'year': {
        type: Number,
        min: 4,
        max: 4
      }
    }
  }
});