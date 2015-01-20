// definitions
Uploader = (_.isUndefined(Uploader)) ? {} : Uploader;

// node requirements
googleAuth  = Npm.require('google-oauth-jwt');

/* AUTHENTICATION
.................................................*/

Uploader.authenticate = function(callback) {
  googleAuth.authenticate({
    email: Uploader.auth.email,
    key: Uploader.auth.pem,
    scopes: ['https://www.googleapis.com/auth/devstorage.read_write']
  }, function (err, token) {
    callback(token);
  });
}
