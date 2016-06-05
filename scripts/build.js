'use strict';

const fs          = require('fs');
const chalk       = require('chalk');
const uglify      = require('uglify-js');
const cssmin      = require('cssmin');

let appjs = uglify.minify('./public/app.js');
fs.writeFile('./public/app.min.js', appjs.code, function(err) {
  if (err) {
    process.stdout.write(chalk.red(err));
  }
  else {
    process.stdout.write(chalk.yellow('App JS Build Complete \n'));
  }
});

let vendorjs = uglify.minify('./public/vendor.js');
fs.writeFile('./public/vendor.min.js', vendorjs.code, function(err) {
  if (err) {
    process.stdout.write(chalk.red(err));
  }
  else {
    process.stdout.write(chalk.yellow('Vendor JS Build Complete \n'));
  }
});

let aesopcss = cssmin(fs.readFileSync('./public/aesop.css', 'utf8'));
fs.writeFile('./public/aesop.min.css', aesopcss, function(err) {
  if (err) {
    process.stdout.write(chalk.red(err));
  }
  else {
    process.stdout.write(chalk.yellow('Aesop CSS Build Complete \n'));
  }
});
