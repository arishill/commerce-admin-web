// definitions
Fixtures = (_.isUndefined(Fixtures)) ? {} : Fixtures;

/* FIXTURE METHODS
.................................................*/
Fixtures.methods = {

  // add fixtures
  add: function(name, collection) {
    var collection_params = Fixtures.getCollectionParam(collection);

    this.clear();

    _.each(Fixtures[collection][name], function(item, index, list) {

      item = Forms.utils.clean(item);

      colleciton_params.schema.default.clean(item);

      if (colleciton_params.schema.context.validate(item)) {
        Meteor.call(collection_params.create_method, item, function() {

          // entries successfully added
          console.log('Item for ' + name + ' added to application.');
        });

      } else {

        // otherwise handle errors
        console.log('There were errors adding ' + name + ' to the application. See below:');
        console.log(collection_params.schema.context.invalidKeys());
      }
    });
  },

  // clear fixtures
  clear: function(collection) {

    var collection_params = Fixtures.getCollectionParam(collection);

    Meteor.call(collection_params.clear_method, function() {
      console.log('Collection Cleared');
    });
  }
};

Fixtures.getCollectionSchema = function(collection) {
  var obj;

  switch (collection) {
    case 'products':
      obj.schema = Products.schemas;
      obj.create_method = 'api/products/create';
      obj.clear_method = 'api/products/clear';
      break;
    case 'orders':
      obj.schema = Orders.schemas;
      obj.clear_method = 'api/orders/clear';
      break;
  }

  return obj;
};