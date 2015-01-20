/* ORDERS DEFAULT SCHEMA
.................................................*/
Orders.schemas.default = new SimpleSchema({
  'type': {
    type: String,
    label: "Order Type",
    regEx: /(^phone$|^online$|^in_person$|^invoice$)/
  },
  'date': Schemas.date,
  'customer': {
    type: Orders.schemas.customer
  },
  'billing': {
    type: Orders.schemas.billing
  },
  'invoice': {
    type: Orders.schemas.invoice,
    optional: true
  },
  'receipt': {
    type: Orders.schemas.receipt
  },
  'refunds': {
    type: Orders.schemas.refunds,
    optional: true
  },
  'items': {
    type: [Orders.schemas.item],
    optional: true
  },
  'line_items': {
    type: [Orders.schemas.line_item],
    optional: true
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
    'is_physical': {
      type: Boolean,
      defaultValue: false
    },
    'is_digital': {
      type: Boolean,
      defaultValue: false
    }
  },
  'shipment': {
    type: Orders.schemas.shipment,
    optional: true
  },
  'payment': {
    'status': {
      type: String,
      label: "Payment Status",
      regEx: /(^approved$|^refunded$|^pending$|^canceled$|^failed$)/
    },
    'transactions': {
      type: [Orders.schemas.transaction],
      optional: true
    }
  }
});

Orders.schemas.context = Orders.schemas.default.namedContext('Orders');