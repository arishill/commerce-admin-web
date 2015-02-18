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
  },
  'api/invoices/create': function (order) {
    Collections.orders.insert(order);
  },
  'api/invoices/update': function (id, order) {
    orders = Forms.cleanModifier(orders);
    Collections.orders.update(id, {$set: order});
  },
  'api/invoices/remove': function (id) {
    Collections.orders.remove({_id: id});
  }
});