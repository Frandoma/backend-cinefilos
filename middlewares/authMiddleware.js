exports.isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
      // Si el usuario está autenticado, permite que continúe
      next();
    } else {
      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
      res.redirect('/login');
    }
  };
  