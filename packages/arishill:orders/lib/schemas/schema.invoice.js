// definitions
Sales = (_.isUndefined(Sales)) ? {} : Sales;
Sales.schemas = (_.isUndefined(Sales.schemas)) ? {} : Sales.schemas;

/* INVOICE SCHEMA
.................................................*/
Sales.schemas.invoice = new SimpleSchema({
  'invoice_id': {
    type: String
  },
  'status': {
    type: String,
    label: "Invoice Status",
    regEx: /(^pending$|^read$|^paid$|^rejected$)/
  }
});