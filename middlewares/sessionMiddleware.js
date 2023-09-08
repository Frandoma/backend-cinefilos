const session = require('express-session');

// Configuración de la sesión
exports.configureSession = session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
});
