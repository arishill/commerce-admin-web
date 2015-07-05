/* PUBLICATIONS
.................................................*/
Meteor.publish('content', function(path) {
  return Collections.content.find({});
});

Meteor.publish('contentByKey', function(key) {
  console.log(Collections.content.find({key: key}).fetch());
  return Collections.content.find({key: key});
});

Collections.content._ensureIndex('key', { unique: 1 });