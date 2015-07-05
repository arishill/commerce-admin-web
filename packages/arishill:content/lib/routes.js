/* ROUTES
.................................................*/

// create
Router.route('/content', {
  name: 'content_index',
  controller: 'ContentIndex'
});

// edit
Router.route('/content/:key/edit', {
  name: 'content_edit',
  controller: 'ContentEdit'
});