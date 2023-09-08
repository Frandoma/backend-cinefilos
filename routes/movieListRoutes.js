const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/authMiddleware');
const movieListController = require('../controllers/movieListController');

// Ruta para ver detalles de una lista de películas
router.get('/list/:listId', movieListController.getListDetails);

// Rutas protegidas para agregar y eliminar películas de una lista
router.post('/list/:listId/add-movie', isAuthenticated, movieListController.addMovieToList);
router.post('/list/:listId/remove-movie/:movieId', isAuthenticated, movieListController.removeMovieFromList);

// Otras rutas relacionadas con listas de películas
// ...

module.exports = router;
