// definitions
Schemas.collections = (_.isUndefined(Schemas.collections)) ? {} : Schemas.collections;
Schemas.collections.products = (_.isUndefined(Schemas.collections.products)) ? {} : Schemas.collections.products;

/* VARIANTS SCHEMA
.................................................*/
Schemas.collections.products.variants = new SimpleSchema({
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
    type: Schemas.collections.products.price
  },
  stock: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  flags: {
    type: Schemas.collections.products.flags
  }
});