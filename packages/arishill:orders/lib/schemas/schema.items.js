// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.orders = (_.isUndefined(Schemas.collections.orders)) ? {} : Schemas.collections.orders;

/* ITEMS SCHEMA
.................................................*/
Schemas.collections.orders.item = new SimpleSchema({
  'product_id': {
    type: String
  },
  'title': {
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
  'tax': {
    type: Schemas.tax()
  }
});