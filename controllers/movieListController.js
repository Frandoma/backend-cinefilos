const MovieList = require('../models/MovieList');

// Controlador para obtener detalles de una lista de películas
exports.getListDetails = async (req, res) => {
  try {
    const listId = req.params.listId;
    const list = await MovieList.findById(listId).populate('movies');

    if (!list) {
      return res.status(404).send('Lista de películas no encontrada');
    }

    res.json(list);
  } catch (error) {
    console.error('Error al obtener detalles de la lista de películas:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Otros controladores de listas de películas (crear lista, eliminar lista, agregar película a lista, calificar lista, etc.)
