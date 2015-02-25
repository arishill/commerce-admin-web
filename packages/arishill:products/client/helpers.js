Helpers = {};
Helpers.products = {};

Helpers.products.getProductStock = function(product) {
  var stock = 0;
  _.each(product.variants, function(variant, index) {
    stock = stock + variant.stock;
  });

  return stock;
};

Template.aristotle__products__table_body.helpers({
  getProductStock: Helpers.products.getProductStock
});

Template.aristotle__products__form_variants.helpers({
  getProductStock: Helpers.products.getProductStock
});
