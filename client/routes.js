'use strict';

m.route.mode = 'pathname';
m.route(document.getElementById('app'), '/', {
    '/': app.layout.default.container
});
