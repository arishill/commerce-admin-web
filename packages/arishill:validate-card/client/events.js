/* EVENTS
.................................................*/
Forms.card.events = {

  // on focus
  'focus form': function(event, template) {
    var target = $(event.target);

    target
      .addClass('is-active is-focus')
      .parent().addClass('is-active is-focus');
  },

  // on blur
  'blur form': function(event, template) {
    var target = $(event.target);

    target
      .removeClass('is-active is-focus')
      .parent().removeClass('is-active is-focus');

    if (target.is(Forms.card.elements.digits.number) && target.val() === '') {
      target
      .css('letter-spacing', 'normal')
      .prop('placeholder', target.data('placeholder'));
    }
  },

  // on change
  'change form': function(event, template) {
    var target = $(event.target),
        country_code_decorator = $(Forms.card.elements.country_code_decorator);

    // country code selection
    if (country_code_decorator.length &&  target.is(Forms.card.elements.country_code)) {
        country_code_decorator.html(target.val());
    }
  },

  // on click
  'click form': function(event, template) {
    var target = $(event.target);

    // highlight when changing the country dropdown
    if (target.is(Forms.card.elements.country_code)) {
      target
      .addClass('is-active is-focus')
      .parent().addClass('is-active is-focus');
    }
  },

  // on key
  'keydown form': function(event, template) {
    var target = $(event.target),
        $card_number = $(Forms.card.elements.digits.number);

    if (target.is(Forms.card.elements.digits.number)) {
      if (target.val() === '') {
        target.css('letter-spacing', 'normal');
      } else {
        target.css('letter-spacing', '1px');
        $card_number.prop('placeholder', '');
      }

      if (event.keyCode === Forms.keys.BACKSPACE || event.keyCode === Forms.keys.DEL) {
        if (!Forms.utils.isRange($card_number)) {
          event.preventDefault();
          Forms.card.current.caret = Forms.utils.getCaret($card_number) - 1;

          if (Forms.regex.cards[Forms.card.current.type].spacing.indexOf(Forms.card.current.caret) !== -1) {
            Forms.card.current.caret = Forms.card.current.caret - 1;
          }
          Forms.card.current.number = target.val().substr(0, Forms.card.current.caret) + target.val().substr(Forms.card.current.caret + 1);

          Forms.card.methods.handleNumber('', true);
        }
      }
    }
  },

  'keyup form': function(event, template) {
    var target = $(event.target),
        character = String.fromCharCode(event.keyCode);

    if (Forms.utils.isNumber(character) || event.keyCode === Forms.keys.BACKSPACE || event.keyCode === Forms.keys.DEL) {
      if (target.is(Forms.card.elements.digits.number)) {
        Forms.card.current.number = target.val();
        Forms.card.methods.determineCardType();
      }
      else if (target.is(Forms.card.elements.digits.cvc)) {
        Forms.card.methods.handleCVC(target.val());
      }
      else if (target.is(Forms.card.elements.digits.expiry_month) || target.is(Forms.card.elements.digits.expiry_year)) {
        Forms.card.methods.handleExpiry();
      }
    }
  },

  'keypress form': function(event, template) {
    var target = $(event.target),
        $card_number = $(Forms.card.elements.digits.number),
        character;

    if (Forms.card.methods.isDigitField(target)) {
      character = String.fromCharCode(event.which);

      if (Forms.utils.isNumber(character) && target.is(Forms.card.elements.digits.number)) {
        if (!Forms.utils.isRange($card_number)) {
          event.preventDefault();
          Forms.card.current.caret = Forms.utils.getCaret($card_number) + 1;
          Forms.card.current.number = target.val();
          Forms.card.methods.handleNumber(character, true);
        }
      } else if (Forms.card.methods.isNotAcceptedKey(character)) {
        event.preventDefault();
      }
    }
  },

  // on paste
  'paste form': function(event, template) {
    console.log('paste?');
  },

  // on cut/copy
  'cut form' : function(event, template) {
    console.log('event cut?');
  },

  'copy form' : function(event, template) {
    console.log('event copy?');
  }
};