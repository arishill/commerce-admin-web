/* PUBLICATIONS
.................................................*/
Meteor.publish('products', function(path) {
  return ProductsCollection.find({});
});
Meteor.publish('productsByUrl', function(url) {
  return ProductsCollection.find({url: url});
});

ProductsCollection._ensureIndex('url', { unique: 1 });
ProductsCollection._ensureIndex('variants.sku', { unique: 1 });
