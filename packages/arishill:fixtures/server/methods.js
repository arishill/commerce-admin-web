/* METHODS
.................................................*/

if (Meteor.settings.env === 'development') {
  Meteor.methods({
    'api/products/clear': function () {
      Collections.products.remove({});
    },
    'api/orders/clear': function () {
      Collections.orders.remove({});
    }
  });
}