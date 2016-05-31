'use strict';

m.route.mode = 'pathname';

m.route(document.getElementById('admin'), '/', {
    /* dashboard */
    '/' : Admin.layouts.standard.ui.container,
    '/:section' : Admin.layouts.standard.ui.container,
    '/:section/:subsection' : Admin.layouts.standard.ui.container,
    '/:section/:subsection/:id' : Admin.layouts.standard.ui.container,
    '/:section/:subsection/:id/:tab' : Admin.layouts.standard.ui.container
});
