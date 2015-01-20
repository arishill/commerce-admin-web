var Future = Npm.require('fibers/future');

Meteor.methods({

  // simple upload
  'api/upload': function (upload) {
    var future = new Future(),
        name = encodeURIComponent(upload.name);

    Uploader.authenticate(function(token) {
      future.return({
        bucket: Uploader.bucket,
        token: token
      });
    });

    return future.wait();
  },

  // resumable upload
  'api/upload/resumable': function (upload) {
    var future = new Future(),
        name = encodeURIComponent(upload.name);

    Uploader.authenticate( Meteor.bindEnvironment(
      function(token) {
        var url = 'https://www.googleapis.com/upload/storage/v1/b/' + Uploader.bucket + '/o?uploadType=resumable&name=' + name,
            params = {
              timeout: 5000,
              headers: {
                'Origin': upload.origin,
                'Content-Length': '0',
                'X-Upload-Content-Type': upload.type,
                'X-Upload-Content-Length': upload.size,
                "Authorization": "Bearer " + token
              }
            };

        HTTP.post(url, params, function(event, data, body) {
          future.return({
            uri: data.headers.location,
            token: token
          });
        });
      },
      function() {
      }
    ));

    return future.wait();
  }
});