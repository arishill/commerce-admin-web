// definitions
ProductsTemplates = (_.isUndefined(ProductsTemplates)) ? {} : ProductsTemplates;
ProductsTemplates.callbacks = {};

/* EVENTS
.................................................*/

// index
ProductsTemplates.callbacks.index = {
  // created: function() {},
  // rendered: function() {},
  // destroyed: function() {}
};

// create
ProductsTemplates.callbacks.create = {
  created: function() {
    Session.set('product', { variants: [{}] });
  },
  // rendered: function() {},
  destroyed: function() {
    delete Session.keys.product;
  }
};

// edit
ProductsTemplates.callbacks.edit = {
  created: function() {
    var product = ProductsCollection.findOne({url: Router.current().params.url});
    Session.set('product', product);
    Session.set('product_id', product._id);
  },
  // rendered: function() {},
  destroyed: function() {
    delete Session.keys.product;
  }
};

// initiate callbacks
ProductsTemplates.useCallbacks = function(template) {
  _.each(['create','edit','index'], function(item, index, list) {
    template['aristotle__products__' + item].created = ProductsTemplates.callbacks[item].created;
    template['aristotle__products__' + item].rendered = ProductsTemplates.callbacks[item].rendered;
    template['aristotle__products__' + item].destroyed = ProductsTemplates.callbacks[item].destroyed;
  });
};