const Card = require('../models/CardModels');

async function createCard(req, res) {
    try {
        const card = await createCard(req.body);
        res.status(201).json(Card);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports={
    createCard,
};