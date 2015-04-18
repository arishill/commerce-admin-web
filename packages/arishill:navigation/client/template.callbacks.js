Template.aristotle__nav__secondary.onCreated(function() {
  var instance = this;

  instance.subscribe('sections');

  instance.sections = function() {
    return Collections.sections.find({});
  }
});