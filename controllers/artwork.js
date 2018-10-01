const express = require('express')
const stream = require('stream')
const s3 = require('../config/s3.config.js');
const upload = require('../config/multer.config.js');
const {Artwork} = require('../models')
const artwork = express.Router()


artwork.post('/upload', upload.single("file"), doUpload = (req, res) => {
	const artpiece = new Artwork({
		userId: req.body.userId,
		firstName: req.body.firstName,
    lastName: req.body.lastName,
		email: req.body.email,
		email_lower: req.body.email_lower,
		image: req.body.uploadFile,
		title: req.body.title,
		artist: req.body.artist,
		forSale: req.body.forSale,
		medium: req.body.medium,
		styles: req.body.styles
	 })
	const s3Client = s3.s3Client;
	const params = s3.uploadParams;
	
	params.Key = artpiece.id;
	params.Body = req.file.buffer;
	params.ACL = 'public-read';
		
	// console.log("this is the model",artpiece)
	s3Client.upload(params, (err, data) => {
		console.log( data )
		if (err) {
			res.status(500).json({error:"Error -> " + err});
		} else {
			// save artpiece to database if uploads correctly to amazon web service
			artpiece.url = data.Location
			artpiece.save( function(err){
				if (err){
					res.json({error: err})
				} else {
				res.json({message: 'File uploaded successfully! -> keyname = ' + artpiece.id});
				}
			})
		}
	});
})  

artwork.get('/:userId', (req, res) => {
	Artwork.find( {userId : req.params.userId }, function ( err , artworks ){
		res.json(artworks)
	})
});

artwork.get('/', (req, res) => {
	Artwork.find({}, null , { sort: {date: -1}} , function ( err , docs ){
		res.json(docs)
	})
})

module.exports = {artwork}

