// definitions
Schemas = {};

/* GLOBAL SCHEMAS
.................................................*/

// date schema
Schemas.date = function() {
  return new SimpleSchema({
    'created': {
      type: Number,
      optional: true
    },
    'modified': {
      type: Number,
      optional: false
    }
  });
};

// address schema
Schemas.address = {
  usa: {
    line_1: {
      type: String
    },
    line_2: {
      type: String,
      optional: true
    },
    city: {
      type: String
    },
    province: {
      type: String
    },
    postal_code: {
      type: Number
    },
    country_code: {
      type: String
    }
  },
  jpn: {},
  gbr: {}
};

// phone schema
Schemas.phone = {
  usa: function(optional) {
    var obj = {
      type: String
    };

    obj.optional = optional;
    return obj;
  },
  jpn: {},
  gbr: {}
};

// email schema
// Schemas.email = {
//   type: String,
//   regEx: /^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/
// };

// comment schema
Schemas.comment = function(optional) {
  var obj = {
      'user_id': {
        type: String,
      },
      'comment': {
        type: String
      },
      'date': Schemas.dates
    };

  obj.optional = optional;
  return obj;
};

// tax schema
Schemas.tax = function(optioanl) {
  var obj = {
    'key': {
      type: String
    },
    'id': {
      type: String
    },
    'rate': {
      type: Number,
      decimal: true
    },
    'cents': {
      type: Number,
      defaultValue: 0
    }
  };

  obj.optional = optional;
  return obj;
};

// images schema
Schemas.images = function() {
  return {
    type: Object,
    optional: true,
    blackbox: true,
    custom: function() {
      var is_valid = true,
          obj = this.value,
          regex = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/;

      if (_.isObject(obj)) {
        _.each(obj, function(value, key) {
          _.each(value, function(item, index) {
            if (!regex.test(item)) {
              is_valid = false;
            }
          });
        });

        if (!is_valid) {
          return 'regEx';
        }

        return true;
      }
    }
  };
};