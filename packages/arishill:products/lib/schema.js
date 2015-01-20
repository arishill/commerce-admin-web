// definitions
Products = (_.isUndefined(Products)) ? {} : Products;
Products.schemas = (_.isUndefined(Products.schemas)) ? {} : Products.schemas;

/* PRODUCTS DEFAULT SCHEMA
.................................................*/

Products.schemas.default = new SimpleSchema({
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
  'images': Schemas.images(),
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
    type: Products.schemas.price,
  },
  'scheduled': {
    type: Products.schemas.scheduled
  },
  'shipping': {
    type: Products.schemas.shipping
  },
  'flags': {
    type: Products.schemas.flags
  },
  'variants': {
    type: [Products.schemas.variants],
    minCount: 1
  }
});

Products.schemas.context = Products.schemas.default.namedContext("Products");