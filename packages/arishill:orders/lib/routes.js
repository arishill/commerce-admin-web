/* ROUTES
.................................................*/

// orders index
Router.route('/shop/orders', {
  name: 'orders_index',
  controller: 'OrdersIndex'
});

// order create
Router.route('/shop/orders/create', {
  name: 'orders_create',
  controller: 'OrdersCreate'
});

// order edit
Router.route('/shop/orders/:_id/edit', {
  name: 'orders_edit' ,
  controller: 'OrdersEdit'
});