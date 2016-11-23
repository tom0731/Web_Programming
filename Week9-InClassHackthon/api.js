import { Router } from 'express';
import formidable from 'formidable';
import util from 'util';

const router = new Router();

// console.log("apiiiiiipaiapaiaia");
router.post('/uploadPhotos/', (req, res) => {
	res.send("upload sucessfully...");

	var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
    console.log(util.inspect({fields: fields, files: files}));
  	// ...
  });
	// res.send(req.body);
	// todo... parse form data, read photot out, save it to a file
});

export default router;
