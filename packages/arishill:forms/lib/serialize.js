/* SERIALIZE OBJECT METHOD
.................................................*/
Forms.utils.serializeObject = function(form_el) {
  var obj = {};

  // iterate through each form field
  form_el.find('[name]').each(function(index, item){
    var name = $(item).attr('name'),
        helpers = Forms.utils.serializeHelpers,
        value = helpers.parseValue(item),
        regex = /^.*\[.*\]$/;

    if (regex.test(name)) {
      // mutli-dimensional array (or object)
      obj = helpers.handleMultiDimen(name, item, value, obj);
    } else {
      // standard name and value
      obj[name] = value;
    }
  });

  // all done, return the serialized object
  return obj;
};

/* SERIALIZE HELPERS
.................................................*/
Forms.utils.serializeHelpers = {

  parseStringToObject: function(str, obj) {
    var parts = str.split("."),
        i;

    for (i = 0; i < parts.length; ++i) {
      obj = obj[parts[i]];
    }

    return obj;
  },

  parseValue: function(item) {
    if ($(item).attr('name').indexOf('_cents') !== -1 && !_.isNaN(parseFloat($(item).val()))) {
      return Forms.utils.dollarsToCents($(item).val());
    } else if ($(item).attr('type') === 'checkbox') {
      return $(item).is(':checked') ? true : false;
    } else {
      return $(item).val();
    }
  },

  parseForNumber: function(name) {
    return (isNaN(parseInt(name))) ? name : parseInt(name);
  },

  defineObj: function(obj, num) {
    if (typeof(obj) === 'undefined') {
      return (_.isNumber(num)) ? [] : {};
    } else {
      return obj;
    }
  },

  handleMultiDimen: function(name, item, value, obj) {
    var _this = this,
        num,
        num_sub;

    name = name.replace(/\]/gi, '').split('[');

    if (name.length === 2) {
      // field[name]
      num = _this.parseForNumber(name[1]);
      obj[name[0]] = _this.defineObj(obj[name[0]], null);
      obj[name[0]][num] = value;

    } else if (name.length > 2) {
      // field[0]... vs // field[name]...
      num = _this.parseForNumber(name[1]);
      obj[name[0]] = _this.defineObj(obj[name[0]], num);

      // field[...][0] vs // field[...][name]
      num_sub = _this.parseForNumber(name[2]);
      obj[name[0]][num] = _this.defineObj(obj[name[0]][num], num_sub);

      if (name.length === 3) {
        // field[x][x] = value
        obj[name[0]][num][num_sub] = value;

      } else if (name.length === 4) {
        // field[x][x][x] = value
        obj[name[0]][num][num_sub] = _this.defineObj(obj[name[0]][num][num_sub], num_sub);
        obj[name[0]][num][num_sub][name[3]] = value;
      }
    }
    return obj;
  }
};
