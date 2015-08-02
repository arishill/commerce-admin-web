/* COLLECTIONS
.................................................*/
Collections.products = new Mongo.Collection('products');

Collections.products.allow({
  update: function(userId, post) { return true; },
  remove: function(userId, post) { return true; },
  insert: function(userId, post) { return true; }
});

// console.log(EasySearch);
// EasySearch.createSearchIndex('products', {
//   field: ['description', '_id', 'title'],
//   collection: Collections.products,
//   limit: 20
// });