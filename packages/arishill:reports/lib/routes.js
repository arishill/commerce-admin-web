/* ROUTES
.................................................*/

// index
Router.route('/shop/reports', {
  name: 'reports_index',
  controller: 'ReportsIndex'
});

// create
Router.route('/shop/reports/:id', {
  name: 'reports_show',
  controller: 'ReportsShow'
});