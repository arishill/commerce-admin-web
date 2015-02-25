/* ROUTES
.................................................*/

// create
Router.route('/shop/products/create', {
  name: 'products_create',
  controller: 'ProductsCreate'
});

// edit
Router.route('/shop/products/:url/edit', {
  name: 'products_edit' ,
  controller: 'ProductsEdit'
});

// index
Router.route('/shop/products', {
  name: 'products_index',
  controller: 'ProductsIndex'
});