const add = function() {
	let sum = 0;
	for (let i = 0; i < arguments.length; ++i) {
		sum += arguments[i];		
	}
	return sum;
}

// console.log(add(1, 2));

export default add;