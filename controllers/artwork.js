const express = require('express')
const stream = require('stream')
const s3 = require('../config/s3.config.js');
const upload = require('../config/multer.config.js');
const {Artwork} = require('../models')
const artwork = express.Router()


doUpload = (req, res) => {
	console.log(req)
	const artpiece = new Artwork({
		userId: req.body.userId,
		title: req.file.fieldName,
		artist: req.body.artist,
		forSale: req.body.forSale,
		medium: req.body.medium,
		styles: req.body.styles
	 })
	const s3Client = s3.s3Client;
	const params = s3.uploadParams;
	
	params.Key = artpiece.id;
	params.Body = req.file.buffer;
		
	s3Client.upload(params, (err, data) => {
		if (err) {
			res.status(500).json({error:"Error -> " + err});
		}
		// artpiece.save()
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
