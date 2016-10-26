"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component;

var TodoItem = function (_Component) {
	_inherits(TodoItem, _Component);

	function TodoItem(props) {
		_classCallCheck(this, TodoItem);

		// Bind handler here!
		var _this = _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call(this, props));

		_this.toggleDoneClick = _this.toggleDoneClick.bind(_this);
		return _this;
	}

	_createClass(TodoItem, [{
		key: "toggleDoneClick",
		value: function toggleDoneClick(e) {
			this.props.toggleDoneClick(e, this.props.idx);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "todo", onClick: this.toggleDoneClick },
				this.props.itemName
			);
		}
	}]);

	return TodoItem;
}(Component);

TodoItem.propTypes = {
	itemName: React.PropTypes.string,
	toggleDoneClick: React.PropTypes.func
};

var CountDisplay = function (_Component2) {
	_inherits(CountDisplay, _Component2);

	function CountDisplay(props) {
		_classCallCheck(this, CountDisplay);

		return _possibleConstructorReturn(this, (CountDisplay.__proto__ || Object.getPrototypeOf(CountDisplay)).call(this, props));
		// Bind handler here!
	}

	_createClass(CountDisplay, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "counter", id: this.props.id },
				this.props.id + ': ' + this.props.count
			);
		}
	}]);

	return CountDisplay;
}(Component);

CountDisplay.propTypes = {
	id: React.PropTypes.string,
	count: React.PropTypes.number
};

var TodoApp = function (_Component3) {
	_inherits(TodoApp, _Component3);

	function TodoApp(props) {
		_classCallCheck(this, TodoApp);

		var _this3 = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

		_this3.state = {
			items: [],
			numOfAll: 0,
			numOfActive: 0,
			numOfDone: 0
		};
		// Bind handler here!
		_this3.newItem = _this3.newItem.bind(_this3);
		_this3.onInputKeyPress = _this3.onInputKeyPress.bind(_this3);
		_this3.renderTodoItems = _this3.renderTodoItems.bind(_this3);
		_this3.renderCounter = _this3.renderCounter.bind(_this3);
		_this3.onClickRemoveAll = _this3.onClickRemoveAll.bind(_this3);
		_this3.onClickRemoveDone = _this3.onClickRemoveDone.bind(_this3);
		_this3.toggleDoneClick = _this3.toggleDoneClick.bind(_this3);
		return _this3;
	}

	_createClass(TodoApp, [{
		key: "onInputKeyPress",
		value: function onInputKeyPress(e) {
			if (e.key === 'Enter') {
				var inputValue = e.target.value;
				if (inputValue !== '') {
					this.newItem(inputValue);
					e.target.value = '';
				}
			}
		}
	}, {
		key: "newItem",
		value: function newItem(inputValue) {
			var items = this.state.items;
			items.push({ value: inputValue, isDone: false });
			this.setState({
				items: items,
				numOfAll: this.state.numOfAll + 1,
				numOfActive: this.state.numOfActive + 1
			});
		}
	}, {
		key: "toggleDoneClick",
		value: function toggleDoneClick(e, idx) {
			var items = this.state.items;
			var numOfActive = void 0,
			    numOfDone = void 0;
			items[idx].isDone = !items[idx].isDone;
			if (items[idx].isDone) {
				items[idx].value = items[idx].value + ' was done!';
				numOfActive = this.state.numOfActive - 1;
				numOfDone = this.state.numOfDone + 1;
				// e.target.setAttribute('class', 'done');
			} else {
				items[idx].value = items[idx].value.substring(0, items[idx].value.length - 10);
				numOfActive = this.state.numOfActive + 1;
				numOfDone = this.state.numOfDone - 1;
				// e.target.setAttribute('class', 'todo');
			}
			this.setState({
				items: items, numOfActive: numOfActive, numOfDone: numOfDone
			});
		}
	}, {
		key: "onClickRemoveAll",
		value: function onClickRemoveAll() {
			this.setState({
				items: [], numOfAll: 0, numOfActive: 0, numOfDone: 0
			});
		}
	}, {
		key: "onClickRemoveDone",
		value: function onClickRemoveDone() {
			var items = this.state.items;
			items = items.filter(function (item) {
				return !item.isDone;
			});
			this.setState({
				items: items,
				numOfAll: this.state.numOfAll - this.state.numOfDone,
				numOfDone: 0
			});
		}
	}, {
		key: "renderTodoItems",
		value: function renderTodoItems() {
			var _this4 = this;

			if (this.state.items.length === 0) {
				return '';
			} else {
				return this.state.items.map(function (item, i) {
					return React.createElement(TodoItem, {
						key: i,
						idx: i,
						itemName: item.value,
						isDone: item.isDone,
						toggleDoneClick: _this4.toggleDoneClick
					});
				});
			}
		}
	}, {
		key: "renderCounter",
		value: function renderCounter() {
			return React.createElement(
				"div",
				null,
				React.createElement(CountDisplay, {
					id: "all",
					count: this.state.numOfAll
				}),
				React.createElement(CountDisplay, {
					id: "active",
					count: this.state.numOfActive
				}),
				React.createElement(CountDisplay, {
					id: "done",
					count: this.state.numOfDone
				})
			);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ id: "container" },
				React.createElement("input", {
					id: "input",
					type: "text",
					placeholder: "what do you want to do...?",
					onKeyPress: this.onInputKeyPress
				}),
				React.createElement(
					"div",
					{ id: "todolist" },
					"My Todolist"
				),
				React.createElement(
					"div",
					{ id: "counterContainer" },
					this.renderCounter()
				),
				React.createElement(
					"div",
					{ className: "btn" },
					React.createElement(
						"button",
						{
							className: "rBtn",
							id: "All",
							onClick: this.onClickRemoveAll
						},
						"remove all"
					),
					React.createElement(
						"button",
						{
							className: "rBtn",
							id: "Done",
							onClick: this.onClickRemoveDone
						},
						"remove done"
					)
				),
				this.renderTodoItems()
			);
		}
	}]);

	return TodoApp;
}(Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('root'));