// definitions
Forms = (_.isUndefined(Forms)) ? {} : Forms;
Forms.utils = (_.isUndefined(Forms.utils)) ? {} : Forms.utils;

/* DOLLARS TO CENTS
.................................................*/
Forms.utils.clean = function(obj) {
  _.each(obj, function(item, index, list) {
    if (index === 'url') {
      obj[index] = Forms.utils.cleanUrl(item);
    }
  });

  return obj;
};

Forms.utils.cleanUrl = function(url) {
  return url
          // only accept alphanumeric, hyphens, underscores, and space
          .replace(/[^A-Za-z0-9\-\_ ]/g,'')
          // replace multi spaces with a single space
          .replace(/\s{2,}/g,' ')
          // replace underscores with hyphens
          .replace(/\_/g, "-")
          // replace spaces with hyphens
          .replace(/\s/g, "-")
          // to lowercase
          .toLowerCase();
};