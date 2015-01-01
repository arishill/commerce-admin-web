// definitions
Products = Products || {};
Products.schemas = {};

/* SCHEMA
.................................................*/

// pricing schema
Products.schemas.price = new SimpleSchema({
  'regular_cents': {
    type: Number
  },
  'sale_cents': {
    type: Number,
    defaultValue: null,
    optional: true
  }
});

// images schema
Products.schemas.images = {
  type: Object,
  optional: true,
  custom: function() {
    var is_valid = true,
        obj = this.value,
        regex = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/;

    if (_.isObject(obj)) {
      _.each(obj, function(value, key, list) {
        if (!regex.test(value)) {
          is_valid = false;
        }
      });

      if (is_valid) {
        return true;
      }

      return 'regEx';
    }
  }
};

// scheduled publish schema
Products.schemas.scheduled = new SimpleSchema({
  'start': {
    type: Date,
    defaultValue: null,
    optional: true
  },
  'end': {
    type: Date,
    defaultValue: null,
    optional: true
  }
});

// shipping schema
Products.schemas.shipping = new SimpleSchema({
  'weight': {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  'width': {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  'length': {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  'depth': {
    type: Number,
    defaultValue: 0,
    optional: true
  }
});

// flags schema
Products.schemas.flags = new SimpleSchema({
  'is_active': {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  'is_sale': {
    type: Boolean,
    defaultValue: false
  },
  'is_taxable': {
    type: Boolean,
    defaultValue: false
  },
  'is_discount_ignored': {
    type: Boolean,
    defaultValue: false
  }
});

// date schema
Products.schemas.dates = new SimpleSchema({
  'created': {
    type: Date,
    optional: true
  },
  'modified': {
    type: Date,
    optional: true
  }
});

// items schema
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
  images: Products.schemas.images,
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

Products.schemas.default = new SimpleSchema({
  date: {
    type: Products.schemas.dates
  },
  options: {
    type: Object,
    optional: true
  },
  variant_options: {
    type: Object,
    optional: true
  },
  images: Products.schemas.images,
  title: {
    type: String,
    label: "Title",
    max: 100
  },
  subtitle: {
    type: String,
    label: "Subtitle",
    optional: true
  },
  url: {
    type: String,
    label: "Url / Path",
    regEx: /^[a-z0-9-]+$/
  },
  description: {
    type: String,
    label: "Description",
    optional: true
  },
  extract: {
    type: String,
    label: "Extract",
    max: 300,
    optional: true,
  },
  categories: {
    type: [String],
    optional: true
  },
  price: {
    type: Products.schemas.price,
  },
  scheduled: {
    type: Products.schemas.scheduled
  },
  shipping: {
    type: Products.schemas.shipping
  },
  flags: {
    type: Products.schemas.flags
  },
  variants: {
    type: [Products.schemas.variants],
    minCount: 1
  }
});

Products.schemas.context = Products.schemas.default.namedContext("Products");