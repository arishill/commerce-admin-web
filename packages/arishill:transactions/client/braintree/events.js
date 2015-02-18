// definitions
Aristotle = (_.isUndefined(Aristotle)) ? {} : Aristotle;
Aristotle.events = (_.isUndefined(Aristotle.events)) ? {} : Aristotle.events;
Aristotle.events.braintree = {};

/* ARISTOTLE FORM EVENTS
.................................................*/

Aristotle.events.checkout = function(event, template, options) {
  event.preventDefault();
  if (_.isEmpty(Forms.errors[template.view.name])) {
    if (Transactions.config.default_gateway === 'braintree') {
      Aristotle.events.braintree.checkout(options);
    }
  } else {
    console.log('errors');
  }
};

// checkout (create a transaction)
Aristotle.events.braintree.checkout = function(options) {
  // if token already exists
  if (options.token.length > 0) {
    Aristotle.events.braintree.createTransaction(options);
  }
  // otherwise first tokenize the card
  else {
    Aristotle.events.braintree.tokenizeCard(options);
  }
};

Aristotle.events.braintree.tokenizeCard = function(options) {
  // get server auth token
  var client = new braintree.api.Client({clientToken: Session.get('transaction_token')});

  client.tokenizeCard({
    number: options.form.find('[data-card-number]').val(),
    cardholderName: options.form.find('[data-card-name]').val(),
    expirationMonth: options.form.find('[data-card-expiry-month]').val(),
    expirationYear: '20' + options.form.find('[data-card-expiry-year]').val(),
    cvv: options.form.find('[data-card-cvc]').val(),
    billingAddress: {
      postalCode: options.form.find('[data-card-postal-code]').val()
    }
  }, function (error, token) {
    if (_.isObject(error)) {
      Aristotle.events.braintree.handleError(error);
    }
    else {
      options.token = token;
      Aristotle.events.braintree.createTransaction(options);
    }
  });
};

Aristotle.events.braintree.createTransaction = function(options) {
  // serialize the form
  var form_obj = Forms.utils.serializeObject(options.form);

  // add token to form object if it exists
  if (_.isString(options.token)) {
    form_obj.transaction.token = options.token;
  }

  // create the transactionk
  Meteor.call('api/transactions/create', form_obj, function(error, response) {
    if (_.isObject(response)) {
      Aristotle.events.braintree.handleSuccess(response);
    }
    else {
      Aristotle.events.braintree.handleError(error, response);
    }
  });
};

Aristotle.events.braintree.handleSuccess = function(response) {
  console.log('success');
  console.log(response);
};

Aristotle.events.braintree.handleError = function(error, response) {
  console.log('error');
  console.log(error);
  console.log(response);
};