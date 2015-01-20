// definitions
Products = (_.isUndefined(Products)) ? {} : Products;
Products.schemas = (_.isUndefined(Products.schemas)) ? {} : Products.schemas;

/* FLAGS SCHEMA
.................................................*/
Products.schemas.flags = new SimpleSchema({
  'is_active': {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  'is_sale': {
    type: Boolean,
    defaultValue: false
  },
  'is_taxable': {
    type: Boolean,
    defaultValue: false
  },
  'is_discount_ignored': {
    type: Boolean,
    defaultValue: false
  }
});