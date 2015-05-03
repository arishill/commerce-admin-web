/* COLLECTIONS
.................................................*/
Collections.categories = new Mongo.Collection('categories');
Collections.categories.allow({
  update: function(userId, post) { return true; },
  remove: function(userId, post) { return true; },
  insert: function(userId, post) { return true; }
});
