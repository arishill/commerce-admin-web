/* METHODS
.................................................*/

if (Meteor.settings.env === 'development') {
  Meteor.methods({
    'api/products/clear': function () {
      ProductsCollection.remove({});
    }
  });
}