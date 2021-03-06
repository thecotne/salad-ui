'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesheet = require('./_stylesheet.js');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

var _spinner = require('../../spinner/spinner');

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Anchor = function (_Component) {
  _inherits(Anchor, _Component);

  function Anchor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Anchor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Anchor.__proto__ || Object.getPrototypeOf(Anchor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Anchor, [{
    key: 'onPress',
    value: function onPress(e) {
      if (this.props.disabled) return;

      this.props.onPress(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var buttonStyle = Object.assign({}, _stylesheet2.default.button, _stylesheet2.default[this.props.type], _stylesheet2.default[this.props.size], this.state.hovered && !this.props.disabled ? Object.assign({}, _stylesheet2.default.buttonHover, _stylesheet2.default[this.props.type + 'Hover']) : null, this.props.fullWidth ? _stylesheet2.default.fullWidth : null, this.props.disabled ? _stylesheet2.default.buttonDisabled : null, this.props.style);
      return _react2.default.createElement(
        'div',
        {
          onMouseOver: function onMouseOver() {
            return _this2.setState({ hovered: true });
          },
          onMouseOut: function onMouseOut() {
            return _this2.setState({ hovered: false });
          },
          onClick: function onClick(e) {
            return _this2.onPress(e);
          },
          style: buttonStyle },
        this.props.isLoading ? _react2.default.createElement(_spinner2.default, null) : this.state.hovered && this.props.mouseOverText ? this.props.mouseOverText : this.props.children
      );
    }
  }]);

  return Anchor;
}(_react.Component);

Anchor.defaultProps = {
  onPress: function onPress() {
    return console.warn('Button has no onPress action.');
  },
  type: 'default',
  size: 'md',
  fullWidth: false,
  style: {},
  isLoading: false
};
exports.default = Anchor;