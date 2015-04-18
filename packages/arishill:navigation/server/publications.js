/* PUBLICATIONS
.................................................*/
Meteor.publish('sections', function() {
  return Collections.sections.find({});
});