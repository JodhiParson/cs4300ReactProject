const express = require('express');
const router = express.Router();

const Recipe = require('../../models/recipe');
module.exports = router;


router.post('/', (req,res) => {
    Recipe.create(req.body)
        .then((item) => res.json({msg:'Item added successfully'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this item'}));
});

router.get('/:id', (req,res) => {
    Recipe.findById(req.params.id)
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({ noitemfound: 'No Item found'}));
});

router.get('/', (req,res) => {
    Item.find()
        .then((items) => res.json(items))
        .catch((err) => res.status(404).json({ noitemfound: 'No Item found'}));
});

router.put('/:id', (req,res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({msg:'Updated successfully'}))
        .catch((err) => res.status(404).json({ error: 'Unable to update the Database'}));
});


router.delete('/:id', (req,res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then((item) => res.json({msg:'Item entry deleted successfully'}))
        .catch((err) => res.status(404).json({ error: 'No such a item'}));
});