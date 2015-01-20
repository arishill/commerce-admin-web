// definitions
Sales = (_.isUndefined(Sales)) ? {} : Sales;
Sales.schemas = (_.isUndefined(Sales.schemas)) ? {} : Sales.schemas;

/* LINE ITEMS SCHEMA
.................................................*/
Sales.schemas.line_item = new SimpleSchema({
  'title': {
    type: String
  },
  'description': {
    type: String,
    optional: true
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