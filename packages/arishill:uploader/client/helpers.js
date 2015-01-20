// definitions

/* UPLOADER HELPERS
.................................................*/

UploaderHelpers = {
  'progress': function(upload_name) {
    var progress = Session.get(upload_name + '_progress'),
        current_progress;

    if (_.isUndefined(progress)) {
      return 0;
    } else {
      return Math.round((progress.done / progress.total) * 100) + '%';
    }
  }
};