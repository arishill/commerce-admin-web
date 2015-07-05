/* COLLECTIONS
.................................................*/
Collections.content = new Mongo.Collection('content');

Collections.content.allow({
  update: function(userId, post) { return true; },
  remove: function(userId, post) { return true; },
  insert: function(userId, post) { return true; }
});
