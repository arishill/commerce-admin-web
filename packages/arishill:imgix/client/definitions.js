// definitions
Imgix = (_.isUndefined(Imgix)) ? {} : Imgix;

/* CONFIG
.................................................*/
Imgix.addDefinitions = function(definitions) {
  _.each(definitions, function(item, index, list) {
    Imgix.definitions[index] = item;
  });
};