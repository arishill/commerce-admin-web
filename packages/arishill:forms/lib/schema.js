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
Schemas.address = function(country) {
  var obj = {
    'usa': new SimpleSchema({
      'line_1': {
        type: String
      },
      'line_2': {
        type: String,
        optional: true
      },
      'city': {
        type: String
      },
      'province': {
        type: String
      },
      'postal_code': {
        type: Number
      },
      'country_code': {
        type: String
      }
    })
  };

  return obj[country];
};

// phone schema
Schemas.phone = function(name, optional) {
  var obj = {
    usa: {
      type: String,
      regEx: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
    },
    jpn: {
      type: String
    },
    gbr: {
      type: String
    }
  };

  if (optional) {
    obj[name].optional = true;
  }
  return obj[name];
};

// email schema
Schemas.email = function() {
  var obj = {
      type: String,
      regEx: new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')
    };

  return obj;
};

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
Schemas.tax = function() {
  var obj = new SimpleSchema({
    'key': {
      type: String,
      optional: true
    },
    'id': {
      type: String,
      optional: true
    },
    'rate': {
      type: Number,
      decimal: true,
      optional: true
    },
    'cents': {
      type: Number,
      defaultValue: 0
    }
  });

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

// credit card schema
Schemas.credit_card = function() {
  var obj = new SimpleSchema({
    'type': {
      type: String,
      label: 'Card type',
      regEx: /(^visa$|^amex$|^mastercard$|^discover$|^jcb$|^diners$)/
    },
    'last_4': {
      type: Number,
      regEx: /^\d{4}$/
    },
    'expiry': {
      type: Object
    },
    'expiry.month': {
        type: Number,
        min: 1,
        max: 12
    },
    'expiry.year': {
      type: Number,
      regEx: /^\d{4}\d*$/
    }
  });

  return obj;
};