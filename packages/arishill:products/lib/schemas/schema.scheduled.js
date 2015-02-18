// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.products = (_.isUndefined(Schemas.collections.products)) ? {} : Schemas.collections.products;

/* SCHEDULED SCHEMA
.................................................*/
Schemas.collections.products.scheduled = new SimpleSchema({
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