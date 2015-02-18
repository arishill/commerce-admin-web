/* CARD VALIDATIONS
.................................................*/
Forms.card.validate.number = function(){
  var card_number = Forms.card.current.number.replace(/ /g,'');
  if (Forms.regex.cards[Forms.card.current.type].regex.test(card_number) && card_number.length === Forms.regex.cards[Forms.card.current.type].cap) {
    // card number is valid
    Forms.removeError({
      key: 'number',
      element: $(Forms.card.elements.digits.number),
      template: Forms.card.template
    });
  }
  else {
    // card number is not valid
    Forms.addError({
      key: 'number',
      element: $(Forms.card.elements.digits.number),
      template: Forms.card.template,
      message: Forms.card.error_messages.number
    });
  }
};

/* validate expiration datae
.................................................*/
Forms.card.validate.expiryMonth = function() {
  if (isNaN(Forms.card.current.expiry_month) || Forms.card.current.expirty_month > 12 || Forms.card.current.expirty_month < 1) {
    // month is not valid
    Forms.addError({
      key: 'expiry_month',
      element: $(Forms.card.elements.digits.expiry_month),
      template: Forms.card.template,
      message: Forms.card.error_messages.expiry_month
    });
  }
  else {
    // expiry month is valid
    Forms.removeError({
      key: 'expiry_month',
      element: $(Forms.card.elements.digits.expiry_month),
      template: Forms.card.template
    });
  }
};

Forms.card.validate.expiryYear = function() {
  if (Forms.card.validate.isCurrentYearPasthMonth() || Forms.card.validate.isPastYear()) {
    // expiration is expired
    Forms.addError({
      key: 'expiry_year',
      element: $(Forms.card.elements.digits.expiry_year),
      template: Forms.card.template,
      message: Forms.card.error_messages.expiry_year
    });
  }
  else {
    // expiration year is valid
    Forms.removeError({
      key: 'expiry_year',
      element: $(Forms.card.elements.digits.expiry_year),
      template: Forms.card.template
    });
  }
};

Forms.card.validate.isCurrentYearPasthMonth = function() {
  var is_current_year = Forms.checks.isCurrentYear(Forms.card.current.date.millenium + '' + Forms.card.current.expiry_year),
      is_past_month = Forms.card.current.expiry_month < Forms.card.current.date.month;

  return (is_current_year && is_past_month);
};

Forms.card.validate.isPastYear = function() {
  return parseInt(Forms.card.current.date.millenium + '' + Forms.card.current.expiry_year) < Forms.card.current.date.year;
};

/* validate postal code
.................................................*/
Forms.card.validate.postalCode = function() {
  if ($(Forms.card.elements.country_code).length) {
    Forms.card.current.country_code = $(Forms.card.elements.country_code).val();
  }

  Forms.card.current.postal_code = $(Forms.card.elements.postal_code).val().replace(/\s/g, '').toUpperCase();

  if (Forms.card.current.postal_code === '' || !Forms.regex.countries[Forms.card.current.country_code].postal_regex.test(Forms.card.current.postal_code)) {
    // no postal code entered
    Forms.addError({
      key: 'postal_code',
      element: $(Forms.card.elements.postal_code),
      template: Forms.card.template,
      message: Forms.card.error_messages.postal_code
    });
  }
  else {
    // postal code is valid
    Forms.removeError({
      key: 'postal_code',
      element: $(Forms.card.elements.postal_code),
      template: Forms.card.template
    });
  }
};

/* validate cvc to card type
.................................................*/
Forms.card.validate.cvc = function() {
  if (Forms.card.current.cvc.length !== Forms.regex.cards[Forms.card.current.type].cvc) {
    // cvc length does not match current card type
    Forms.addError({
      key: 'cvc',
      element: $(Forms.card.elements.digits.cvc),
      template: Forms.card.template,
      message: Forms.card.error_messages.cvc
    });
  }
  else {
    // cvc is valid
    Forms.removeError({
      key: 'cvc',
      element: $(Forms.card.elements.digits.cvc),
      template: Forms.card.template
    });
  }
};