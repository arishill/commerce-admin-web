// definitions
Products = (_.isUndefined(Products)) ? {} : Products;
Products.schemas = (_.isUndefined(Products.schemas)) ? {} : Products.schemas;

/* PRICING SCHEMA
.................................................*/

Products.schemas.price = new SimpleSchema({
  'regular_cents': {
    type: Number
  },
  'sale_cents': {
    type: Number,
    defaultValue: null,
    optional: true
  }
});