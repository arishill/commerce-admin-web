/* ROUTES
.................................................*/

// create
Router.route('/shop/products/create', {
  name: 'products_create',
  controller: 'ProductsCreate'
});

// arrange
Router.route('/shop/products/arrange', {
  name: 'products_arrange',
  controller: 'ProductsArrange'
});

// edit
Router.route('/shop/products/edit/:url', {
  name: 'products_edit' ,
  controller: 'ProductsEdit'
});

// index
Router.route('/shop/products/:page?', {
  name: 'products_index',
  controller: 'ProductsIndex'
});