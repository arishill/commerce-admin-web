'use strict';

Admin.layouts.standard.controller = function() {
  let pathname = m.route().split('?')[0];

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
