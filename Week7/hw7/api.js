import { Router } from 'express';

const router = new Router();


// Write your restful api here:
router.get('/users', (req, res) => {
	return res.json({ 
		users: [
			{ avator: 'http://xxx.com',
				name: 'John',
				age: 23 },
			{ avator: 'http://xxx.com',
				name: 'Amy',
				age: 18 },
		]
	})
});

router.get('/users/:id', (req, res) => {
	const idx = req.params.id;
	if (idx === '1') {
		res.json({
			avator: 'http://xxx.com',
			name: 'John',
			age: 23
		});
	} else if (idx === '2') {
		res.json({
			avator: 'http://xxx.com',
			name: 'Amy',
			age: 18
		});
	} else {
		res.status(404).send('NOT FOUND');
	}
});


export default router;
