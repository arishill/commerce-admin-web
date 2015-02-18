/* METHODS
.................................................*/

Meteor.methods({
  'api/products/create': function (product) {
    Collections.products.insert(product);
  },
  'api/products/update': function (id, product) {
    product = Forms.cleanModifier(product);
    Collections.products.update(id, {$set: product});
  },
  'api/products/remove': function (id) {
    Collections.products.remove({_id: id});
  }
});