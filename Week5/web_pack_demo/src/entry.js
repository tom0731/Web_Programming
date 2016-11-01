import './entry.css';

// var add = require('./add');
// var mult = require('./multiply');
import add from './add';
import mult from './multiply';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	render() {
		return (
			<h1>Hello!</h1>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

console.log('9876 + 1546 = ', add(9876, 1546));
console.log('98 * 15 = ', mult(98, 15));
