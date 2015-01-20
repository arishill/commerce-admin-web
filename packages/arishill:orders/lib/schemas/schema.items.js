// definitions
Sales = (_.isUndefined(Sales)) ? {} : Sales;
Sales.schemas = (_.isUndefined(Sales.schemas)) ? {} : Sales.schemas;

/* ITEMS SCHEMA
.................................................*/
Sales.schemas.item = new SimpleSchema({
  'product_id': {
    type: String
  },
  'variant_sku': {
    type: String
  },
  'quantity': {
    type: Number
  },
  'item_cents': {
    type: Number
  },
  'subtotal_cents': {
    type: Number
  },
  'tax': Schemas.tax()
});