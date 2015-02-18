/* ARISTOTLE TRANSACTIONS CONFIG
.................................................*/
Transactions.setup = function(config) {
  var defaults = {
    default_gateway: 'braintree',
    backup_gateway: 'stripe',
    paypal: {
      enabled: false,
      display_name: '',
      single_use: false,
      locale: 'en_usa',
      enable_shipping: false
    }
  };

  Transactions.config = _.extend({}, defaults, config);

  Transactions.init();
};

Transactions.init = function() {
  Template.aristotle__transaction__form.created = Transactions.callbacks.created;
}