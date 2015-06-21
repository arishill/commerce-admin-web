
/*.............................................
  DROPDOWN COMPONENT
.............................................*/

Components.dropdown = function(selector, options) {
  var _super = this;
  var Dropdown;

  _super.apis = {};
  _super.elements = selector;
  _super.defaults = {
    name: null,
    is_jquery: typeof(jQuery) !== 'undefined' ? true : false,
    show_duration: 300,
    hide_duration: 300,
    drop_list: '[data-dropdown-list]',
    drop_anchor: '[data-dropdown-anchor]',
    close_on_click: false
  };

  _super.init = function(el, selector, options, index) {
    var instance = new Dropdown(el, selector, options);

    _super.apis[index] = instance;
    options.name = Components._getElData(el, 'name', options.is_jquery);

    if (typeof(options.name) === 'string') {
      _super.apis[options.name] = instance;
    }
  };

  _super.closest = function(el, selector) {
    var firstChar = selector.charAt(0);

    for (; el && el !== document; el = el.parentNode ) {
      if (firstChar === '.' ) {
        if (el.classList.contains(selector.substr(1))) {
          return elem;
        }
      }

      if (firstChar === '#' ) {
        if (el.id === selector.substr(1)) {
          return el;
        }
      }

      if (firstChar === '[') {
        if (el.hasAttribute(selector.substr(1, selector.length - 2))) {
          return el;
        }
      }

      if (el.tagName.toLowerCase() === selector) {
        return el;
      }
    }

    return false;
  };

  _super.event = function(_this, name) {
    return {
      is_jquery: _this.options.is_jquery,
      event_name: name,
      args: {
        drop_list:  _this.options.is_jquery ? $(_this.drop_list) : _this.drop_list,
        el:         _this.options.is_jquery ? $(_this.el) : _this.el,
        name:       _this.options.name ? _this.options.name : null,
      }
    };
  };

  Dropdown = function(el, selector, options) {
    var _this = this;

    _this.selector    = selector;
    _this.options     = Components._extend(_super.defaults, options);

    _this.el          = el;
    _this.drop_anchor = Components._getDOMElements(_this.options.drop_anchor)[0];
    _this.drop_list   = Components._getDOMElements(_this.options.drop_list)[0];

    _this.init();
  };

  Dropdown.prototype.init = function() {
    var _this = this;

    _this.bindEvents();
  };

  Dropdown.prototype.bindEvents = function() {
    var _this = this;

    _this.drop_anchor.addEventListener("click", function(event) {
      event.preventDefault();

      Components._createEvent(_super.dropdownEvent(_this,'dropdown:anchor-click'));

      if (Components._hasClass(_this.drop_list, 'is-active')) {
        _this.hide();
        return;
      }

      _this.show();
    }, false);

    document.addEventListener("click", function(event) {
      var target = _super.closest(event.target, _this.selector);

      if (!target || (target !== _this.el && Components._hasClass(_this.el, 'is-active'))) {
        _this.hide();
      }
      else if (_this.options.close_on_click && Components._hasClass(_this.drop_anchor, 'is-active')) {
        _this.hide();
      }
    }, false);
  };

  Dropdown.prototype.show = function() {
    var _this = this;

    Components._createEvent(_super.dropdownEvent(_this,'dropdown:before-show'));
    Components._addClass(_this.drop_list, 'is-active in-between')._removeClass(_this.drop_list, 'is-hidden');
    Components._addClass(_this.el, 'is-active');
    Components._createEvent(_super.dropdownEvent(_this,'dropdown:show'));

    setTimeout(function(){
      Components._removeClass(_this.drop_list, 'in-between');
      Components._createEvent(_super.dropdownEvent(_this,'dropdown:after-show'));
    }, _this.options.duration);
  };

  Dropdown.prototype.hide = function() {
    var _this = this;

    Components._createEvent(_super.dropdownEvent(_this,'dropdown:before-hide'));
    Components._addClass(_this.drop_list, 'is-hidden in-between')._removeClass(_this.drop_list, 'is-active');
    Components._removeClass(_this.el, 'is-active');
    Components._createEvent(_super.dropdownEvent(_this, 'dropdown:hide'));

    setTimeout(function(){
      Components._removeClass(_this.drop_list, 'in-between');
      Components._createEvent(_super.dropdownEvent('dropdown:after-hide'));
    }, _this.options.duration);
  };

  Dropdown.prototype.updateInput = function() {
    console.log('update input');
  };


  _super.elements = Components._getDOMElements(selector);

  _super.elements.forEach(function(el, index, arr) {
    _super.init(el, selector, options, index);
  });

  return {
    'apis': _super.apis
  };
};

/* ..............................
 Component Methods
 ..............................*/

Components._getDOMElements = function(selector) {
  try {
    return [].slice.call(document.querySelectorAll(selector));
  }
  catch (e) {
    throw 'Component Error : Dropdown : Not a valid selector. Must be a valid selector string';
  }
};

Components._extend = function() {
  var obj = {}, i, key;

  for (i=0; i < arguments.length; i++) {
    for (key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
};

Components._createEvent = function(obj) {
  var ComponentEvent;

  if (obj.is_jquery) {
    obj.args.el.trigger(obj.event_name, [obj.args]);
  }
  else {
    if (typeof CustomEvent !== 'function') {
      Components._createEventPolyfill();
    }

    ComponentEvent = new CustomEvent(obj.event_name, {
      detail: obj.args,
      bubbles: true,
      cancelable: false
    });
  }
};

Components._getElData = function(el, data_attr, is_jquery) {
  var data = is_jquery ? el.data(data_attr) : el.getAttribute(data_attr);

  if (typeof(data) !== 'undefined') {
    return data;
  }

  return false;
};

Components._createEventPolyfill = function() {
  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
};

Components._addClass = function(el, cls) {
  if (!this._hasClass(el, cls)) el.className += " " + cls;
  return this;
};

Components._hasClass = function(el, cls) {
  return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};

Components._removeClass =function(el, cls) {
  if (this._hasClass(el, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
  return this;
};

// var dropdowns = Component.dropdown(selector, {});



_this.initOnPluginInsert = function(name) {
      $('body').observe('added', selector, function(record) {
        selector.each(function() {
          if (typeof($(this).data('component_' + name)) === 'undefined') {
            $(this)[name](options);
          }
        });
      });
    };
