// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.transactions = (_.isUndefined(Schemas.collections.transactions)) ? {} : Schemas.collections.transactions;

/* CREDIT CARD SCHEMA
.................................................*/
Schemas.collections.transactions.card = new SimpleSchema({
  'type': {
    type: String,
    label: 'Card type',
    regEx: /(^visa$|^amex$|^mastercard$|^discover$|^jcb$|^diners$)/
  },
  'last_4': {
    type: Number,
    regEx: /^\d{4}$/
  },
  'expiry': {
    type: Object
  },
  'expiry.month': {
      type: Number,
      min: 1,
      max: 12
  },
  'expiry.year': {
    type: Number,
    regEx: /^\d{4}\d*$/
  }
});