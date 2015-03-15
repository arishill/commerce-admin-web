/* COLLECTIONS
.................................................*/
Collections.invoices = new Mongo.Collection('invoices');
Collections.invoices.allow({
  update: function(userId, post) { return true; },
  remove: function(userId, post) { return true; },
  insert: function(userId, post) { return true; }
});
