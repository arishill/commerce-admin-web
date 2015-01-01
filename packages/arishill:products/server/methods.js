/* METHODS
.................................................*/

Meteor.methods({
  'api/products/create': function (product) {
    ProductsCollection.insert(product);
  },
  'api/products/update': function (id, product) {
    product = Forms.cleanModifier(product);
    ProductsCollection.update(id, {$set: product});
  },
  'api/products/remove': function (id) {
    ProductsCollection.remove({_id: id});
  }
});