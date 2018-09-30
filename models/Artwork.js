  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var ArtworkSchema = new Schema({
    userId: String,
    firstName: String,
    lastName: String,
    email: String,
    email_lower: String,
    image: String, 
    url: String,
    title:  String,
    artist: String,
    date: { type: Date, default: Date.now },
    forSale: Boolean,
    medium: String,
    styles: [String],
  });

  module.exports = mongoose.model('Artwork', ArtworkSchema);