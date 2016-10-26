const { Component } = React;

class Hello extends Component {
	render() {
		return (
			<div>
				<h1>{'Hello World' + this.props.text}</h1>
				<h2>{'Hello World' + this.props.text}</h2>
				<h3>{'Hello World' + this.props.text}</h3>
			</div>
		);
	}
}

Hello.defaultProps = {
	text: ' fuck'
};

Hello.propTypes = {
	text: React.PropTypes.string
};

const Show = (obj) => <div>Clicks: {obj.count}</div>;

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };

		// Bind handler here!
		this.tick = this.tick.bind(this);
	}

	tick() {
		// 只用 setState 去改變 state
		// 直接修改 this.state 是無法自動觸發變更的
		this.setState({count: this.state.count + 1});
	}

	render() {
		return (
			<div onClick={this.tick}>
				<Show count={this.state.count} />
			</div>
		)
	}
}

ReactDOM.render(
	<div>
		<Hello text=' one'/>
		<Hello text=' two'/>
		<Hello />
		<Counter />
	</div>,
	document.getElementById('root')
);

