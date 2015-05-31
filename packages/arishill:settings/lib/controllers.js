/* CONTROLLERS
.................................................*/

// index
SettingsIndex = RouteController.extend({
  template: 'aristotle__settings__index',
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

// billing show
BillingShow = RouteController.extend({
  template: 'aristotle__billing__show',
  layoutTemplate: 'app_layout',
  // waitOn: function () {
  //   return Session.set('product', { variants: [{}] });
  // },
  data: function() {
    return {
      // product: Session.get('product'),
      // schema: 'products',
      page: {
        drawer: true
        // btn: 'Create Product',
        // action: 'create'
      }
    };
  },
  action: function () {
    this.render();
  }
});