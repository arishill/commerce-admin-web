/* ROUTES
.................................................*/

// create
Router.route('/products/create', {
  name: 'products_create',
  controller: 'ProductsCreate'
});

// edit
Router.route('/products/:url/edit', {
  name: 'products_edit' ,
  controller: 'ProductsEdit'
});

// index
Router.route('/products', {
  name: 'products_index',
  controller: 'ProductsIndex'
});