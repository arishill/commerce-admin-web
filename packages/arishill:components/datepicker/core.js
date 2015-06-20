
/*.............................................
  IMAGE MULTI COMPONENT
.............................................*/

Components.datepicker = function(selector, options) {
  var _super = this;
  var Datepicker;

  _super.apis       = {};
  _super.options    = options;
  _super.selector   = selector;
  _super.elements   = $(selector);
  _super.defaults   = {
    name: null
  };

  _super.init = function(el, index) {
    var instance  = new Datepicker(el, _super.selector, _super.options);
    var options   = _super.getOptions(el, _super.options, _super.defaults);

    el.data('component:datepicker', true);
    _super.apis[index] = instance;

    if (typeof(options.name) === 'string') {
      _super.apis[options.name] = instance;
    }
  };

  _super.event = function(_this) {
    return [{
      el:         $(_this.el),
      name:       _this.options.name ? _this.options.name : null,
    }];
  };

  _super.initComponentOnInsert = function() {
    $('body').observe('added', selector, function(record) {
      $(selector).each(function(index, value) {
        if (typeof($(this).data('component:datepicker')) === 'undefined') {
          _super.init($(this), index);
        }
      });
    });
  };

  _super.getOptions = function(el, options, defaults) {
    var obj = {};

    try {
      obj = el.data('datepicker');
    } catch (e) {}

    return $.extend({}, defaults, obj);
  };


  Datepicker = function(el, selector, options) {
    var _this = this;

    _this.options     = _super.getOptions(el, options, _super.defaults);

    _this.el          = $(el);
    _this.selector    = selector;

    _this.init();
  };

  Datepicker.prototype.init = function() {
    var _this = this;

    _this.el.datepicker();

    // _this.bindEvents();
  };

  Datepicker.prototype.bindEvents = function() {
    var _this = this;
  };

  _super.elements.each(function(index, el) {
    _super.init($(el), index);
  });

  _super.initComponentOnInsert();

  return {
    'apis': _super.apis
  };
};