const express = require('express')
const stream = require('stream')
const s3 = require('../config/s3.config.js');
let upload = require('../config/multer.config.js');

const artwork = express.Router()

 
doUpload = (req, res) => {
	const s3Client = s3.s3Client;
	const params = s3.uploadParams;
	
	params.Key = req.file.originalname;
	params.Body = req.file.buffer;
		
	s3Client.upload(params, (err, data) => {
		if (err) {
			res.status(500).json({error:"Error -> " + err});
		}
		res.json({message: 'File uploaded successfully! -> keyname = ' + req.file.originalname});
	});
}

doDownload = (req, res) => {
	const s3Client = s3.s3Client;
	const params = s3.downloadParams;
	
	params.Key = req.params.filename;
 
	s3Client.getObject(params)
		.createReadStream()
			.on('error', function(err){
				res.status(500).json({error:"Error -> " + err});
		}).pipe(res);
}

artwork.post('/upload', upload.single("file"), doUpload);
artwork.get('/:filename', doDownload);
 

module.exports = {artwork}


// artwork.get('/', (req, res) => {
//     console.log('Test')
//     res.json(
//         {
//             imgLink: 'something',
//             pieceId: 2,
//             userId: 12,
//             mediums: {
//                 type: 'photography',
//                 styles: {
//                     portraits: true
//                 }
//             }
//         },
//         {
//             imgLink: 'something else',
//             pieceId: 3,
//             userId: 16,
//             mediums: {
//                 type: 'painting',
//                 styles: {
//                     abstract: true,
//                     surrealism: true
//                 }
//             }
//         })
// })
