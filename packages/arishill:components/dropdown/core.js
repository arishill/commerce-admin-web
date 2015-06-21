
/*.............................................
  DROPDOWN COMPONENT
.............................................*/

Components.dropdown = function(selector, options) {
  var _super = this;
  var Dropdown;

  _super.apis       = {};
  _super.options    = options;
  _super.selector   = selector;
  _super.elements   = $(selector);
  _super.defaults   = {
    name: null,
    select_input: false,
    show_duration: 300,
    hide_duration: 300,
    drop_list: '[data-dropdown-list]',
    drop_anchor: '[data-dropdown-anchor]',
    close_on_click: false
  };

  _super.init = function(el, index) {
    var instance  = new Dropdown(el, _super.selector, _super.options);
    var options   = _super.getOptions(el, _super.options, _super.defaults);

    el.data('component:dropdown', true);
    _super.apis[index] = instance;

    if (typeof(options.name) === 'string') {
      _super.apis[options.name] = instance;
    }
  };

  _super.event = function(_this) {
    return [{
      drop_list:  $(_this.drop_list),
      el:         $(_this.el),
      name:       _this.options.name ? _this.options.name : null,
    }];
  };

  _super.initComponentOnInsert = function() {
    $('body').observe('added', selector, function(record) {
      $(selector).each(function(index, value) {
        if (typeof($(this).data('component:dropdown')) === 'undefined') {
          _super.init($(this), index);
        }
      });
    });
  };

  _super.getOptions = function(el, options, defaults) {
    var obj = {};

    try {
      obj = el.data('dropdown');
    } catch (e) {}

    return $.extend({}, defaults, obj);
  };


  Dropdown = function(el, selector, options) {
    var _this = this;

    _this.options     = _super.getOptions(el, options, _super.defaults);

    _this.el          = $(el);
    _this.selector    = selector;
    _this.drop_anchor = _this.el.find(_this.options.drop_anchor);
    _this.drop_list   = _this.el.find(_this.options.drop_list);
    _this.show        = _this.show;
    _this.hide        = _this.hide;
    _this.updateInput = _this.updateInput;

    if (_this.options.select_input) {
      _this.input = _this.el.find('input');
    }
    _this.init();
  };

  Dropdown.prototype.init = function() {
    var _this = this;

    _this.bindEvents();
  };

  Dropdown.prototype.bindEvents = function() {
    var _this = this;

    _this.drop_anchor.on('click', function(event) {
      event.preventDefault();

      _this.el.trigger('dropdown:anchor-click', _super.event(_this));

      if (_this.drop_list.hasClass('is-active')) {
        _this.hide();
        return;
      }

      _this.show();
    });

    _this.drop_list.on('click', 'li', function(event) {
      if (_this.options.close_on_click && _this.drop_list.hasClass('is-active')) {
        _this.hide();
      }
      if (_this.options.select_input) {
        _this.updateInput($(this).data('value'));
      }
    });

    $(document).on('click', function(event) {
      var target = $(event.target).closest(_this.selector);

      if (!target.length) {
        _this.hide();
      }
    });
  };

  Dropdown.prototype.show = function() {
    var _this = this;

    _this.el.trigger('dropdown:before-show', _super.event(_this));
    _this.drop_list.addClass('is-active in-between').removeClass('is-hidden');
    _this.el.addClass('is-active');
    _this.el.trigger('dropdown:show', _super.event(_this));

    setTimeout(function(){
      _this.drop_list.removeClass('in-between');
    }, 50);

    setTimeout(function(){
      _this.el.trigger('dropdown:after-show', _super.event(_this));
    }, _this.options.show_duration);
  };

  Dropdown.prototype.hide = function() {
    var _this = this;

    _this.el.trigger('dropdown:before-hide', _super.event(_this));
    _this.drop_list.addClass('is-hidden in-between').removeClass('is-active');
    _this.el.removeClass('is-active');
    _this.el.trigger('dropdown:hide', _super.event(_this));

    setTimeout(function(){
      _this.drop_list.removeClass('in-between');
      _this.el.trigger('dropdown:after-hide', _super.event(_this));
    }, _this.options.hide_duration);
  };

  Dropdown.prototype.updateInput = function(value) {
    var _this = this;

    _this.input.val(value);
  };

  _super.elements.each(function(index, el) {
    _super.init($(el), index);
  });

  _super.initComponentOnInsert();

  return {
    'apis': _super.apis
  };
};