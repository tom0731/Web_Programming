import { Router } from 'express';

const router = new Router();

router.post('/photos/', (req, res) => {
	res.send({ msg: "upload sucessfully..."});
	// todo... parse form data, read photot out, save it to a file
});

export default router;
