/* METHODS
.................................................*/

Meteor.methods({
  'api/orders/create': function (product) {
    ProductsCollection.insert(product);
  },
  'api/orders/update': function (id, product) {
    product = Forms.cleanModifier(product);
    ProductsCollection.update(id, {$set: product});
  },
  'api/orders/remove': function (id) {
    ProductsCollection.remove({_id: id});
  },
  'api/invoices/create': function (product) {
    ProductsCollection.insert(product);
  },
  'api/invoices/update': function (id, product) {
    product = Forms.cleanModifier(product);
    ProductsCollection.update(id, {$set: product});
  },
  'api/invoices/remove': function (id) {
    ProductsCollection.remove({_id: id});
  }
});