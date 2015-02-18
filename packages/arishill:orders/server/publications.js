/* PUBLICATIONS
.................................................*/
Meteor.publish('orders', function(path) {
  return Collections.orders.find({});
});

Meteor.publish('ordersByID', function(id) {
  return Collections.orders.find({_id: id});
});