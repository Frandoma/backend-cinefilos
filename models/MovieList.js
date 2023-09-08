const mongoose = require('mongoose');

const movieListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creation_date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
  rating: { type: Number, default: 0 }, // Promedio de calificaciones
});

const MovieList = mongoose.model('MovieList', movieListSchema);

module.exports = MovieList;
