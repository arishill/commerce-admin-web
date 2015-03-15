// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.invoices = (_.isUndefined(Schemas.collections.invoices)) ? {} : Schemas.collections.invoices;

/* CUSTOMER SCHEMA
.................................................*/
Schemas.collections.invoices.customer = new SimpleSchema({
  'id': {
    type: String,
    optional: true
  },
  'is_saved_card': {
    type: Boolean,
    optional: true,
    defaultValue: false
  }
});