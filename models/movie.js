const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  image_url: { type: String },
  lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MovieList' }],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
