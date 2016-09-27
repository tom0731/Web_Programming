console.log('This is a todolist...');
var todoIn = document.getElementById('input');
var state = ['all', 'active', 'done'];
// console.log(todo)

todoIn.onkeypress = function(e) {
	var newTodo;
	//console.log(e);
	if (e.key === 'Enter') {
		// console.log(todo.value);
		if (todoIn.value !== '') {
			newTodo = document.createElement('div');
			newTodo.setAttribute('class', 'todo');
			newTodo.innerHTML = todoIn.value;
			newTodo.done = false;
			newTodo.onclick = function (e) {
				if (!e.target.done) {
					e.target.innerHTML = e.target.innerHTML + " is done!";
					stateChange(state[1], -1);
					stateChange(state[2], 1);
					e.target.done = true;
				}
			}
			document.body.appendChild(newTodo);
			for (var i in state) {
				if (i < 2) {
					stateChange(state[i], 1);
				}
			}

			todoIn.value = ''
		}
	}
};

function stateChange(word, dn) {
	var el, num;
	el = document.getElementById(word);
	num = (el.innerHTML.substring(el.innerHTML.indexOf(' '), el.innerHTML.length))*1;
	el.innerHTML = el.innerHTML.replace(num+'', num+dn+'');
	if (dn === 0) {
		el.innerHTML = el.innerHTML.replace(num+'', '0');
	}
}

function btnSetup() {
	var btn;
	btn = document.getElementsByClassName('rBtn');
	for (let i = 0; i < btn.length; ++i) {
		btn[i].addEventListener('click', function () { 
			removeTodo(btn[i].id);
		});
	}
}

function removeTodo(rBtnId) {
	var todolist; // object
	var nRemove, todolistSize, removeIdx; // number
	todolist = document.getElementsByClassName('todo');
	nRemove = 0;
	// todolistSize = todolist.length;
	for (let i = 0; i < todolist.length; ++i) {
		if ((rBtnId === 'Done' && todolist[i].done === true) ||
			rBtnId === 'All') {
			document.body.removeChild(todolist[i]);
			nRemove += 1;
			i -= 1;
		}
	}
	if (nRemove > 0) {
		stateChange(state[0], -nRemove);
		stateChange(state[2], 0);
		if (rBtnId === 'All') { stateChange(state[1], 0) }
	}
}

btnSetup();