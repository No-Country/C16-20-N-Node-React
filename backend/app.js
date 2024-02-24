const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Permitir solicitudes CORS desde cualquier origen
app.use(cors());

// Middleware para procesar solicitudes JSON
app.use(express.json());

// Rutas de usuario
app.use('/account', userRoutes);

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto http://localhost:${PORT}`);
});
