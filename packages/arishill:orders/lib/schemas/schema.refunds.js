// definitions
Sales = (_.isUndefined(Sales)) ? {} : Sales;
Sales.schemas = (_.isUndefined(Sales.schemas)) ? {} : Sales.schemas;

/* REFUNDS SCHEMA
.................................................*/
Sales.schemas.refunds = new SimpleSchema({
  'is_partial': {
    type: Boolean,
    defaultValue: false
  },
  'is_full': {
    type: Boolean,
    defaultValue: false
  },
  'entries': {
    type: [Sales.schemas.refund_entries],
    optional: true
  }
});

Sales.schemas.refund_entries = new SimpleSchema({
  'date': {
    type: Date
  },
  'shipping_included': {
    type: Boolean
  },
  'amount': {
    'total_cents': {
      type: Number
    },
    'shipping_cents': {
      type: Number,
      optional: true
    },
  },
  'fees': {
    gateway_cents: {
      type: Number
    },
    arishill_cents: {
      type: Number
    }
  },
  'items': {
    type: [Sales.schemas.item],
    optional: true
  }
});