'use strict';

A.init(app, API.key, API.url);

m.route.mode = 'pathname';
m.route(document.getElementById('app'), '/', {
    /* dashboard */
    '/': app.layout.default.container,

    /* shop */
    '/shop': app.layout.default.container,
    '/shop/reports': app.layout.default.container,
    '/shop/products': app.layout.default.container,
    '/shop/categories': app.layout.default.container,
    '/shop/coupons': app.layout.default.container,
    '/shop/sales': app.layout.default.container,
    '/shop/orders': app.layout.default.container,

    /* content */
    '/content': app.layout.default.container,

    /* settings */
    '/settings': app.layout.default.container
});
