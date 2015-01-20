OrdersTemplates = (_.isUndefined(OrdersTemplates)) ? {} : OrdersTemplates;
OrdersTemplates.helpers = {};

/* HELPERS
.................................................*/

// index
OrdersTemplates.helpers.index = {};

// create
OrdersTemplates.helpers.create = {};

// edit
OrdersTemplates.helpers.edit = {};

// shared
OrdersTemplates.helpers.form = {
  isChecked: function(checkbox) {
    if (parseInt(checkbox)) {
      return 'checked';
    }
  },
  orderError: function(key, index) {
    if (_.isNumber(index)) {
      key = key.replace('{i}', index);
    }
    if (Orders.schemas.context.keyIsInvalid(key)) {
      return 'is-error';
    }
  },
  orderErrorMsg: function(key, index) {
    if (_.isNumber(index)) {
      key = key.replace('{i}', index);
    }
    return Orders.schemas.context.keyErrorMessage(key);
  }
};


// initiate helpers
OrdersTemplates.useHelpers = function(template) {
  _.each([

    ], function(item, index, list) {
      Template['aristotle__orders__' + item].helpers(OrdersTemplates.helpers.form);
    });

  Template.aristotle__orders__index.helpers(OrdersTemplates.helpers.index);
  Template.aristotle__orders__index.helpers(OrdersTemplates.helpers.create);
  Template.aristotle__orders__index.helpers(OrdersTemplates.helpers.edit);
};