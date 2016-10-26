'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React;
var Component = _React.Component;

var Hello = function (_Component) {
	_inherits(Hello, _Component);

	function Hello() {
		_classCallCheck(this, Hello);

		return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
	}

	_createClass(Hello, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Hello World' + this.props.text
				),
				React.createElement(
					'h2',
					null,
					'Hello World' + this.props.text
				),
				React.createElement(
					'h3',
					null,
					'Hello World' + this.props.text
				)
			);
		}
	}]);

	return Hello;
}(Component);

Hello.defaultProps = {
	text: ' fuck'
};

Hello.propTypes = {
	text: React.PropTypes.string
};

var Show = function Show(obj) {
	return React.createElement(
		'div',
		null,
		'Clicks: ',
		obj.count
	);
};

var Counter = function (_React$Component) {
	_inherits(Counter, _React$Component);

	function Counter(props) {
		_classCallCheck(this, Counter);

		var _this2 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

		_this2.state = { count: 0 };

		// Bind handler here!
		_this2.tick = _this2.tick.bind(_this2);
		return _this2;
	}

	_createClass(Counter, [{
		key: 'tick',
		value: function tick() {
			// 只用 setState 去改變 state
			// 直接修改 this.state 是無法自動觸發變更的
			this.setState({ count: this.state.count + 1 });
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ onClick: this.tick },
				React.createElement(Show, { count: this.state.count })
			);
		}
	}]);

	return Counter;
}(React.Component);

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(Hello, { text: ' one' }),
	React.createElement(Hello, { text: ' two' }),
	React.createElement(Hello, null),
	React.createElement(Counter, null)
), document.getElementById('root'));