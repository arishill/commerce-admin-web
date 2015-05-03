// definitions

/* EVENTS
.................................................*/

// index
Template.aristotle__categories__table.events({
  // remove categories from DB
  'click [data-action="delete"]': function(event, template) {
    Aristotle.events.delete(event, template, {
      collection: 'categories',
      redirect: 'sales_index',
      params: {
        '_id': $(event.target).parents('form').data('id')
      }
    });
  }
});

// form
Template.aristotle__categories__form.events({
  // add items to category
  'click [data-action="add"]': function(event, template) {
    Aristotle.events.addToModel(event, template, {
      arr: $(event.target).data('arr'),
      collection: 'categories',
      doc: 'category'
    });
  },

  // remove items from category
  'click [data-action="remove"]': function(event, template) {
    Aristotle.events.removeFromModel(event, template, {
      arr: $(event.target).data('arr'),
      collection: 'categories',
      index: $(event.target).data('index'),
      doc: 'category'
    });
  },

  // on category form change
  'change form': function(event, template) {
    Aristotle.events.onChange(event, template, {
      doc: 'category',
      form: $(event.target).parents('form')
    });
  },

  // on submission of new category form
  'submit [data-action="create"]': function(event, template) {
    Aristotle.events.save(event, template, {
      redirect: 'sales_index',
      action: 'create',
      collection: 'categories',
      form: $(event.target)
    });
  },

  // on submission of edit category form
  'submit [data-action="update"]': function(event, template) {
    Aristotle.events.save(event, template, {
      redirect: 'sales_index',
      action: 'update',
      collection: 'categories',
      form: $(event.target),
      id: $(event.target).data('id')
    });
  },

  // remove categories from DB
  'click [data-action="delete"]': function(event, template) {
    Aristotle.events.delete(event, template, {
      collection: 'categories',
      redirect: 'sales_index',
      params: {
        '_id': $(event.target).parents('form').data('id')
      }
    });
  }
});