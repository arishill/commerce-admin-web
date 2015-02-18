// definitions
Forms.card = {
  'validate': {},
  'current': {},
  'methods': {},
  'callbacks': {},
  'error_messages': {}
}

Meteor.startup(function() {
  Forms.card.tracker = new Tracker.Dependency();
});