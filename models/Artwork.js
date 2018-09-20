  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var artworkSchema = new Schema({
    title:  String,
    artist: String,
    date: { type: Date, default: Date.now },
    medium: String,
    styles: [String],
  });