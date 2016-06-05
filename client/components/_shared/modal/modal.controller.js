'use strict';

Admin.components.shared.modal.controller = function(opts) {
  let self = this;

  self.email = m.prop(null);

  self.init = function() {
    setTimeout(function() {
      m.startComputation();
      Admin.components.shared.modal.state.inBetween(false);
      m.endComputation();
    }, 0);
  };

  self.validateEmail = function(email) {
    let valid = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
    return valid.test(email);
  };

  self.handleKey = function() {
    Admin.components.shared.modal.state.emailError(null);
  };

  self.sendEmail = function() {
    if (self.validateEmail(self.email())) {
      m.request({
        method: 'post',
        url: '/subscribe',
        data: {
          'email': self.email()
        }
      }).then(function(data) {
        if (data.code === 200) {
          Admin.components.shared.modal.state.emailSuccess(true);
          Admin.components.shared.modal.state.emailProcessing(false);
          setTimeout(function() {
            Admin.components.shared.modal.state.emailSuccess(false);
            m.endComputation();
          }, 3000);
          return;
        }
        if (data.code === 214) {
          Admin.components.shared.modal.state.emailError('You have already subscribed!');
          Admin.components.shared.modal.state.emailProcessing(false);
          return;
        }
        Admin.components.shared.modal.state.emailError('Our apologies. An server error has occured. Please try again.');
        Admin.components.shared.modal.state.emailProcessing(false);
      });
    }
    else {
      Admin.components.shared.modal.state.emailError('Please enter a valid email address');
      Admin.components.shared.modal.state.emailProcessing(false);
    }
  };

  if (opts && opts.init) {
    self.init();
  }
};
