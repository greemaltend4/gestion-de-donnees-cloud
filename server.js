const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connecter à la base de données
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à la base de données'))
  .catch(err => console.error('Échec de la connexion à la base de données', err));

// Routes
app.get('/', (req, res) => {
    res.send('API de Gestion de Données Cloud');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d\'exécution sur le port ${PORT}`);
});