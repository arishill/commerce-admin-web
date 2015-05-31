/* ROUTES
.................................................*/

// index
Router.route('/settings', {
  name: 'settings_index',
  controller: 'SettingsIndex'
});

// billing
Router.route('/settings/billing', {
  name: 'billing_show',
  controller: 'BillingShow'
});