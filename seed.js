const mongoose = require('mongoose');
const Product = require('./models/Product'); // Assure-toi que ce modèle existe

mongoose.connect('mongodb://localhost:27017/frais_savoureux', { useNewUrlParser: true, useUnifiedTopology: true });

const products = [
    { name: 'Pomme', description: 'Pomme rouge, fraîche', price: 1.20 },
    { name: 'Carotte', description: 'Carottes bio', price: 0.80 }
];

Product.insertMany(products)
    .then(() => {
        console.log('Produits ajoutés');
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Erreur:', err);
    });
