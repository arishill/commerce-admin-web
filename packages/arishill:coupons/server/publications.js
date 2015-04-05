/* PUBLICATIONS
.................................................*/
Meteor.publish('coupons', function(path) {
  return Collections.coupons.find({});
});

Meteor.publish('couponsByID', function(id) {
  return Collections.coupons.find({_id: id});
});