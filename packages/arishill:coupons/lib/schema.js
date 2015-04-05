// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.coupons = (_.isUndefined(Schemas.collections.coupons)) ? {} : Schemas.collections.coupons;

/* couponS DEFAULT SCHEMA
.................................................*/
Schemas.collections.coupons.default = new SimpleSchema({

});

Schemas.collections.coupons.context = Schemas.collections.coupons.default.namedContext('coupons');

Schemas.collections.coupons.default.messages({
  'required billing.email': 'Please enter your email address',
  'regEx billing.phone': 'Please enter a valid phone number',
  'minCount items': 'You must add at least one item to this coupon'
});