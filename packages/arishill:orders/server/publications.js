/* PUBLICATIONS
.................................................*/
Meteor.publish('orders', function(path) {
  return OrdersCollection.find({});
});
Meteor.publish('ordersByUrl', function(url) {
  return OrdersCollection.find({url: url});
});