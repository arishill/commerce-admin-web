/* METHODS
.................................................*/

Meteor.methods({
  'api/sections/create': function (section) {
    Collections.sections.insert(section);
  },
  // 'api/sections/update': function (id, product) {
  //   product = Forms.cleanModifier(product);
  //   Collections.sections.update(id, {$set: product});
  // },
  // 'api/sections/remove': function (id) {
  //   Collections.sections.remove({_id: id});
  // }
});

if (Meteor.settings.env === 'development') {
  Meteor.methods({
    'api/sections/clear': function () {
      Collections.sections.remove({});
    }
  });
}