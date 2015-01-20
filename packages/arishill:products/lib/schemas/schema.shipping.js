// definitions
Products = (_.isUndefined(Products)) ? {} : Products;
Products.schemas = (_.isUndefined(Products.schemas)) ? {} : Products.schemas;

/* SHIPPING SCHEMA
.................................................*/
Products.schemas.shipping = new SimpleSchema({
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