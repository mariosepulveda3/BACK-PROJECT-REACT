const express = require('express');
require('dotenv').config();

const db = require('./src/utils/database/db');
const indexRoutes = require('./src/api/index/index.routes');
const moviesRoutes = require('./src/api/movies/movies.routes');
const userRoutes = require('./src/api/users/users.routes');
const cors = require('cors');
const User = require('./src/api/users/users.model');
// Requerimos cloudinary
const cloudinary = require('cloudinary').v2;

// Conectamos con la base de datos
db.connectDb();

// Conectamos con cloudinary 2.0
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret : process.env.API_SECRET
})

// Creamos el servidor
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const server = express();
const router = express.Router();

server.use(cors({
    origin: '*',
    credentials: true
}));

// Hacemos que nos funcione req.body
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Indicamos las rutas
server.use('/', indexRoutes);
server.use('/movies', moviesRoutes);
server.use('/users', userRoutes);

server.use('*', (req, res) => {
    const error = new Error('Ruta no encontrada!');
    error.status = 404;
    return res.status(error.status).json(error.message);
});

server.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || "Unexpected error");
});

// Arrancamos el servidor
server.listen(PORT, () => {
    console.log(`Servidor funcionando correctamente en http://localhost:${PORT}`);
});

