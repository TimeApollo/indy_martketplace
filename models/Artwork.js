  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var ArtworkSchema = new Schema({
    title:  String,
    artist: String,
    date: { type: Date, default: Date.now },
    medium: String,
    styles: [String],
  });

  module.exports = mongoose.model('Artwork', ArtworkSchema);