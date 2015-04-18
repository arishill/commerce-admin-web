/* COLLECTIONS
.................................................*/
Collections.sections = new Mongo.Collection('sections');

Collections.sections.allow({
  update: function(userId, post) { return true; },
  remove: function(userId, post) { return true; },
  insert: function(userId, post) { return true; }
});

