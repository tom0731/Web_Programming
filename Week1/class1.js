console.log('fuck you');
var bb = document.getElementById('btn');
bb.addEventListener('click', function() {
	// alert('fuck you : )')
	var newFuck = document.createElement('div');
	var newFuckText = document.createTextNode('FUCK YOUUU...');
	newFuck.appendChild(newFuckText);
	document.body.appendChild(newFuck);
});