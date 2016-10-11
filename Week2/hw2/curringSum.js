function curringSum1(val1) {
	return function curringSum2(val2) {
		return function sum(val3) {
			console.log(val1 + val2 + val3);
		};
	};
}

// curringSum1(1)(2)(3); // 6
// var add125 = curringSum1(100)(25);
// add125(10); // 135
