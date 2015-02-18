// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.orders = (_.isUndefined(Schemas.collections.orders)) ? {} : Schemas.collections.orders;

/* CUSTOMER SCHEMA
.................................................*/
Schemas.collections.orders.customer = new SimpleSchema({
  'id': {
    type: String,
    optional: true
  },
  'is_saved_card': {
    type: Boolean,
    optional: true,
    defaultValue: false
  }
});