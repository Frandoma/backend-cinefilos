const Rating = require('../models/Rating');

// Controlador para calificar una lista de películas
exports.rateList = async (req, res) => {
  try {
    const listId = req.params.listId;
    const { rating } = req.body;

    // Crea una nueva calificación en la base de datos
    const newRating = new Rating({ rating, user: req.session.userId, movieList: listId });
    await newRating.save();

    // Calcula el promedio de calificaciones para la lista y actualiza el campo de calificación
    const list = await MovieList.findById(listId);
    const ratings = await Rating.find({ movieList: listId });
    const totalRatings = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    list.rating = totalRatings / ratings.length;
    await list.save();

    res.status(201).send('Calificación registrada exitosamente');
  } catch (error) {
    console.error('Error al calificar la lista de películas:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Otros controladores de calificaciones (obtener calificaciones, eliminar calificación, etc.)
