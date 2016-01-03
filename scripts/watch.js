'use strict';

const catw        = require('catw');
const fs          = require('fs');
const chalk       = require('chalk');
const babel       = require('babel-core');
const path        = require('path');
const less        = require('less');
const concat      = require('concat');
const manifests   = {
  app: require('./manifests/app.js'),
  vendor: require('./manifests/vendor.js')
};

catw('client/**/*.js', function() {
  let src = './public/app.js';
  concat(manifests.app, src, function() {
    let result = babel.transform(fs.readFileSync(src).toString(), {
      'presets': ['es2015']
    });
    fs.writeFile(src, result.code, function(err) {
      if (err) {
        process.stdout.write(chalk.red(err));
      }
      else {
        process.stdout.write(chalk.yellow('App JS Updated \n'));
      }
    });
  });
});

// catw('client/manifests/vendor.js', function() {
//   let src = './public/vendor.js';
//   concat(manifests.vendor, src, function() {
//     process.stdout.write(chalk.yellow('Vendor JS Updated \n'));
//   });
// });

catw('node_modules/arishill-mithril/distr/arishill-mithril.js', function() {
  let src = './public/vendor.js';
  concat(manifests.vendor, src, function() {
    process.stdout.write(chalk.yellow('Vendor JS Updated \n'));
  });
});

catw('client/**/*.less', function(stream) {
  let w = stream.pipe(fs.createWriteStream('public/bundle.less'));
  w.on('close', function () {
    let src = 'public/bundle.less';
    less.render(fs.readFileSync(src).toString(), {
        filename: path.resolve(src),
    }, function(e, output) {
      fs.writeFile('public/app.css', output.css, function(err) {
        if (err) { process.stdout.write(chalk.red(err)); }
        fs.unlinkSync(src);
        process.stdout.write(chalk.green('CSS Updated \n'));
      });
    });
  });
});

catw('node_modules/arishill-aesop/distr/aesop.min.css', function(stream) {
  let w = stream.pipe(fs.createWriteStream('public/aesop.css'));
  w.on('close', function (err) {
    if (err) {
      process.stdout.write(chalk.red(err));
    }
    else {
      process.stdout.write(chalk.magenta('Aesop Updated \n'));
    }
  });
});
