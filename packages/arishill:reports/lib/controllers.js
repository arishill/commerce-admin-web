/* CONTROLLERS
.................................................*/

// index
ReportsIndex = RouteController.extend({
  template: 'aristotle__reports__index',
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


// show
ReportsShow = RouteController.extend({
  template: 'aristotle__reports__show',
  layoutTemplate: 'app_layout',
  data: function() {
    return {
      report: {},
      schema: 'reports',
      page: {
        drawer: true
      }
    };
  },
  action: function () {
    this.render();
  }
});