// definitions
Sales = (_.isUndefined(Sales)) ? {} : Sales;
Sales.schemas = (_.isUndefined(Sales.schemas)) ? {} : Sales.schemas;

/* CUSTOMER SCHEMA
.................................................*/
Sales.schemas.customer = new SimpleSchema({
  'id': {
    type: String
  },
  'is_saved_card': {
    type: Boolean,
    defaultValue: false
  }
});