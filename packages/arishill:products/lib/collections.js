/* COLLECTIONS
.................................................*/
Collections = {};
Collections.products = new Mongo.Collection('products');

Collections.products.allow({
  update: function(userId, post) { return true; },
  remove: function(userId, post) { return true; },
  insert: function(userId, post) { return true; }
});

