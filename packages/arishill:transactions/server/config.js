// definitions
Transactions = (_.isUndefined(Transactions)) ? {} : Transactions;
Gateway = null;

// node requirements
Braintree  = Npm.require('braintree');

/* ARISTOTLE TRANSACTIONS CONFIG
.................................................*/
Transactions.setup = function(config) {
  Transactions.config = config;

  if (config.default_gateway === 'braintree') {
    Transactions.setupBraintree(config.braintree);
  }
  else if (config.default_gateway === 'stripe') {
    Transactions.setupStripe(config.stripe);
  }
};

// setup braintree
Transactions.setupBraintree = function(config) {

  if (config.environment === 'sandbox') {
    config.environment = Braintree.Environment.Sandbox;
  }

  Gateway = Braintree.connect({
    environment:  config.environment,
    merchantId:   config.merchant_id,
    publicKey:    config.public_key,
    privateKey:   config.private_key
  });
};

// setup stripe
Transactions.setupStripe = function(config) {
};