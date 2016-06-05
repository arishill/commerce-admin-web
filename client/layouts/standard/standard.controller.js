'use strict';

Admin.layouts.standard.controller = function(opts) {
  let pathname = m.route().split('?')[0];
  let self = this;

  self.init = function() {
    if (!Cookies.get('arishill-demo') && Admin.components.shared.modal.state.intro()) {
      Cookies.set('arishill-demo', true);
      Admin.components.shared.modal.state.wip(true);
      Admin.components.shared.modal.state.isOpen(true);
    } else {
      Admin.components.shared.modal.state.intro(false);
    }

    Admin.route = {
      pathname: pathname,
      method: m.route.param('id') ? 'show' : 'index',
      id: m.route.param('id') || null,
      section: m.route.param('section') || 'shop',
      subsection: m.route.param('subsection') || 'dashboard',
    };

    if (Admin.route.method === 'show') {
      setTimeout(function() {
        m.startComputation();
          Admin.layouts.standard.state.hasDrawer(true);
        m.endComputation();
      }, 0);
    }
    else {
      setTimeout(function() {
        m.startComputation();
          Admin.layouts.standard.state.hasDrawer(false);
        m.endComputation();
      }, 0);
    }
  };

  if (opts && opts.init) {
    self.init();
  }
};
