// definitions
Uploader = {};
Uploader.methods = {};
Uploader.instances = {};

/* UPLOADER EVENTS
.................................................*/
Uploader.setup = function(template) {
  Template[template].events ({
    'click [data-trigger="upload"]': function(event, template) {
      var target = $(event.target).data('target');

      event.preventDefault();

      $('[data-name="' + target + '"]').trigger('click');
    },

    'change [data-action="upload"]': function(event, template) {
      var target = $(event.target),
          config = {
            target: target,
            key: target.data('key'),
            collection: target.data('collection'),
            name: target.data('name'),
            files: target.prop('files')
          };

      if (_.isUndefined(Uploader.instances[config.name])) {
        Uploader.instances[config.name] = {
          progress: 0,
          tracker: new Tracker.Dependency,
          getProgress: function() {
            Uploader.instances[config.name].tracker.depend();
            return Uploader.instances[config.name].progress;
          }
        };
      }

      _.each(config.files, function(item, index, list) {
        var config_instance = _(config).clone();

        config_instance.file = item;
        config_instance.index = index;
        config_instance.name = config.name;

        Uploader.methods.run(config_instance);
      });
    }
  });
};

// local methods
Uploader.methods.run = function(config) {
  // define params
  config.params = {
      origin: window.location.protocol + '//' + window.location.hostname,
      name: encodeURI('products/' + config.file.name),
      size: config.file.size,
      type: config.file.type
  };

  // handle simple uploads
  if (config.key === 'simple') {
    Uploader.methods.simple(config);
  }

  // handle resumable uploads
  else if (config.key === 'resumable') {
    Uploader.methods.resumable(config);
  }
};

Uploader.methods.incrementProgress = function(done, total, target, name) {
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

Uploader.methods.simple = function(config) {
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

Uploader.methods.resumable = function(config) {
  Meteor.call('api/upload/resumable', config.params, function(event, data) {

    Reader.getResumablePut(config.file, data.token, function(params) {
      params.onProgress = function(event) {
        config.target.trigger('upload:progress', [{loaded: event.loaded, total: event.total }]);
        Uploader.instances[config.name].progress = ( event.loaded / event.total * 100);
        Uploader.instances[config.name].tracker.changed();
      };
      XHR.call('put', data.uri, params, function(event, response) {
        if (response.statusCode === 200) {
          Uploader.instances[config.name].progress = 0;
          Uploader.instances[config.name].tracker.changed();
          Uploader.methods.addUrlToField(response.data, config);
        }
      });
    });

  });
};

Uploader.methods.addUrlToField = function(data, config) {
  var url = 'https://storage.googleapis.com/' + data.bucket + '/' + data.name;

  config.target.trigger('upload:complete', [{url: url}]);
};