/* ROUTES
.................................................*/

// invoices index
Router.route('/shop/invoices', {
  name: 'invoices_index',
  controller: 'InvoicesIndex'
});

// invoice create
Router.route('/shop/invoices/create', {
  name: 'invoices_create',
  controller: 'InvoicesCreate'
});

// invoice edit
Router.route('/shop/invoices/:id/edit', {
  name: 'invoices_edit' ,
  controller: 'InvoicesEdit'
});