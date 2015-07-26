
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

Template.registerHelper('isActiveRoute', function (route_name) {
  var route = route_name.split('_')[0];
  if (Router.current().location.get().path.indexOf(route) >= 0) {
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