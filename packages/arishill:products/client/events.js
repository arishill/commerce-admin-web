// definitions

/* EVENTS
.................................................*/

// form
Template.aristotle__products__form.events({
  // add items to product
  'click [data-action="add"]': function(event, template) {
    Aristotle.events.addToModel(event, template, {
      arr: $(event.target).data('arr'),
      collection: 'products',
      doc: 'product'
    });
  },

  // remove items from product
  'click [data-action="remove"]': function(event, template) {
    Aristotle.events.removeFromModel(event, template, {
      arr: $(event.target).data('arr'),
      collection: 'products',
      index: $(event.target).data('index'),
      doc: 'product'
    });
  },

  // on product form change
  'change form': function(event, template) {
    Aristotle.events.onChange(event, template, {
      doc: 'product',
      form: $(event.target).parents('form')
    });
  },

  // on submission of new product form
  'submit [data-action="create"]': function(event, template) {
    Aristotle.events.save(event, template, {
      redirect: 'products_index',
      action: 'create',
      collection: 'products',
      addTo: function(product) {
        // assign unique sku
        _.each(product.variants, function(item, index, list) {
          if (_.isUndefined(item.sku)) {
            item.sku = Random.id([7]);
          }
        });

        return product;
      },
      form: $(event.target)
    });
  },

  // on submission of edit product form
  'submit [data-action="update"]': function(event, template) {
    Aristotle.events.save(event, template, {
      redirect: 'products_index',
      action: 'update',
      collection: 'products',
      addTo: function(product) {
        // assign unique sku
        _.each(product.variants, function(item, index, list) {
          if (_.isUndefined(item.sku)) {
            item.sku = Random.id([7]);
          }
        });

        return product;
      },
      form: $(event.target),
      id: $(event.target).data('id')
    });
  },

  // remove products from DB
  'click [data-action="delete"]': function(event, template) {
    Aristotle.events.delete(event, template, {
      collection: 'products',
      redirect: 'products_index',
      params: {
        '_id': $(event.target).parents('form').data('id')
      }
    });
  }
});