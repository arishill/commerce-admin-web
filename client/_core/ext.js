'use strict';

_.hasClass = function(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  }
  else {
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
};

_.addClass = function(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else if (!_.hasClass(el, className)) {
    el.className += " " + className;
  }
};

_.removeClass = function(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  }
  else if (_.hasClass(el, className)) {
    let reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className=el.className.replace(reg, ' ');
  }
};
