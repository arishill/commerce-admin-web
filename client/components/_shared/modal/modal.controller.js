'use strict';

Admin.components.shared.modal.controller = function(opts) {
  let self = this;

  setTimeout(function() {
    m.startComputation();
    Admin.components.shared.modal.state.inBetween(false);
    m.endComputation();
  }, 0);

  self.init = function() {};

  if (opts && opts.init) {
    self.init();
  }
};
