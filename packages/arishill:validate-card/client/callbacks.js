/* CALLBACKS
.................................................*/

Forms.card.callbacks.created = function() {};

Forms.card.callbacks.rendered = function() {
  var $number = $(Forms.card.elements.digits.number);
  $number.data('placeholder', $number.prop('placeholder'));
};

Forms.card.callbacks.destroyed = function() {};