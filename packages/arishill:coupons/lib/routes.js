/* ROUTES
.................................................*/

// coupons index
Router.route('/shop/coupons', {
  name: 'coupons_index',
  controller: 'CouponsIndex'
});

// coupon create
Router.route('/shop/coupons/create', {
  name: 'coupons_create',
  controller: 'CouponsCreate'
});

// coupon edit
Router.route('/shop/coupons/:id/edit', {
  name: 'coupons_edit' ,
  controller: 'CouponsEdit'
});