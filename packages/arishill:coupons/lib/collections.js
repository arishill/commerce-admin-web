/* COLLECTIONS
.................................................*/
Collections.coupons = new Mongo.Collection('coupons');
Collections.coupons.allow({
  update: function(userId, post) { return true; },
  remove: function(userId, post) { return true; },
  insert: function(userId, post) { return true; }
});
