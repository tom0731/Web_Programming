import React, { Component } from 'react';

export default class CountDisplay extends Component {
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
};