const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

// Ruta de registro de usuario
router.get('/register', userController.showRegisterForm);
router.post('/register', userController.registerUser);

// Ruta de inicio de sesión
router.get('/login', userController.showLoginForm);
router.post('/login', userController.loginUser);

// Ruta de cierre de sesión
router.get('/logout', userController.logoutUser);

// Ruta de perfil de usuario (protegida)
router.get('/profile', isAuthenticated, userController.getUserProfile);

// Otras rutas relacionadas con el usuario
// ...

module.exports = router;
