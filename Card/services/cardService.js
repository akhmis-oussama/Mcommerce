const axios = require('axios');
const Card = require('../models/card');

async function importCardData() {
    try {
        const response = await axios.get('https://fakestoreapi.com/carts');
        const cards = response.data;

        // You can save the card data to your MongoDB here if needed
        // For simplicity, this example does not save the data to MongoDB

        console.log('Import des données de carte terminé avec succès !');
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'import des données de carte :', error);
    }
}

module.exports = {
    getCards: async (req, res) => {
        try {
            // Call the importCardData function if you want to import data on each request
            // await importCardData();

            const response = await axios.get('https://fakestoreapi.com/carts');
            const cards = response.data;

            res.json(cards);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des données de carte :', error);
            res.status(500).json({ error: 'Erreur lors de la récupération des données de carte.' });
        }
    }
};
