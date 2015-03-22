/* COLLECTIONS
.................................................*/
Collections = (_.isUndefined(Collections)) ? {} : Collections;
Collections.transactions = new Mongo.Collection('transactions');

Collections.transactions.allow({
  update: function(userId, post) { return true; },
  remove: function(userId, post) { return true; },
  insert: function(userId, post) { return true; }
});
