/* ROUTES
.................................................*/

// order create
Router.route('/orders/create', {
  name: 'orders_create',
  controller: 'OrdersCreate'
});

// order edit
Router.route('/orders/:url/edit', {
  name: 'orders_edit' ,
  controller: 'OrdersEdit'
});

// invoice create
Router.route('/invoice/create', {
  name: 'invoice_create',
  controller: 'InvoiceCreate'
});

// invoice edit
Router.route('/invoices/:url/edit', {
  name: 'invoices_edit' ,
  controller: 'InvoicesEdit'
});

// sales index
Router.route('/sales', {
  name: 'sales_index',
  controller: 'SalesIndex'
});

// invoices index
Router.route('/invoices', {
  name: 'invoices_index',
  controller: 'InvoicesIndex'
});