import React, { Component } from 'react';

export default class TodoItem extends Component {
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
};
