const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Exemple de données pour la démo
const products = [
    {
        id: 1,
        name: 'Pomme',
        description: 'Pomme rouge, fraîche',
        price: 1.20,
        image: 'images/apple.jpg'
    },
    {
        id: 2,
        name: 'Carotte',
        description: 'Carottes bio',
        price: 0.80,
        image: 'images/carrot.jpg'
    }
];

// Routes
app.get('/products', (req, res) => {
    res.json(products);
});

// Start Server
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
