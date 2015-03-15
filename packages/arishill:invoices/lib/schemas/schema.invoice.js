// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.invoices = (_.isUndefined(Schemas.collections.invoices)) ? {} : Schemas.collections.invoices;

/* INVOICE SCHEMA
.................................................*/
Schemas.collections.invoices.invoice = new SimpleSchema({
  'invoice_id': {
    type: String
  },
  'status': {
    type: String,
    label: "Invoice Status",
    regEx: /(^pending$|^read$|^paid$|^rejected$)/
  }
});