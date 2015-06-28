
/*.............................................
  IMAGE MULTI COMPONENT
.............................................*/

Components.image_multi = function(selector, options) {
  var _super = this;
  var Image_Multi;

  _super.apis       = {};
  _super.options    = options;
  _super.selector   = selector;
  _super.elements   = $(selector);
  _super.defaults   = {
    name: null,
    size: 'large'
  };

  _super.init = function(el, index) {
    var instance  = new Image_Multi(el, _super.selector, _super.options);
    var options   = _super.getOptions(el, _super.options, _super.defaults);

    el.data('component:image-multi', true);
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
        if (typeof($(this).data('component:image-multi')) === 'undefined') {
          _super.init($(this), index);
        }
      });
    });
  };

  _super.getOptions = function(el, options, defaults) {
    var obj = {};

    try {
      obj = el.data('image-multi');
    } catch (e) {}

    return $.extend({}, defaults, obj);
  };


  Image_Multi = function(el, selector, options) {
    var _this = this;

    _this.options     = _super.getOptions(el, options, _super.defaults);

    _this.el          = $(el);
    _this.selector    = selector;
    _this.images      = _this.el.find('[data-image]');

    _this.image_width = (_this.el.width() / 4) - 10;
    _this.image_height = _this.image_width / _this.options.ratio;

    _this.init();
  };

  Image_Multi.prototype.init = function() {
    var _this = this;

    _this.images.height(_this.image_height).width(_this.image_width);
    _this.bindEvents();
  };

  Image_Multi.prototype.bindEvents = function() {
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