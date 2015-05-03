/* METHODS
.................................................*/

Meteor.methods({
  'api/categories/create': function (category) {
    Collections.categories.insert(category);
  },
  'api/categories/update': function (id, category) {
    categories = Forms.cleanModifier(categories);
    Collections.categories.update(id, {$set: category});
  },
  'api/categories/remove': function (id) {
    Collections.categories.remove({_id: id});
  }
});