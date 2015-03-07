/* METHODS
.................................................*/

Meteor.methods({
  'api/orders/create': function (order) {
    Collections.orders.insert(order);
  },
  'api/orders/update': function (id, order) {
    order = Forms.cleanModifier(order);
    Collections.orders.update(id, {$set: order});
  },
  'api/orders/remove': function (id) {
    Collections.orders.remove({_id: id});
  }
});