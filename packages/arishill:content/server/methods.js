/* METHODS
.................................................*/

if (Meteor.settings.env === 'development') {
  Meteor.methods({
    'api/content/clear': function () {
      Collections.content.remove({});
    }
  });
}

/* METHODS
.................................................*/

Meteor.methods({
  'api/content/create': function (content) {
    Collections.content.insert(content);
  },
  'api/content/update': function (id, content) {
    content = Forms.cleanModifier(content);
    Collections.content.update(id, {$set: content});
  },
  'api/content/remove': function (id) {
    Collections.content.remove({_id: id});
  }
});