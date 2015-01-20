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

  'upload:progress [data-action=upload]': function(event, template, data) {
    Session.set(data.name + '_progress', data);
  },

  'upload:done [data-action=upload]': function(event, template, data) {
    setTimeout(function() {
      delete Session.keys[data.name + '_progress'];
    }, 3000);
  },

  'upload:complete [data-action=upload]': function(event, template, data) {
    var obj = Session.get('product'),
        image_name = $(event.target).data('action-name') + '[0]',
        image_obj = Forms.utils.serializeHelpers.handleMultiDimen(image_name, null, data.url, {}),
        key = image_name.split(/[[\]]{1,2}/);

    key.length--;
    obj.images = (_.isUndefined(obj.images)) ? {} : obj.images;
    obj.images[key[1]] = (_.isUndefined(obj.images[key[1]])) ? [] : obj.images[key[1]];

    _.each(image_obj.images[key[1]], function(item, index, list) {
      obj.images[key[1]].push(item);
    });

    Session.set('product', obj);
  },

  'change form[data-action-key="product"]': function() {
    var obj = Forms.utils.serializeObject($('form[data-action-key="product"]'));

    Session.set('product', obj);
  },

  'submit [data-action="update"]': function(event, template) {
    // get the time (UTC) and product ID
    var now = moment().valueOf(),
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

    Products.schemas.default.clean(product, { filter: false});

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
    var now = moment().valueOf();

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

    Products.schemas.default.clean(product, { filter: false});

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
ProductsTemplates.useEvents = function(Template) {
  var form_events =  _.extend({}, ProductsTemplates.events.form, UploaderEvents);

  Template.aristotle__products__form.events(form_events);
  Template.aristotle__products__index.events(ProductsTemplates.events.index);
};