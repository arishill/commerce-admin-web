// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.orders = (_.isUndefined(Schemas.collections.orders)) ? {} : Schemas.collections.orders;

/* INVOICE SCHEMA
.................................................*/
Schemas.collections.orders.invoice = new SimpleSchema({
  'invoice_id': {
    type: String
  },
  'status': {
    type: String,
    label: "Invoice Status",
    regEx: /(^pending$|^read$|^paid$|^rejected$)/
  }
});