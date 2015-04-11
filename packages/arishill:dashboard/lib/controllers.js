/* CONTROLLERS
.................................................*/

// index
DashboardIndex = RouteController.extend({
  template: 'aristotle__dashboard__index',
  layoutTemplate: 'app_layout',
  // waitOn: function () {
  //   return Session.set('product', { variants: [{}] });
  // },
  // data: function() {
  //   return {
  //     product: Session.get('product'),
  //     schema: 'products',
  //     page: {
  //       btn: 'Create Product',
  //       action: 'create'
  //     }
  //   };
  // },
  action: function () {
    this.render();
  }
});