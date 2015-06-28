/* CONTROLLERS
.................................................*/

// create
StyleGuide = RouteController.extend({
  template: 'aristotle__style_guide',
  layoutTemplate: 'app_layout',
  action: function () {
    this.render();
  }
});