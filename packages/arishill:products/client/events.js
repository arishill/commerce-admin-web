// definitions
ProductsTemplates = (_.isUndefined(ProductsTemplates)) ? {} : ProductsTemplates;
ProductsTemplates.events = {};

/* EVENTS
.................................................*/

// index
ProductsTemplates.events.index = {
  'click [data-action="remove"]': function(event, template) {
    console.log(this);
    console.log(template);
  }
};

// form
ProductsTemplates.events.form = {
  'click [data-action="add"]': function(event, template) {
    var key = $(event.target).data('action-key');

    if (key === 'product.variant') {
      obj = Session.get('product');
      obj.variants.push({});

      Session.set('product', obj);
    }
  },

  'click [data-action="remove"]': function(event, template) {
    var key = $(event.target).data('action-key'),
        index;

    if (key === 'product.variant') {
      index = $(event.target).data('action-index');
      obj = Session.get('product');
      obj.variants.splice(index, 1);

      Session.set('product', obj);
    }

    if (key === 'product') {
      var id = Session.get('product_id');

      Meteor.call('api/products/remove', id, function() {
        // redirect after success
        Router.go('products_index');
     });
    }
  },

  'change form[data-action-key="product"]': function() {
    var obj = Forms.utils.serializeObject($('form[data-action-key="product"]'));

    Session.set('product', obj);
  },

  'submit [data-action="update"]': function(event, template) {
    // get the time (UTC) and product ID
    var now = new Date().getTime(),
        product_id = Session.get('product_id');

    // prevent the form from posting
    event.preventDefault();

    // serialize form data
    product = Forms.utils.serializeObject($(event.target));

    // set modified timestamps with now
    product.date = {
      modified: now
    };

    // clean product to schema
    product = Forms.utils.clean(product);
    Products.schemas.default.clean(product);

    // assign unique sku
    _.each(product.variants, function(item, index, list) {
      if (_.isUndefined(item.sku)) {
        item.sku = Random.id([7]);
      }
    });

    // validate product against schema
    if (Products.schemas.context.validate(product)) {

      // call create method
      Meteor.call('api/products/update', product_id, product, function() {

        // redirect after success
        Router.go('products_index');
      });

    } else {
      // otherwise handle errors
      console.log('fail!');
      console.log(Products.schemas.context.invalidKeys());
    }
  },

  'submit [data-action="create"]': function(event, template) {
    // get the time (UTC)
    var now = new Date().getTime();

    // prevent the form from posting
    event.preventDefault();

    // serialize form data
    product = Forms.utils.serializeObject($(event.target));

    // set created/modified timestamps with now
    product.date = {
      modified: now,
      created: now
    };

    // assign unique sku
    _.each(product.variants, function(item, index, list) {
      item.sku = Random.id([7]);
    });

    // clean product to schema
    product = Forms.utils.clean(product);
    Products.schemas.default.clean(product);

    // validate product against schema
    if (Products.schemas.context.validate(product)) {

      // call create method
      Meteor.call('api/products/create', product, function() {

        // redirect after success
        Router.go('products_index');
      });

    } else {
      // otherwise handle errors
      console.log('fail!');
      console.log(Products.schemas.context.invalidKeys());
    }
  }
};

// initiate events
ProductsTemplates.useEvents = function(template) {
  Template.aristotle__products__form.events(ProductsTemplates.events.form);
  Template.aristotle__products__index.events(ProductsTemplates.events.index);
};