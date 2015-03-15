// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.invoices = (_.isUndefined(Schemas.collections.invoices)) ? {} : Schemas.collections.invoices;

/* invoiceS DEFAULT SCHEMA
.................................................*/
Schemas.collections.invoices.default = new SimpleSchema({
  'type': {
    type: String,
    label: "invoice Type",
    regEx: /(^phone$|^online$|^in_person$|^invoice$)/
  },
  'date': {
    type: Schemas.date()
  },
  'customer': {
    type: Schemas.collections.invoices.customer
  },
  'billing': {
    type: Schemas.collections.invoices.billing
  },
  'invoice': {
    type: Schemas.collections.invoices.invoice,
    optional: true
  },
  'receipt': {
    type: Schemas.collections.invoices.receipt
  },
  'refunds': {
    type: Schemas.collections.invoices.refunds,
    optional: true
  },
  'items': {
    type: [Schemas.collections.invoices.item],
    optional: true,
    custom: function() {
      if (this.field('type').value !== 'invoice' && _.isArray(this.value) && this.value.length >= 1) {
        return true;
      } else {
        return 'minCount';
      }
    }
  },
  'line_items': {
    type: [Schemas.collections.invoices.line_item],
    optional: true,
    minCount: 1
  },
  'comments': {
    type: [Schemas.comment(false)],
    optional: true
  },
  'options': {
    type: Object,
    optional: true
  },
  'options.gift_wrapping': {
      type: Boolean,
      optional: true
    },
  'options.message': {
      type: String,
      optional: true
  },
  'delivery': {
    type: Object
  },
  'delivery.is_physical': {
    type: Boolean,
    defaultValue: false
  },
  'delivery.is_digital': {
    type: Boolean,
    defaultValue: false
  },
  'shipment': {
    type: Schemas.collections.invoices.shipment,
    optional: true
  },
  'payment': {
    type: Object
  },
  'payment.status': {
    type: String,
    label: "Payment Status",
    regEx: /(^refunded$|^pending$|^canceled$|^failed$|^success$)/,
    defaultValue: 'pending'
  },
  'payment.transactions': {
    type: [Schemas.collections.invoices.transaction],
    optional: true
  }
});

Schemas.collections.invoices.context = Schemas.collections.invoices.default.namedContext('invoices');


Schemas.collections.invoices.default.messages({
  'required billing.email': 'Please enter your email address',
  'regEx billing.phone': 'Please enter a valid phone number',
  'minCount items': 'You must add at least one item to this invoice'
});