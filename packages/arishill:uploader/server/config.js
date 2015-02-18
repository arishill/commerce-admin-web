// definitions
Uploader = (_.isUndefined(Uploader)) ? {} : Uploader;

/* CONFIGURATION
.................................................*/
Uploader.config = function(options) {
  // auth
  this.auth = {
    pem: options.pem,
    email: options.email
  };

  // bucket
  this.bucket = options.bucket;
};