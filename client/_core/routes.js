'use strict';

m.route.mode = 'pathname';

m.route(document.getElementById('admin'), '/', {
    /* dashboard */
    '/'                     : Admin.layouts.standard.ui.container,

    /* shop */
    '/shop'                 : Admin.layouts.standard.ui.container,
    '/shop/reports'         : Admin.layouts.standard.ui.container,
    '/shop/products'        : Admin.layouts.standard.ui.container,
    '/shop/categories'      : Admin.layouts.standard.ui.container,
    '/shop/coupons'         : Admin.layouts.standard.ui.container,
    '/shop/coupons/:id'     : Admin.layouts.standard.ui.container,
    '/shop/sales'           : Admin.layouts.standard.ui.container,
    '/shop/orders'          : Admin.layouts.standard.ui.container,
    '/shop/orders/:id'      : Admin.layouts.standard.ui.container,

    /* content */
    '/content'              : Admin.layouts.standard.ui.container,

    /* settings */
    '/settings'             : Admin.layouts.standard.ui.container
});
