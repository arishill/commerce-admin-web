// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.orders = (_.isUndefined(Schemas.collections.orders)) ? {} : Schemas.collections.orders;

/* BILLING SCHEMA
.................................................*/
Schemas.collections.orders.billing = new SimpleSchema({
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