const express = require('express');
const axios = require('axios');
const router = express.Router();

const Paiement = require('../../models/paiement');


router.post('/', async (req, res) => {
  try {
    const { commandeId, montant } = req.body;

    const response = await axios.put(`http://localhost:5001/api/commandes/${commandeId}/paiement`, {
      montant,
    });

    if (response.status === 200) {
      res.json({ success: true, message: 'The payment has been successfully made.' });
    } else {
      res.json({ success: false, message: 'The update of the order has failed.' });
    }
  } catch (error) {
    console.error('Error during payment of the order:', error);
    res.status(500).json({ error: 'Error during the payment of the order.' });
  }
});



router.get('/', async (req, res) => {
    try {
      const paiements = await Paiement.find();
      res.json(paiements);
    } catch (error) {
      console.error('Error during payment retrieval:', error);
      res.status(500).json({ error: 'Error during payment retrieval.' });
    }
  });

router.get('/:id', async (req, res) => {
  try {
    const paiement = await Paiement.findById(req.params.id);
    if (!paiement) {
      return res.status(404).json({ error: 'Payment not found.' });
    }
    res.json(paiement);
  } catch (error) {
    console.error('Error during payment retrieval:', error);
    res.status(500).json({ error: 'Error during payment retrieval:' });
  }
});


module.exports = router;
