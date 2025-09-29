require('dotenv').config();
const express = require('express');
const cors = require('cors');

const submitRoutes = require('./routes/submit');
const logosRoutes = require('./routes/logos');
const comentariosRoutes = require('./routes/comentarios');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use('/api', submitRoutes);
app.use('/logos', logosRoutes);
app.use('/comentarios', comentariosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
