/* UPLOADER HELPERS
.................................................*/
Template.registerHelper('progress', function(name) {
  return (_.isObject(Uploader.instances[name])) ? Math.ceil(Uploader.instances[name].getProgress()) : 0;
});