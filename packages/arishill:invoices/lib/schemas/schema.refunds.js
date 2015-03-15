// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.orders = (_.isUndefined(Schemas.collections.orders)) ? {} : Schemas.collections.orders;

/* REFUNDS SCHEMA
.................................................*/
Schemas.collections.orders.refunds = new SimpleSchema({
  'is_partial': {
    type: Boolean,
    defaultValue: false
  },
  'is_full': {
    type: Boolean,
    defaultValue: false
  },
  'entries': {
    type: [Schemas.collections.orders.refund_entries],
    optional: true
  }
});

Schemas.collections.orders.refund_entries = new SimpleSchema({
  'date': {
    type: Date
  },
  'shipping_included': {
    type: Boolean
  },
  'amount': {
    type: Object
  },
  'amount.total_cents': {
    type: Number
  },
  'amount.shipping_cents': {
    type: Number,
    optional: true
  },
  'fees': {
    type: Object
  },
  'fees.gateway_cents': {
    type: Number
  },
  'fees.arishill_cents': {
    type: Number
  },
  'items': {
    type: [Schemas.collections.orders.item],
    optional: true
  }
});