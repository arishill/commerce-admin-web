// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.products = (_.isUndefined(Schemas.collections.products)) ? {} : Schemas.collections.products;

/* SHIPPING SCHEMA
.................................................*/
Schemas.collections.products.shipping = new SimpleSchema({
  'weight': {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  'width': {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  'length': {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  'depth': {
    type: Number,
    defaultValue: 0,
    optional: true
  }
});