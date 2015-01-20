// definitions
Sales = (_.isUndefined(Sales)) ? {} : Sales;
Sales.schemas = (_.isUndefined(Sales.schemas)) ? {} : Sales.schemas;

/* RECEIPT SCHEMA
.................................................*/
Sales.schemas.receipt = new SimpleSchema({
  'currency': {
    type: String,
    defaultValue: 'usd'
  },
  'discount_code': {
    type: String,
    optional: true
  },
  'amount': {
    subtotal_cents: {
      type: Number
    },
    shipping_cents:  {
      type: Number
    },
    discount_cents:  {
      type: Number
    },
    tax_cents:  {
      type: Number
    },
    total_cents:  {
      type: Number
    }
  },
  'fees': {
    type: Object,
    optional: true
  },
  'fees.gateway_cents':  {
    type: Number
  },
  'fees.arishill_cents':  {
    type: Number
  }
  }
});
