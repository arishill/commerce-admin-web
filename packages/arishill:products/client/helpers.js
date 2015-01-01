ProductsTemplates = (_.isUndefined(ProductsTemplates)) ? {} : ProductsTemplates;
ProductsTemplates.helpers = {};

/* HELPERS
.................................................*/

// index
ProductsTemplates.helpers.index = {};

// create
ProductsTemplates.helpers.create = {};

// edit
ProductsTemplates.helpers.edit = {};

// shared
ProductsTemplates.helpers.form = {
  isChecked: function(checkbox) {
    if (parseInt(checkbox)) {
      return 'checked';
    }
  },
  multipleVariants: function() {
    var product = Session.get('product');

    if (typeof(product.variants !== 'undefined')) {
      return (product.variants.length > 1) ? true : false;
    }
    return false;
  },
  productError: function(key, index) {
    if (_.isNumber(index)) {
      key = key.replace('{i}', index);
    }
    if (Products.schemas.context.keyIsInvalid(key)) {
      return 'is-error';
    }
  },
  productErrorMsg: function(key, index) {
    if (_.isNumber(index)) {
      key = key.replace('{i}', index);
    }
    return Products.schemas.context.keyErrorMessage(key);
  }
};


// initiate helpers
ProductsTemplates.useHelpers = function(template) {
  _.each([
    'form',
    'form_info',
    'form_flags',
    'form_options',
    'form_price',
    'form_schedule',
    'form_shipping',
    'form_variants'
    ], function(item, index, list) {
      Template['aristotle__products__' + item].helpers(ProductsTemplates.helpers.form);
    });

  Template.aristotle__products__index.helpers(ProductsTemplates.helpers.index);
  Template.aristotle__products__index.helpers(ProductsTemplates.helpers.create);
  Template.aristotle__products__index.helpers(ProductsTemplates.helpers.edit);
};