// definitions
Transactions = (_.isUndefined(Transactions)) ? {} : Transactions;
Transactions.methods = (_.isUndefined(Transactions.methods)) ? {} : Transactions.methods;

// node requirements
var Future = Npm.require('fibers/future');

/* BRAINTREE METHODS
.................................................*/
Transactions.methods.braintree = {};

Transactions.methods.braintree.generateToken = function() {
  var future = new Future();

  Gateway.clientToken.generate({}, function (err, response) {
    future.return({
      token: response.clientToken
    });
  });

  return future.wait();
};

Transactions.methods.braintree.charge = function(params) {
  var self = this,
      future = new Future(),
      transaction = params.transaction;

  transaction = Transactions.methods.braintree.createSaleObjectFromParams(transaction);
  Transactions.schemas.braintree.clean(transaction);

  if (Transactions.schemas.braintree.context.validate(transaction)) {
      transaction = self.addRequiredParameters(transaction);

      Gateway.transaction.sale(transaction, function(error, result) {
        self.responseHandler(error, result, future);
      });

      return future.wait();
  }
  else {
    console.log('validation errors');
    console.log(Transactions.schemas.braintree.context.invalidKeys());
  }
};

Transactions.methods.braintree.createSaleObjectFromParams = function(transaction) {
  return {
    'paymentMethodNonce': transaction.token,
    'amount': transaction.amount,
    'customer': {
      firstName: transaction.card.name
    },
    'billing': {
      postalCode:  transaction.card.postal_code
    }
  };
};

Transactions.methods.braintree.settlePayment = function(params) {
  var self = this,
      future = new Future();

  Gateway.transaction.submitForSettlement(params.transaction_id, params.amount, function(error, result) {
    self.responseHandler(error, result, future);
  });
};

Transactions.methods.braintree.addRequiredParameters = function(transaction) {
  // set merchant id
  if (!_.isUndefined(Transactions.config.braintree.merchant_account_id)) {
    transaction.merchantAccountId = Transactions.config.braintree.merchant_account_id;
  }

  // set channel
  if (!_.isUndefined(Transactions.config.braintree.channel)) {
    transaction.channel = Transactions.config.braintree.channel;
  }

  // booleans for authorize vs immediate payment and for storing card in vault
  transaction.options = {
    submitForSettlement: !Transactions.config.authorize_only,
    storeInVaultOnSuccess: (_.isBoolean(transaction.store_card)) ? transaction.store_card : Transactions.config.store_card
  };

  return transaction;
};


Transactions.methods.braintree.responseHandler = function(error, result, future) {
  if (_.isObject(error)) {
    future.return(error);
  }
  else if (result.success) {
    future.return();
  }
  else if (result.errors.deepErrors() > 0) {
    future.return(result.errors);
  }
  else {
    future.return(result);
  }
};