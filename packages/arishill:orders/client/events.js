// definitions

/* EVENTS
.................................................*/

// index
Template.aristotle__sales__table.events({
  // remove orders from DB
  'click [data-action="delete"]': function(event, template) {
    Aristotle.events.delete(event, template, {
      collection: 'orders',
      redirect: 'sales_index',
      params: {
        '_id': $(event.target).parents('form').data('id')
      }
    });
  }
});

// form
Template.aristotle__orders__form.events({
  // add items to order
  'click [data-action="add"]': function(event, template) {
    Aristotle.events.addToModel(event, template, {
      arr: $(event.target).data('arr'),
      collection: 'orders',
      doc: 'order'
    });
  },

  // remove items from order
  'click [data-action="remove"]': function(event, template) {
    Aristotle.events.removeFromModel(event, template, {
      arr: $(event.target).data('arr'),
      collection: 'orders',
      index: $(event.target).data('index'),
      doc: 'order'
    });
  },

  // on order form change
  'change form': function(event, template) {
    Aristotle.events.onChange(event, template, {
      doc: 'order',
      form: $(event.target).parents('form')
    });
  },

  // on submission of new order form
  'submit [data-action="create"]': function(event, template) {
    Aristotle.events.save(event, template, {
      redirect: 'sales_index',
      action: 'create',
      collection: 'orders',
      form: $(event.target)
    });
  },

  // on submission of edit order form
  'submit [data-action="update"]': function(event, template) {
    Aristotle.events.save(event, template, {
      redirect: 'sales_index',
      action: 'update',
      collection: 'orders',
      form: $(event.target),
      id: $(event.target).data('id')
    });
  },

  // remove orders from DB
  'click [data-action="delete"]': function(event, template) {
    Aristotle.events.delete(event, template, {
      collection: 'orders',
      redirect: 'sales_index',
      params: {
        '_id': $(event.target).parents('form').data('id')
      }
    });
  }
});