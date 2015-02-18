// definitions
Transactions = (_.isUndefined(Transactions)) ? {} : Transactions;
Transactions.methods = (_.isUndefined(Transactions.methods)) ? {} : Transactions.methods;

// node requirements
var Future = Npm.require('fibers/future');

/* STRIPE METHODS
.................................................*/
Transactions.methods.stripe = {};

Transactions.methods.stripe.charge = function() {

};
