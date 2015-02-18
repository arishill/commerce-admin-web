/* ARISTOTLE TEMPLATE CALLBACKS
.................................................*/
Transactions.callbacks.created = function() {
  Forms.card.setup();
  // braintree gateway — need to generate token server side for transactions
  if (Transactions.config.default_gateway === 'braintree') {
    Meteor.call('api/transactions/token', function(event, data) {

      Session.set('transaction_token', data.token);

      // paypal is enabled, set it up
      if (Transactions.config.paypal.enabled) {
        braintree.setup(data.token, "paypal", {
          container: "paypal-button",
          paymentMethodNonceInputField: $('[data-token]'),
          displayName:  Transactions.config.display_name,
          singleUse: Transactions.config.single_use,
          locale:  Transactions.config.locale,
          enableShippingAddress: Transactions.config.enable_shipping_address,
          onSuccess: function(token, email, shipping) {},
          onUnsupported: function() {},
          onCancelled: function() {},
        });
      }
    });
  }
};

Transactions.callbacks.rendered = function() {};
Transactions.callbacks.destroyed = function() {};
