/* PUBLICATIONS
.................................................*/
Meteor.publish('products', function(path) {
  return Collections.products.find({});
});
Meteor.publish('productsByUrl', function(url) {
  return Collections.products.find({url: url});
});

Collections.products._ensureIndex('url', { unique: 1 });
Collections.products._ensureIndex('variants.sku', { unique: 1 });
