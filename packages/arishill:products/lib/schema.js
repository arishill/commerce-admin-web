// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.products = (_.isUndefined(Schemas.collections.products)) ? {} : Schemas.collections.products;

/* PRODUCTS DEFAULT SCHEMA
.................................................*/
Schemas.collections.products.default = new SimpleSchema({
  'date': {
    type: Schemas.date()
  },
  'options': {
    type: Object,
    optional: true
  },
  'variant_options': {
    type: Object,
    optional: true
  },
  'images': {
    type: Object,
    blackbox: true
  },
  'title': {
    type: String,
    label: "Title",
    max: 100
  },
  'subtitle': {
    type: String,
    label: "Subtitle",
    optional: true
  },
  'url': {
    type: String,
    label: "Url / Path",
    regEx: /^[a-z0-9-]+$/
  },
  'description': {
    type: String,
    label: "Description",
    optional: true
  },
  'extract': {
    type: String,
    label: "Extract",
    max: 300,
    optional: true,
  },
  'categories': {
    type: [String],
    optional: true
  },
  'price': {
    type: Schemas.collections.products.price,
  },
  'scheduled': {
    type: Schemas.collections.products.scheduled
  },
  'shipping': {
    type: Schemas.collections.products.shipping
  },
  'flags': {
    type: Schemas.collections.products.flags
  },
  'variants': {
    type: [Schemas.collections.products.variants],
    minCount: 1
  }
});


Schemas.collections.products.context = Schemas.collections.products.default.namedContext('Products');

Schemas.collections.products.default.messages({
});