Router.configure({
  layoutTemplate: 'app_layout',
  loadingTemplate: 'loading'
});

// edit
Router.route('/styles', {
  name: 'styles',
  controller: 'StyleGuide'
});