// definitions

/* EVENTS
.................................................*/

// index
Template.aristotle__products__index.events({
  'click [data-load-more]': function(event, template) {
     event.preventDefault();

    var limit = template.limit.get();

    limit += parseInt(Iron.Location.get().queryObject.limit) || 10;
    template.limit.set(limit);
  },

  'keypress [data-search]': function(event, template) {
    console.log(event.which);
    if (event.which === 13) {
      event.preventDefault();
      query = $(event.target).val();
      template.query.set(query);
    }
  },

  'keydown [data-search]': function(event, template) {
    if (event.which === 27) {
      event.preventDefault();
      $(event.target).val('');
      template.query.set('');
    }
  }

});

// table row
Template.aristotle__products__table_row.events({
  // on submission of edit product form
  'submit [data-action="update"]': function(event, template) {
    Aristotle.events.save(event, template, {
      action: 'update',
      collection: 'products',
      form: $(event.target),
      id: $(event.target).data('id')
    });
  },

  // show sale price on hover
  'mouseenter .js-sale-toggle label': function(event, template) {
    $(event.target).closest('tr').find('.is-transparent-mid.text-yellow').removeClass('is-hidden');
  },

  'mouseleave .js-sale-toggle label': function(event, template) {
    $(event.target).closest('tr').find('.is-transparent-mid.text-yellow').addClass('is-hidden');
  },

  // remove categories from DB
  'submit [data-action="delete"]': function(event, template) {
    var form = $(event.target);

    Aristotle.events.confirm(event, form, function() {
      Aristotle.events.delete(event, template, {
        collection: 'products',
        params: {
          '_id': form.data('id')
        },
        callback: function() {
          Meteor.call('api/products/count', function(error, count) {
            Session.set('products_count', count)
          });
        }
      });
    });
  },

  'change .checkbox-alt': function(event, template) {
    Aristotle.events.save(event, template, {
      action: 'update',
      collection: 'products',
      form: $(event.target).closest('form'),
      id: $(event.target).closest('form').data('id')
    });
  }
});