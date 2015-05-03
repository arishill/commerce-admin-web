/* PUBLICATIONS
.................................................*/
Meteor.publish('categories', function(path) {
  return Collections.categories.find({});
});

Meteor.publish('categoriesByID', function(id) {
  return Collections.categories.find({_id: id});
});