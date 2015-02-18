
Template.registerHelper('withIndex', function (all) {
  return _.map(all, function(val, index) {
      return {index: index, value: val};
  });
});

Template.registerHelper('timestampToDate', function(date) {
  if (_.isDate(date)) {
    return new Date(date);
  }
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