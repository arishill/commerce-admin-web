// definitions

/* EVENTS
.................................................*/

// index
Template.aristotle__invoices__table.events({
  // remove invoices from DB
  'click [data-action="delete"]': function(event, template) {
    Aristotle.events.delete(event, template, {
      collection: 'invoices',
      redirect: 'sales_index',
      params: {
        '_id': $(event.target).parents('form').data('id')
      }
    });
  }
});

// form
Template.aristotle__invoices__form.events({
  // add items to invoice
  'click [data-action="add"]': function(event, template) {
    Aristotle.events.addToModel(event, template, {
      arr: $(event.target).data('arr'),
      collection: 'invoices',
      doc: 'invoice'
    });
  },

  // remove items from invoice
  'click [data-action="remove"]': function(event, template) {
    Aristotle.events.removeFromModel(event, template, {
      arr: $(event.target).data('arr'),
      collection: 'invoices',
      index: $(event.target).data('index'),
      doc: 'invoice'
    });
  },

  // on invoice form change
  'change form': function(event, template) {
    Aristotle.events.onChange(event, template, {
      doc: 'invoice',
      form: $(event.target).parents('form')
    });
  },

  // on submission of new invoice form
  'submit [data-action="create"]': function(event, template) {
    Aristotle.events.save(event, template, {
      redirect: 'sales_index',
      action: 'create',
      collection: 'invoices',
      form: $(event.target)
    });
  },

  // on submission of edit invoice form
  'submit [data-action="update"]': function(event, template) {
    Aristotle.events.save(event, template, {
      redirect: 'sales_index',
      action: 'update',
      collection: 'invoices',
      form: $(event.target),
      id: $(event.target).data('id')
    });
  },

  // remove invoices from DB
  'click [data-action="delete"]': function(event, template) {
    Aristotle.events.delete(event, template, {
      collection: 'invoices',
      redirect: 'sales_index',
      params: {
        '_id': $(event.target).parents('form').data('id')
      }
    });
  }
});