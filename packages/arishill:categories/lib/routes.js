/* ROUTES
.................................................*/

// categories index
Router.route('/shop/categories', {
  name: 'categories_index',
  controller: 'CategorysIndex'
});

// category create
Router.route('/shop/categories/create', {
  name: 'categories_create',
  controller: 'CategoryCreate'
});

// category edit
Router.route('/shop/categories/:id/edit', {
  name: 'categories_edit' ,
  controller: 'CategoriesEdit'
});