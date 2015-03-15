// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.invoices = (_.isUndefined(Schemas.collections.invoices)) ? {} : Schemas.collections.invoices;

/* BILLING SCHEMA
.................................................*/
Schemas.collections.invoices.billing = new SimpleSchema({
  'email': Schemas.email(),
  'phone': Schemas.phone('usa', true),
  'name': {
    type: Object
  },
  'name.first': {
    type: String
  },
  'name.last': {
    type: String
  },
  'address': {
    type: Schemas.address('usa')
  }
});