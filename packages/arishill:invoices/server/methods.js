/* METHODS
.................................................*/

Meteor.methods({
  'api/invoices/create': function (invoice) {
    Collections.invoices.insert(invoice);
  },
  'api/invoices/update': function (id, invoice) {
    invoices = Forms.cleanModifier(invoices);
    Collections.invoices.update(id, {$set: invoice});
  },
  'api/invoices/remove': function (id) {
    Collections.invoices.remove({_id: id});
  }
});