const express = require('express');
const router = express.Router();
const CardController = require('../controllers/CardControllers');

//create a new produt
router.post('/Card',CardControllers.createCard);

module.exports = router;