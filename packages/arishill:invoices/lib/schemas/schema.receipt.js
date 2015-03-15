// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.orders = (_.isUndefined(Schemas.collections.orders)) ? {} : Schemas.collections.orders;

/* RECEIPT SCHEMA
.................................................*/
Schemas.collections.orders.receipt = new SimpleSchema({
  'currency_code': {
    type: String,
    defaultValue: 'usd'
  },
  'discount_code': {
    type: String,
    optional: true
  },
  'amount': {
    type: Object
  },
  'amount.subtotal_cents': {
    type: Number,
    defaultValue: 0
  },
  'amount.shipping_cents':  {
    type: Number,
    optional: true,
    defaultValue: 0
  },
  'amount.discount_cents':  {
    type: Number,
    defaultValue: 0
  },
  'amount.tax_cents':  {
    type: Number,
    optional: true,
    defaultValue: 0
  },
  'amount.total_cents':  {
    type: Number,
    defaultValue: 0
  },
  'fees': {
    type: Object,
    optional: true
  },
  'fees.gateway_cents':  {
    type: Number,
    defaultValue: 0
  },
  'fees.arishill_cents':  {
    type: Number,
    defaultValue: 0
  }
});
