// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.orders = (_.isUndefined(Schemas.collections.orders)) ? {} : Schemas.collections.orders;

/* ORDERS DEFAULT SCHEMA
.................................................*/
Schemas.collections.orders.default = new SimpleSchema({
  'type': {
    type: String,
    label: "Order Type",
    regEx: /(^phone$|^online$|^in_person$|^invoice$)/
  },
  'date': {
    type: Schemas.date()
  },
  'customer': {
    type: Schemas.collections.orders.customer
  },
  'billing': {
    type: Schemas.collections.orders.billing
  },
  'invoice': {
    type: Schemas.collections.orders.invoice,
    optional: true
  },
  'receipt': {
    type: Schemas.collections.orders.receipt
  },
  'refunds': {
    type: Schemas.collections.orders.refunds,
    optional: true
  },
  'items': {
    type: [Schemas.collections.orders.item],
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
    type: [Schemas.collections.orders.line_item],
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
    type: Schemas.collections.orders.shipment,
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
    type: [Schemas.collections.orders.transaction],
    optional: true
  }
});

Schemas.collections.orders.context = Schemas.collections.orders.default.namedContext('Orders');


Schemas.collections.orders.default.messages({
  'required billing.email': 'Please enter your email address',
  'regEx billing.phone': 'Please enter a valid phone number',
  'minCount items': 'You must add at least one item to this order'
});