import { Router } from 'express';
import formidable from 'formidable';
import util from 'util';

const router = new Router();

// console.log("apiiiiiipaiapaiaia");
router.post('/uploadPhotos/', (req, res) => {
	// res.send('upload sucessfully...');

	let form = new formidable.IncomingForm();

	form.on('fileBegin', function(name, file) {
		file.path = './myUploadPhotos/' + file.name
		res.send(file.name);
	});

  form.parse(req, function(err, fields, files) {
    // console.log(util.inspect({fields: fields, files: files}));
  });
	// todo... parse form data, read photot out, save it to a file
});

export default router;
