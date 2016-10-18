const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const myServer = express();

myServer.use(bodyParser.urlencoded({ extended: false }));
myServer.use(bodyParser.json());
myServer.use(express.static(path.join(__dirname, '/public')));

// routing
myServer.get('/', (req, res) => {
	// res.json(req.query);
	res.sendFile(path.join(__dirname, '/example.html'));
});

myServer.get('/api/query', (req, res) => {
	res.json(req.query);
});

myServer.post('/api/body', (req, res) => {
	res.send(JSON.stringify(req.body));
});

myServer.get('/api/users/:id', (req, res) => {
	const idx = req.params.id;
	if (idx === '1') {
		res.json({
			id: 1,
			name: 'Joe',
			age: 18
		});
	} else if (idx === '2') {
		res.json({
			id: 2,
			name: 'John',
			age: 22
		});
	} else {
		res.status(404).send('NOT FOUND');
	}
});

myServer.get('*', (req, res) => {
	res.status(404).send('NOT FOUND');
});

myServer.listen(3000, () => {
	console.log('listen on port: 3000');
}); // listen on 3000 port

