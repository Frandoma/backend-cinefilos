const Movie = require('./models/Movie');

// Controlador para obtener detalles de una película
exports.getMovieDetails = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).send('Película no encontrada');
    }

    res.json(movie);
  } catch (error) {
    console.error('Error al obtener detalles de la película:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Otros controladores de películas (agregar película, eliminar película, actualizar detalles, etc.)
