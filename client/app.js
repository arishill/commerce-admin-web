App = {};

Imgix.configSource({
  name: Meteor.settings.imgix.name,
  token: Meteor.settings.imgix.token
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
