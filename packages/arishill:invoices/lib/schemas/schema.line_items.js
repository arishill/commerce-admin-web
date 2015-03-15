// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.orders = (_.isUndefined(Schemas.collections.orders)) ? {} : Schemas.collections.orders;

/* LINE ITEMS SCHEMA
.................................................*/
Schemas.collections.orders.line_item = new SimpleSchema({
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
  'tax': {
    type: Schemas.tax(),
    defaultValue: 0
  }
});