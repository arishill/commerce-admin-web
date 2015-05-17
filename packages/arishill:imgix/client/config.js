// definitions
Imgix = (_.isUndefined(Imgix)) ? {} : Imgix;
Imgix.definitions = [];

/* CONFIG
.................................................*/
Imgix.configSource = function(config) {
  Imgix.source = {
    'name': config.name,
    'token': config.token
  };
};

