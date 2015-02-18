// definitions

/* EVENTS
.................................................*/

// transaction form
Template.aristotle__transaction__form.events({

  'submit [data-action=checkout]': function(event, template) {
    Forms.card.methods.onSubmit(event, template, function(event, template) {
      Aristotle.events.checkout(event, template, {
        collection: 'transactions',
        token: $(event.target).find('[data-token]').val(),
        form: $(event.target)
      });
    });
  }
});