Package.describe({
  name: 'arishill:aesop',
  summary: 'A design agnostic CSS/Less framework',
  version: '1.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use(['underscore', 'less']);

  api.addFiles([
    'client/base/lesshat.less',
    'client/base/reset.less',
    'client/base/colors.less',
    'client/base/fonts.less',
    'client/base/include.less',
    'client/base/spacing.less',
    'client/base/sizes.less',

    'client/animation.less',
    'client/backgrounds.less',
    'client/borders.less',
    'client/button.less',
    'client/checkbox.less',
    'client/containers.less',
    'client/display.less',
    'client/doc.less',
    'client/forms.less',
    'client/grid.less',
    'client/headers.less',
    'client/icons.less',
    'client/images.less',
    'client/lists.less',
    'client/loaders.less',
    'client/notice.less',
    'client/radio.less',
    'client/symbols.less',
    'client/tables.less',
    'client/typography.less',
    'client/unit.less',
    'client/util.less'
  ], 'client');

});

// Package.registerBuildPlugin({
//   name: "pre-less",
//   use: [],
//   sources: [
//     'plugins/compile.js'
//   ]
// });


Package.onTest(function(api) {
  // api.use('tinytest');
  // api.use('arishill:aesop');
  // api.addFiles('arishill:aesop-tests.js');
});
