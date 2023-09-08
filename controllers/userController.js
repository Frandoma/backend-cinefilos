const User = require('./models/User');

// Controlador para registrar un nuevo usuario
exports.registerUser = async (req, res) => {
  try {
    // Recupera los datos del cuerpo de la solicitud
    const { email, full_name, nickname, birthdate, password } = req.body;

    // Verifica si el correo electrónico o el nickname ya están en uso
    const existingUser = await User.findOne({ $or: [{ email }, { nickname }] });
    if (existingUser) {
      return res.status(400).send('El correo electrónico o el nickname ya están en uso.');
    }

    // Crea un nuevo usuario en la base de datos
    const newUser = new User({ email, full_name, nickname, birthdate, password });
    await newUser.save();

    res.status(201).send('Registro exitoso');
  } catch (error) {
    console.error('Error en el registro de usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Otros controladores de usuario (inicio de sesión, actualizar perfil, eliminar cuenta, etc.)
