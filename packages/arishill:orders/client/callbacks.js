// definitions
OrdersTemplates = (_.isUndefined(OrdersTemplates)) ? {} : OrdersTemplates;
OrdersTemplates.callbacks = {};

/* EVENTS
.................................................*/

// index
OrdersTemplates.callbacks.index = {
  // created: function() {},
  // rendered: function() {},
  // destroyed: function() {}
};

// create
OrdersTemplates.callbacks.create = {
  // created: function() {},
  // rendered: function() {},
  // destroyed: function() {}
};

// edit
OrdersTemplates.callbacks.edit = {
  // created: function() {},
  // rendered: function() {},
  // destroyed: function() {}
};

// initiate callbacks
OrdersTemplates.useCallbacks = function(template) {
  _.each(['create','edit','index'], function(item, index, list) {
    template['aristotle__orders__' + item].created = OrdersTemplates.callbacks[item].created;
    template['aristotle__orders__' + item].rendered = OrdersTemplates.callbacks[item].rendered;
    template['aristotle__orders__' + item].destroyed = OrdersTemplates.callbacks[item].destroyed;
  });
};