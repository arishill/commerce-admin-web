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


Template.aristotle__products__table_head.helpers({
  'getDropdownOptions': function() {
    return {
      css: 'dropdown--bottom dropdown--small',
      anchor: {
        css: 'icon-filter-gray icon--center',
        text: 'Filter'
      },
      options: {
        close_on_click: true,
        select_input: true,
        name: 'pagination'
      },
      list: {
        css: 'text-center text-small arrow-top-middle box-shadow',
        items: [
          { text: 'Popular', value: '1' },
          { text: 'Featured', value: '2' },
          { text: 'Men\'s', value: '3' },
          { text: 'Women\'s', value: '4' }
        ]
      }
    };
  }
});