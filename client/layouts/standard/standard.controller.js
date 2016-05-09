'use strict';

Admin.layouts.standard.controller = function() {
  let pathname = m.route(); //window.location.pathname;

  Admin.route = {
    pathname: pathname,
    method: m.route.param('id') ? 'show' : 'index',
    id: m.route.param('id') || null,
    section: pathname.split('/')[1] || 'shop',
    subsection: pathname.split('/')[2] || 'dashboard',
  };
};
