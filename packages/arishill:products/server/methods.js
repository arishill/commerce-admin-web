/* METHODS
.................................................*/

Meteor.methods({
  'api/products/create': function (product) {
    Collections.products.insert(product);
  },
  'api/products/update': function (id, product) {
    product = Forms.cleanModifier(product);
    console.log(product);
    Collections.products.update(id, {$set: product});
  },
  'api/products/remove': function (id) {
    Collections.products.remove({_id: id});
  },
  'api/products/count': function(search) {
    if (search) {
      return Collections.products.find({ $text: { $search: search } }).count();
    }
    else {
      return Collections.products.find().count();
    }
  }
});

if (Meteor.settings.env === 'development') {
  Meteor.methods({
    'api/products/clear': function () {
      Collections.products.remove({});
    }
  });
}