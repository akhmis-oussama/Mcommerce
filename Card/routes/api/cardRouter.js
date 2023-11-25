const express = require('express');
const router = express.Router();
const Card = require('../../models/card');
const cardService = require('../../services/cardService');

// Define your routes here
router.get('/', cardService.getCards);

module.exports = router;
