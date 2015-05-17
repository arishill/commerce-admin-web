/* EVENTS
.................................................*/

Forms.card.helpers = {
  cardType: function() {
    Forms.card.tracker.depend();
    return Forms.card.current.type;
  },
  countries: function() {
    return Forms.card.countries;
  }
};