// definitions
OrdersTemplates = (_.isUndefined(OrdersTemplates)) ? {} : OrdersTemplates;
OrdersTemplates.events = {};

/* EVENTS
.................................................*/

// index
OrdersTemplates.events.index = {
  'click [data-action="remove"]': function(event, template) {
  }
};

// form
OrdersTemplates.events.form = {
  'click [data-action="add"]': function(event, template) {
    var key = $(event.target).data('action-key');

    if (key === 'order.item') {
    }
  },

  'click [data-action="remove"]': function(event, template) {
    var key = $(event.target).data('action-key'),
        index;

    if (key === 'order.item') {
    }

    if (key === 'order') {
      var id = Session.get('order_id');

      Meteor.call('api/orders/remove', id, function() {
        // redirect after success
        Router.go('orders_index');
     });
    }
  },

  'change form[data-action-key="order"]': function() {
    var obj = Forms.utils.serializeObject($('form[data-action-key="order"]'));

    Session.set('order', obj);
  },

  'submit [data-action="update"]': function(event, template) {
    // get the time (UTC) and order ID
    var now = new Date().getTime(),
        order_id = Session.get('order_id');

    // prevent the form from posting
    event.preventDefault();

    // serialize form data
    order = Forms.utils.serializeObject($(event.target));

    // set modified timestamps with now
    order.date = {
      modified: now
    };

    // clean order to schema
    order = Forms.utils.clean(order);
    Orders.schemas.default.clean(order);

    // validate order against schema
    if (Orders.schemas.context.validate(order)) {

      // call create method
      Meteor.call('api/orders/update', order_id, order, function() {

        // redirect after success
        Router.go('orders_index');
      });

    } else {
      // otherwise handle errors
      console.log('fail!');
      console.log(Orders.schemas.context.invalidKeys());
    }
  },

  'submit [data-action="create"]': function(event, template) {
    // get the time (UTC)
    var now = new Date().getTime();

    // prevent the form from posting
    event.preventDefault();

    // serialize form data
    order = Forms.utils.serializeObject($(event.target));

    // set created/modified timestamps with now
    order.date = {
      modified: now,
      created: now
    };

    // clean order to schema
    order = Forms.utils.clean(order);
    Orders.schemas.default.clean(order);

    // validate order against schema
    if (Orders.schemas.context.validate(order)) {

      // call create method
      Meteor.call('api/orders/create', order, function() {

        // redirect after success
        Router.go('orders_index');
      });

    } else {
      // otherwise handle errors
      console.log('fail!');
      console.log(Orders.schemas.context.invalidKeys());
    }
  }
};

// initiate events
OrdersTemplates.useEvents = function(template) {
  Template.aristotle__orders__form.events(OrdersTemplates.events.form);
  Template.aristotle__orders__index.events(OrdersTemplates.events.index);
};