// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.categories = (_.isUndefined(Schemas.collections.categories)) ? {} : Schemas.collections.categories;

/* categoryS DEFAULT SCHEMA
.................................................*/
Schemas.collections.categories.default = new SimpleSchema({

});

Schemas.collections.categories.context = Schemas.collections.categories.default.namedContext('categories');

Schemas.collections.categories.default.messages({
  'required billing.email': 'Please enter your email address',
  'regEx billing.phone': 'Please enter a valid phone number',
  'minCount items': 'You must add at least one item to this category'
});