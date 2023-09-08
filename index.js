const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');

// Importa las rutas
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const movieListRoutes = require('./routes/movieListRoutes');
const ratingRoutes = require('./routes/ratingRoutes');

const app = express();

// Configuración de la conexión a MongoDB con la URL proporcionada
const mongoDBURL = 'mongodb+srv://user_uninorte:uninorte2023@cinema-social.gjlc2ce.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

// Configuración de Express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));

// Llama las rutas
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/lists', movieListRoutes);
app.use('/ratings', ratingRoutes);

// Otras configuraciones y middleware

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
