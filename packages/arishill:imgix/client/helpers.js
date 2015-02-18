// definitions

/* IMGIX HELPERS
.................................................*/
Template.registerHelper('imgix', function(url, definition) {
  var definition = Imgix.definitions[definition];

  image = new imgix.URL('https://' + Imgix.source.name + '.imgix.net/' + url, definition, Imgix.source.token);

  return image.getUrl();
});