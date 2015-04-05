// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.coupons = (_.isUndefined(Schemas.collections.coupons)) ? {} : Schemas.collections.coupons;

/* coupon SCHEMA
.................................................*/
Schemas.collections.coupons.coupon = new SimpleSchema({
  'coupon_id': {
    type: String
  },
  'status': {
    type: String,
    label: "coupon Status",
    regEx: /(^pending$|^read$|^paid$|^rejected$)/
  }
});