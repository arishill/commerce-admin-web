// definitions
Transactions = (_.isUndefined(Transactions)) ? {} : Transactions;

/* METHODS
.................................................*/

Meteor.methods({
  'api/transactions/create': function (params) {

    // valide transaction object against schema
    if (Transactions.schemas.braintree.context.validate(params.transaction)) {

      // add transaction to mongo database
      Collections.transactions.insert(params.transaction);

      // charge against appropriate gateway
      if (Transactions.config.default_gateway === 'braintree') {
        return Transactions.methods.braintree.charge(params);
      }
      else if (Transactions.config.default_gateway === 'stripe') {
        return Transactions.methods.stripe.charge(params);
      }
    } else {
      console.log('errrors');
    }
  },

  'api/transactions/update': function (params) {
  },

  'api/transactions/token': function () {
    if (Transactions.config.default_gateway === 'braintree') {
      return Transactions.methods.braintree.generateToken();
    }
  }
});