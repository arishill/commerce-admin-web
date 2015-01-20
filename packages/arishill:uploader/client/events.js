// definitions
var UploaderMethods = {};

/* UPLOADER EVENTS
.................................................*/

UploaderEvents = {
  'change [data-action="upload"]': function(event, template) {
    var target = $(event.target),
        config = {
          target: target,
          key: target.data('action-key'),
          collection: target.data('action-collection'),
          name: target.data('action-name'),
          files: target.prop('files')
        };

    UploaderMethods.incrementProgress(0, config.files.length, target, config.name);

    _.each(config.files, function(item, index, list) {
      var config_instance = _(config).clone();

      config_instance.file = item;
      config_instance.index = index;

      UploaderMethods.run(config_instance);
    });
  }
};

// local methods
UploaderMethods.run = function(config) {
  // define params
  config.params = {
      origin: window.location.protocol + '//' + window.location.hostname,
      name: encodeURI('products/' + config.file.name),
      size: config.file.size,
      type: config.file.type
  };

  // handle simple uploads
  if (config.key === 'simple') {
    UploaderMethods.simple(config);
  }

  // handle resumable uploads
  else if (config.key === 'resumable') {
    UploaderMethods.resumable(config);
  }
};

UploaderMethods.incrementProgress = function(done, total, target, name) {
  var obj = {
    name: name,
    done: done,
    total: total
  };

  target.trigger('upload:progress', [obj]);

  if (obj.done === obj.total) {
    target.trigger('upload:done', [{name: name}]);
  }
};

UploaderMethods.simple = function(config) {
  Meteor.call('api/upload', config.params, function(event, data) {

    Reader.getSimplePost(config.file, data.token, function(params) {
      var filename = encodeURI('products/' + config.file.name),
          uri = 'https://www.googleapis.com/upload/storage/v1/b/' + data.bucket + '/o?uploadType=media&name=' + filename;

      HTTP.post(uri, params, function(event, data, more) {
        console.log(event);
        console.log(data);
      });
    });

  });
};

UploaderMethods.resumable = function(config) {
  Meteor.call('api/upload/resumable', config.params, function(event, data) {

    Reader.getResumablePut(config.file, data.token, function(params) {
      HTTP.put(data.uri, params, function(event, response) {
        if (response.statusCode === 200) {
          UploaderMethods.incrementProgress(config.index + 1, config.files.length, config.target, config.name);
          UploaderMethods.addUrlToField(response.data, config);
        }
      });
    });

  });
};

UploaderMethods.addUrlToField = function(data, config) {
  var url = 'https://storage.googleapis.com/' + data.bucket + '/' + data.name;

  config.target.trigger('upload:complete', [{url: url}]);
};