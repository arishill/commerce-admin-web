/* PUBLICATIONS
.................................................*/
Meteor.publish('invoices', function(path) {
  return Collections.invoices.find({});
});

Meteor.publish('invoicesByID', function(id) {
  return Collections.invoices.find({_id: id});
});