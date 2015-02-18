/* ARISTOTLE TRANSACTIONS CONFIG
.................................................*/
Forms.card.setup = function(config) {
  var elements = {
        name: '[data-card-name]',
        postal_code: '[data-card-postal-code]',
        postal_code_container: '[data-postal-code-container]',
        country_code: '[data-card-country-code]',
        country_code_container: '[data-country-code-container]',
        expiry_container: '[data-expiry-container]',
        submit_btn: '[data-form-submit]',
        digits: {
          number: '[data-card-number]',
          cvc: '[data-card-cvc]',
          expiry_month: '[data-card-expiry-month]',
          expiry_year: '[data-card-expiry-year]'
        }
      },
      error_messages = {
        name: 'Please enter your first and last name',
        postal_code: 'Please enter a valid postal code',
        country_code: 'Please select a Country',
        number: 'Please enter a valid credit card number',
        cvc: 'Please enter a valid security code (CVC)',
        expiry_month: 'Please enter a valid expiration month',
        expiry_year: 'Please enter a valid expiration year'
      };

  config = (_.isUndefined(config)) ? {} : config;
  config.elements = (_.isUndefined(config.elements)) ? {} : config.elements;
  config.error_messages = (_.isUndefined(config.error_messages)) ? {} : config.error_messages;

  Forms.card.elements = _.extend({}, elements, config.elements);
  Forms.card.error_messages = _.extend({}, error_messages, config.error_messages);
  Forms.card.template = (_.isUndefined(config.template)) ? 'aristotle__transaction__form' : config.template;

  Forms.card.current = {
    caret: null,
    valid: true,
    date: Forms.utils.getFullDate(),
    type: 'default',
    number: '',
    cvc: '',
    name: '',
    expiry_month: '',
    expiry_year: '',
    postal_code: '',
    country_code: (_.isUndefined(config.country_code)) ? 'usa' : config.country_code,
    errors: {}
  };

  Forms.card.init();
};

Forms.card.init = function() {
  Forms.errors['Template.' + Forms.card.template] = {};

  Template[Forms.card.template].rendered = Forms.card.callbacks.rendered;
  Template[Forms.card.template].events(Forms.card.events);
  Template[Forms.card.template].helpers(Forms.card.helpers);

  Forms.card.methods.capCVC();

  $(document).on('forms:error', 'form', function() {
    $(event.target).find('[type=submit]').prop('disabled', false);
  });

};