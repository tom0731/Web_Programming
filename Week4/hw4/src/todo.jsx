const { Component } = React;

class TodoItem extends Component {
	constructor(props) {
		super(props);

		// Bind handler here!
		this.toggleDoneClick = this.toggleDoneClick.bind(this);
	}

	toggleDoneClick(e) {
		this.props.toggleDoneClick(e, this.props.idx);
	}

	render() {
		return (
			<div className="todo" onClick={ this.toggleDoneClick }>
				{ this.props.itemName }
			</div>
		);
	}
}

TodoItem.propTypes = {
	itemName: React.PropTypes.string,
	toggleDoneClick: React.PropTypes.func
}

class CountDisplay extends Component {
	constructor(props) {
		super(props);
		// Bind handler here!
	}

	render() {
		return (
			<div className="counter" id={ this.props.id }>
				{ this.props.id + ': ' + this.props.count }
			</div>
		);
	}
}

CountDisplay.propTypes = {
	id: React.PropTypes.string,
	count: React.PropTypes.number
}

class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			numOfAll: 0,
			numOfActive: 0,
			numOfDone: 0
		}
		// Bind handler here!
		this.newItem = this.newItem.bind(this);
		this.onInputKeyPress = this.onInputKeyPress.bind(this);
		this.renderTodoItems = this.renderTodoItems.bind(this);
		this.renderCounter = this.renderCounter.bind(this);
		this.onClickRemoveAll = this.onClickRemoveAll.bind(this);
		this.onClickRemoveDone = this.onClickRemoveDone.bind(this);
		this.toggleDoneClick = this.toggleDoneClick.bind(this);
	}

	onInputKeyPress(e) {
		if(e.key === 'Enter') {
			let inputValue = e.target.value;
			if(inputValue !== '') {
				this.newItem(inputValue);
				e.target.value = '';
			}
		}
	}

	newItem(inputValue) {
		const items = this.state.items;
		items.push({ value: inputValue, isDone: false });
		this.setState({
			items: items,
			numOfAll: this.state.numOfAll + 1,
			numOfActive: this.state.numOfActive + 1,
		});
	}

	toggleDoneClick(e, idx) {
		const items = this.state.items;
		let numOfActive, numOfDone;
		items[idx].isDone = !items[idx].isDone;
		if (items[idx].isDone) {
			items[idx].value = items[idx].value + ' was done!';
			numOfActive = this.state.numOfActive - 1;
			numOfDone = this.state.numOfDone + 1;
			// e.target.setAttribute('class', 'done');
		} else {
			items[idx].value =
				items[idx].value.substring(
					0, items[idx].value.length - 10);
			numOfActive = this.state.numOfActive + 1;
			numOfDone = this.state.numOfDone - 1;
			// e.target.setAttribute('class', 'todo');
		}
		this.setState({ 
			items: items, numOfActive: numOfActive, numOfDone: numOfDone
		});
	}

	onClickRemoveAll() {
		this.setState({
			items: [], numOfAll: 0, numOfActive: 0, numOfDone: 0
		});
	}

	onClickRemoveDone() {
		let items = this.state.items;
		items = items.filter((item) => !item.isDone)
		this.setState({
			items: items,
			numOfAll: this.state.numOfAll - this.state.numOfDone,
			numOfDone: 0
		});
	}

	renderTodoItems() {
		if (this.state.items.length === 0) {
			return '';
		} else {
			return (this.state.items.map(
				(item, i) =>
					<TodoItem
						key={ i }
						idx={ i }
						itemName={ item.value }
						isDone={ item.isDone }
						toggleDoneClick = { this.toggleDoneClick }
					/>
				)
			)
		}
	}

	renderCounter() {
		return (
			<div>
				<CountDisplay
					id="all"
					count={ this.state.numOfAll }
				/>
				<CountDisplay
					id="active"
					count={ this.state.numOfActive }
				/>
				<CountDisplay
					id="done"
					count={ this.state.numOfDone }
				/>
			</div>
		);
	}

	render() {
		return (
			<div id="container">
				<input
					id="input"
					type="text"
					placeholder="what do you want to do...?"
					onKeyPress={ this.onInputKeyPress }
				/>
				<div id="todolist">My Todolist</div>
				<div id="counterContainer">
					{ this.renderCounter() }
				</div>
				<div className="btn">
					<button
						className="rBtn"
						id="All"
						onClick={ this.onClickRemoveAll }
					>remove all
					</button>
					<button
						className="rBtn"
						id="Done"
						onClick={ this.onClickRemoveDone }
					>remove done
					</button>
				</div>
				{ this.renderTodoItems() }
			</div>
		);
	}
}

ReactDOM.render(
  <TodoApp />,
	document.getElementById('root')
);


