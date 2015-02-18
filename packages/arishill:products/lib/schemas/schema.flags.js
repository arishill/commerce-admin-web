// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.products = (_.isUndefined(Schemas.collections.products)) ? {} : Schemas.collections.products;

/* FLAGS SCHEMA
.................................................*/
Schemas.collections.products.flags = new SimpleSchema({
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