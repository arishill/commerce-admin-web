App = {};

Imgix.configSource({
  name: 'frenchgarmentcleaners',
  token: 'robHviQr'
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

// definitions

/* IMGIX DEFINITIONS
.................................................*/
Imgix.addDefinitions({
  'cascade': {
    w: 200,
    sat: -100
  },
  'gallery': {
    w: 500,
    sat: 400
  }
});