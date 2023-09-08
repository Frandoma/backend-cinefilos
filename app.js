const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { configureSession } = require('./sessionMiddleware');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(configureSession);

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/cinema_social', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB', err);
  });

// Definir modelos de datos usando Mongoose
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  full_name: { type: String, required: true },
  nickname: { type: String, unique: true, required: true },
  birthdate: { type: Date, required: true },
  password: { type: String, required: true },
});

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  image_url: { type: String },
});

const MovieListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creation_date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
});

const RatingSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movieList: { type: mongoose.Schema.Types.ObjectId, ref: 'MovieList' },
});

const User = mongoose.model('User', UserSchema);
const Movie = mongoose.model('Movie', MovieSchema);
const MovieList = mongoose.model('MovieList', MovieListSchema);
const Rating = mongoose.model('Rating', RatingSchema);

// Rutas de la aplicación
app.get('/', (req, res) => {
  if (req.session.userId) {
    // Implementa la lógica para mostrar las listas del usuario autenticado
  } else {
    // Implementa la lógica para mostrar listas públicas
  }
});

// Implementa las rutas restantes (registro, inicio de sesión, agregar/eliminar películas, calificar listas, ver detalles de lista, etc.)

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
