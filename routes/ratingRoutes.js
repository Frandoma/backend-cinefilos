const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/authMiddleware');
const ratingController = require('../controllers/ratingController');

// Ruta para calificar una lista de películas (protegida)
router.post('/rate-list/:listId', isAuthenticated, ratingController.rateList);

// Otras rutas relacionadas con calificaciones
// ...

module.exports = router;
