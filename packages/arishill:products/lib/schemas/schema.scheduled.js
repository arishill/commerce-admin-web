// definitions
Products = (_.isUndefined(Products)) ? {} : Products;
Products.schemas = (_.isUndefined(Products.schemas)) ? {} : Products.schemas;

/* SCHEDULED SCHEMA
.................................................*/

Products.schemas.scheduled = new SimpleSchema({
  'start': {
    type: Date,
    defaultValue: null,
    optional: true
  },
  'end': {
    type: Date,
    defaultValue: null,
    optional: true
  }
});