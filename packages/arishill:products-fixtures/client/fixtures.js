// definitions
ProductsFixtures = (_.isUndefined(ProductsFixtures)) ? {} : ProductsFixtures;

/* FIXTURE METHODS
.................................................*/
ProductsFixtures.methods = {

  // add fixtures
  add: function(name) {
    this.clear();

    _.each(ProductsFixtures.db[name], function(item, index, list) {

      item = Forms.utils.clean(item);
      Products.schemas.default.clean(item);

      if (Products.schemas.context.validate(item)) {
        Meteor.call('api/products/create', item, function() {

          // entries successfully added
          console.log('Item for ' + name + ' added to application.');
        });

      } else {

        // otherwise handle errors
        console.log('There were errors adding ' + name + ' to the application. See below:');
        console.log(Products.schemas.context.invalidKeys());
      }
    });
  },

  // clear fixtures
  clear: function() {
    Meteor.call('api/products/clear', function() {
      console.log('Products Collection Cleared');
    });
  }
}