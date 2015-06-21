
Template.registerHelper('withIndex', function (list) {
  var data = this;

  if (list) {
    if (_.isArray(list)) {
      return _.map(list, function (value, i) {
          value.index = i;
          value.data = data;
          return value;
      });
    } else if (_.isObject(list.collection)) {
      return list.map(function(document, index){
        document.index = index;
        document.data = data;
        return document;
      });
    }
  }
});

Template.registerHelper('withParent', function (list) {
  if (list) {
    if (_.isArray(list)) {
      return _.map(list, function (value, i) {
          value.index = i;
          return value;
      });
    } else if (_.isObject(list.collection)) {
      return list.map(function(document, index){
        document.index = index;
        return document;
      });
    }
  }
});

Template.registerHelper('timestampToDate', function(timestamp, format) {
  var day = moment(timestamp);
  return day.format(format);
});

Template.registerHelper('getDate', function(name, format) {
  switch (name) {
    case 'today':
      var timestamp = Date.now();
      var day = moment(timestamp);
    break;
  }
  return day.format(format);
});

Template.registerHelper('centsToDollarsLabel', function(cents) {
  var symbol = '$';

  cents = _.isNumber(cents) ? cents: 0;

  return symbol + parseFloat(cents / 100).toFixed(2);
});

Template.registerHelper('centsToDollars', function(cents, with_symbol) {
  var symbol = '';

  if (_.isBoolean(with_symbol) && with_symbol) {
    symbol = '$';
  }

  if (_.isNumber(cents)) {
    return symbol + parseFloat(cents / 100).toFixed(2);
  }
});

Template.registerHelper('checkbox', function(name, id, index, checked, size) {
  var checked_attr = index_attr = size_attr = '';

  if (typeof(checked) !== 'undefined' && checked) {
    checked_attr = 'checked';
  }
  if (typeof(size) !== 'undefined' && size) {
    size_attr = 'checkbox--' + size;
  }
  if (typeof(index) !== 'undefined') {
    index_attr = '[' + index + ']';
  }

  return '<div class="checkbox ' + size_attr + '">' +
    '<input type="checkbox" name="' + name + index_attr + '" id="' + id + index_attr + '" ' + checked_attr + '>' +
    '<label for="' + id + index_attr + '">' +
      '<i class="icon-check-site"></i>' +
    '</label>' +
  '</div>';
});

Template.registerHelper('checkboxAlt', function(params) {
  var checked_attr = index_attr = size_attr = '';
  var defaults = {
    id: '',
    name: '',
    index: null,
    checked: false
  }

  params = _.extend({}, defaults, params.hash);

  if (params.checked) {
    checked_attr = 'checked';
  }
  if (params.size) {
    size_attr = 'checkbox--' + params.size;
  }
  if (params.index) {
    index_attr = '[' + index + ']';
  }

  return '<div class="checkbox-alt ' + size_attr + '">' +
    '<input type="checkbox" name="' + params.name + index_attr + '" id="' + params.id + index_attr + '" ' + checked_attr + '>' +
    '<label for="' + params.id + index_attr + '">' +
      '<span class="disc"></span>' +
    '</label>' +
  '</div>';
});

Template.registerHelper('isActiveRoute', function (route_name) {
  if (Iron.Location.get().path.indexOf(route_name) >= 0) {
    return 'is-active';
  }
});

Template.registerHelper('JSONStringify', function (obj) {
  var json = '';

  try {
    json = JSON.stringify(obj);
  } catch (e) {};

  return json;
});