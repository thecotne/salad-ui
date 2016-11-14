'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Spinner).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'span',
        { style: { width: this.props.size, height: this.props.size, display: 'inline-block' } },
        _react2.default.createElement('img', { style: { width: '100%' }, src: 'data:image/gif;base64,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' })
      );
    }
  }]);

  return Spinner;
}(_react2.default.Component);

Spinner.defaultProps = {
  size: 20
};
exports.default = Spinner;