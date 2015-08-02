App = {};

Imgix.configSource({
  name: "frenchgarmentcleaners",
  token: "robHviQr"
});

// Aristotle.setup({
//   transactions: {
//     paypal: {
//       enabled: true,
//       display_name: 'Arishill.com',
//       single_use: false,
//       locale: 'en_usa',
//       enable_shipping: false
//     }
//   }
// })

Transactions.setup({
  default_gateway: 'braintree',
  backup_gateway: 'stripe',

  // requires braintree
  paypal: {
    enabled: true,
    display_name: 'Arishill.com',
    single_use: false,
    locale: 'en_usa',
    enable_shipping: false
  }
});


if (Meteor.isClient) {
  var MeteorVersion = Meteor.release.replace(/[.@METRO]+/g, '');
  MeteorVersion += new Array(5 - MeteorVersion.length).join('0');
  if (Number(MeteorVersion) <= 1103) {
    console.log('Updating Tracker.Dependency.prototype.changed function');
    Tracker.Dependency.prototype.changed = function () {
      var self = this;
      for (var id in self._dependentsById) {
        var dependent = self._dependentsById[id];
        if (dependent) dependent.invalidate();
      }
    }
  }
}