/* METHODS
.................................................*/

Meteor.methods({
  'api/coupons/create': function (coupon) {
    Collections.coupons.insert(coupon);
  },
  'api/coupons/update': function (id, coupon) {
    coupons = Forms.cleanModifier(coupons);
    Collections.coupons.update(id, {$set: coupon});
  },
  'api/coupons/remove': function (id) {
    Collections.coupons.remove({_id: id});
  }
});