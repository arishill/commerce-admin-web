// definitions
Uploader = (_.isUndefined(Uploader)) ? {} : Uploader;

// node requirements
GoogleAuth  = Npm.require('google-oauth-jwt');

/* AUTHENTICATION
.................................................*/

Uploader.authenticate = function(callback) {
  GoogleAuth.authenticate({
    email: Uploader.auth.email,
    key: Uploader.auth.pem,
    scopes: ['https://www.googleapis.com/auth/devstorage.read_write']
  }, function (err, token) {
    callback(token);
  });
}
