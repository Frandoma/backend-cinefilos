const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movieList: { type: mongoose.Schema.Types.ObjectId, ref: 'MovieList' },
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
