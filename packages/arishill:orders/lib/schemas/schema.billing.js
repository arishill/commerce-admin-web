// definitions
Sales = (_.isUndefined(Sales)) ? {} : Sales;
Sales.schemas = (_.isUndefined(Sales.schemas)) ? {} : Sales.schemas;

/* BILLING SCHEMA
.................................................*/
Sales.schemas.billing = new SimpleSchema({
  'email': Schemas.email,
  'phone': Schemas.phone.usa(true),
  'name': {
    type: String
  },
  'address': Schemas.address.usa
});