// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.products = (_.isUndefined(Schemas.collections.products)) ? {} : Schemas.collections.products;

/* PRICING SCHEMA
.................................................*/
Schemas.collections.products.price = new SimpleSchema({
  'regular_cents': {
    type: Number
  },
  'sale_cents': {
    type: Number,
    optional: true
  }
});