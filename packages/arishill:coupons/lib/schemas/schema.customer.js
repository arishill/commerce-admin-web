// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.coupons = (_.isUndefined(Schemas.collections.coupons)) ? {} : Schemas.collections.coupons;

/* CUSTOMER SCHEMA
.................................................*/
Schemas.collections.coupons.customer = new SimpleSchema({
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