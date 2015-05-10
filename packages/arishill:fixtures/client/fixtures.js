// definitions
Fixtures = (_.isUndefined(Fixtures)) ? {} : Fixtures;

/* FIXTURE METHODS
.................................................*/
Fixtures.methods = {

  // add fixtures
  add: function(name, collection) {

    // get the necessary params based on the collection type
    var collection_params = Fixtures.getCollectionParams(collection);

    // clear out existing collection
    this.clear(collection);

    if (name === 'defaults') {
      Meteor.call(collection_params.create_method, Fixtures[collection][name], function() {
        console.log('Collection for ' + name + ' added to application.');
      });
    }

    else {
      // iterate through each fixture entry
      _.each(Fixtures[collection][name], function(item, index, list) {

        // clean it up first
        item = Forms.utils.clean(item);

        if (collection_params.schema) {
          collection_params.schema.default.clean(item);

          // validate against collection type schema
          if (!collection_params.schema.context.validate(item)) {
          // entry does not validate against the schema
            console.log('There were errors adding ' + name + ' to the application. See below:');
            console.log(collection_params.schema.context.invalidKeys());
            return;
          }
        }

        // create/insert into db
        Meteor.call(collection_params.create_method, item, function() {
          // entries successfully added
          console.log('Item for ' + name + ' added to application.');
        });
      });
    }
  },

  // clear fixtures
  clear: function(collection) {

    // get the necessary params based on the collection type
    var collection_params = Fixtures.getCollectionParams(collection);

    // call to remove all items from collection (development only)
    Meteor.call(collection_params.clear_method, function() {
      console.log('Collection Cleared');
    });
  },

  fillOrder: function() {
    $('[name="billing[email]"]').val('human@arishill.com');
    $('[name="billing[phone]"]').val('123-456-3456');
    $('[name="billing[name][first]"]').val('Human');
    $('[name="billing[name][last]"]').val('Being');
    $('[name="billing[address][line_1]"]').val('639 Chellio St.');
    $('[name="billing[address][city]"]').val('Augember');
    $('[name="billing[address][province]"]').val('CA');
    $('[name="billing[address][postal_code]"]').val('06039');
    $('[name="billing[address][country_code]"]').val('United States');
  },
  fillInvoice: function() {},
  fillProduct: function() {},
  fillCheckout: function() {
    $('[data-card-number]').val('4111111111111111');
    $('[data-card-name]').val('Garland Bear');
    $('[data-card-expiry-year]').val('24');
    $('[data-card-expiry-month]').val('12');
    $('[data-card-cvc]').val('123');
    $('[data-card-postal-code]').val('94043');
  }
};

Fixtures.getCollectionParams = function(collection) {
  switch (collection) {

    // products collection
    case 'products':
      return {
        schema: Schemas.collections.products,
        create_method: 'api/products/create',
        clear_method: 'api/products/clear'
      };

    // orders collection
    case 'orders':
      return {
        schema: Schemas.collections.orders,
        create_method: 'api/orders/create',
        clear_method: 'api/orders/clear'
      };

  // discounts collection
    case 'discounts':
      return {
        //schema: Schemas.collections.discounts,
        create_method: 'api/discounts/create',
        clear_method: 'api/discounts/clear'
      };
    default:
      return {
        //schema: Schemas.collections[collection],
        create_method: 'api/' + collection + '/create',
        clear_method: 'api/'+ collection + '/clear'
      };
  }
};