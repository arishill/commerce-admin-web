// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.coupons = (_.isUndefined(Schemas.collections.coupons)) ? {} : Schemas.collections.coupons;

/* BILLING SCHEMA
.................................................*/
Schemas.collections.coupons.billing = new SimpleSchema({
  'email': Schemas.email(),
  'phone': Schemas.phone('usa', true),
  'name': {
    type: Object
  },
  'name.first': {
    type: String
  },
  'name.last': {
    type: String
  },
  'address': {
    type: Schemas.address('usa')
  }
});