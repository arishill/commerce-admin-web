// definitions
Products = (_.isUndefined(Products)) ? {} : Products;
Products.schemas = (_.isUndefined(Products.schemas)) ? {} : Products.schemas;

/* VARIANTS SCHEMA
.................................................*/

Products.schemas.variants = new SimpleSchema({
  options: {
    type: Object,
    optional: true
  },
  sku: {
    type: String,
    label: "Sku"
  },
  title: {
    type: String,
    label: "Title",
    max: 100,
    optional: true
  },
  description: {
    type: String,
    label: "Description",
    optional: true
  },
  images: Schemas.images(),
  price: {
    type: Products.schemas.price
  },
  stock: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  flags: {
    type: Products.schemas.flags
  }
});