function getType(arg) {
	if (String(arg) === 'NaN') {
		console.log('NaN');
	} else if (arg instanceof(Array)) {
		console.log('array');
	} else if (arg === null) {
		console.log('null');
	} else {
		console.log(typeof(arg));
	}
}


// getType(1) // 'number'
// getType(NaN) // 'NaN'
// getType('1') // 'string'
// getType(function() {}) // 'function'
// getType({}) // 'object'
// getType([]) // 'array'
// getType(null) // 'null'
// getType(undefined) // 'undefined'

