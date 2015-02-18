/* COLLECTIONS
.................................................*/
Collections = {};
Collections.orders = new Mongo.Collection('orders');

Collections.orders.allow({
  update: function(userId, post) { return true; },
  remove: function(userId, post) { return true; },
  insert: function(userId, post) { return true; }
});
