/* METHODS
.................................................*/

Forms.card.methods.isDigitField = function(target) {
  var is_digit = false;

  $.each(Forms.card.elements.digits, function(index, value) {
    if (target.is(value)) {
      is_digit = true;
      return;
    }
  });

  return is_digit;
};

Forms.card.methods.isNotAcceptedKey = function(character) {
  var accepted = [91, 93, 8, 37, 38, 39, 40, 46, 9, 13, 16, 17, 18];

  return (!Forms.utils.isNumber(character) && accepted.indexOf(event.keyCode) === -1 && !(event.ctrlKey) && !(event.metaKey)) ? true : false;
};

/* cvc methods
..................................... */
Forms.card.methods.handleCVC = function(value) {
  Forms.card.current.cvc = value;

  Forms.card.methods.capCVC();
  Forms.card.validate.cvc();
};

Forms.card.methods.capCVC = function() {
  var cvc_max_length = (Forms.card.current.type) ? Forms.regex.cards[Forms.card.current.type].cvc : 4;
  $(Forms.card.elements.digits.cvc).attr('maxlength', cvc_max_length);
};

Forms.card.methods.updateCardType = function(type) {
  Forms.card.current.type = type;
  Forms.card.tracker.changed();
};

Forms.card.methods.handleNumber = function(character, insert) {
  if (insert) {
    Forms.card.methods.insertNumber(character);
  }

  Forms.card.methods.determineCardType();
  Forms.card.methods.spaceCard();
  Forms.card.methods.capCard();
  Forms.card.validate.number();

  Forms.card.methods.capCVC();
  Forms.card.validate.cvc();
  // Forms.card.methods.FormsName();
};

Forms.card.methods.determineCardType = function(){
  var card_key = 'default';

  $.each(Forms.regex.cards, function(){
    if (Forms.card.current.number.match(this.prefix)) {
      card_key = this.key;
    }
  });

  Forms.card.methods.updateCardType(card_key);
};

  Forms.card.methods.capCard = function(){
    var max_length = (Forms.card.current.type) ? (Forms.regex.cards[Forms.card.current.type].cap + Forms.regex.cards[Forms.card.current.type].spaces) : 16;
    $(Forms.card.elements.digits.number).attr('maxlength', max_length);

    return (Forms.card.current.number.length > max_length) ? false : true;
  };

  Forms.card.methods.spaceCard = function() {
    var cc_number = Forms.card.current.number.replace(/ /g,'');
    if (Forms.card.current.type && Forms.card.current.type !== null) {
      $.each(Forms.regex.cards[Forms.card.current.type].spacing, function(index, value){
        if (cc_number.length >= value) {
          if (Forms.card.current.caret === value) {
            Forms.card.current.caret++;
          }
          cc_number = cc_number.substr(0, value) + ' ' + cc_number.substr(value);
        }
      });
    }

    $(Forms.card.elements.digits.number).val(cc_number);
    if ($(Forms.card.elements.digits.number).is(':focus')) {
      Forms.utils.setSelectionRange($(Forms.card.elements.digits.number), Forms.card.current.caret, Forms.card.current.caret);
    }
  };

  Forms.card.methods.insertNumber = function(character){
    var cc_number = Forms.card.current.number;

    if (cc_number.length > 0) {
      if (Forms.card.current.caret <= 0) {
        Forms.card.current.number = cc_number;
      } else {
        Forms.card.current.number = cc_number.substr(0, Forms.card.current.caret - 1) + character + cc_number.substr(Forms.card.current.caret-1);
      }
    } else {
      Forms.card.current.number = character;
    }

    if (Forms.card.current.number.length <= parseInt($(Forms.card.elements.digits.number).attr('maxlength'))) {
      $(Forms.card.elements.digits.number).val(Forms.card.current.number);
    } else {
      Forms.card.current.number = cc_number;
    }
  };

Forms.card.methods.cleanExpiry = function() {
  Forms.card.current.expiry_year = parseInt($(Forms.card.elements.digits.expiry_year).val());
  Forms.card.current.expiry_month = parseInt($(Forms.card.elements.digits.expiry_month).val());

  if (Forms.card.current.expiry_year.length === 4) {
    Forms.card.current.expiry_year = Forms.card.current.expiry_year.toString().substring(2);
    $(Forms.card.elements.digits.expiry_year).val(Forms.card.current.expiry_year);
  }
};

Forms.card.methods.handleExpiry = function() {
  Forms.card.methods.cleanExpiry();
  Forms.card.validate.expiryMonth();
  Forms.card.validate.expiryYear();
};

Forms.card.methods.handlePostal = function() {
  Forms.card.validate.postalCode();
};

Forms.card.methods.onSubmit = function(event, template, callback) {
  var target = $(event.target);

  event.preventDefault();

  Forms.card.methods.populateCard();
  Forms.card.methods.handleExpiry();
  Forms.card.methods.handleNumber('', false);
  Forms.card.methods.handlePostal();

  if (_.isEmpty(Forms.errors['Template.' + Forms.card.template])) {
    $(event.target).find('[type=submit]').prop('disabled', true);
    if (_.isFunction(callback)) {
      callback(event, template);
    }
  }
};

Forms.card.methods.populateCard = function() {
  Forms.card.current.cvc = $(Forms.card.elements.digits.cvc).val();
  Forms.card.current.postal_code = $(Forms.card.elements.postal_code).val();
  Forms.card.current.number = $(Forms.card.elements.digits.number).val();
  Forms.card.current.name = $(Forms.card.elements.name).val();
  Forms.card.current.expiry_month = $(Forms.card.elements.digits.expiry_month).val();
  Forms.card.current.expiry_year = Forms.card.current.date.mil + $(Forms.card.elements.digits.expiry_year).val();
};