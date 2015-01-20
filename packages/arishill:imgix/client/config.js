// definitions
Imgix = (_.isUndefined(Imgix)) ? {} : Imgix;

/* CONFIG
.................................................*/
Imgix.configSource = function(config) {
  Imgix.source = {
    'name': config.name,
    'token': config.token
  };
};

Imgix.definitions = [];