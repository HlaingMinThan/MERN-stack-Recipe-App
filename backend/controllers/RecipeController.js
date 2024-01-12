const Recipe = require("../models/Recipe");
const mongoose = require('mongoose');

const RecipeController = {
    index : async (req,res) => {
        let limit = 6;
        let page = req.query.page || 1;
        console.log(page);
        let recipes = await Recipe
        .find()
        .skip((page - 1) * limit) // 12
        .limit(limit)
        .sort({createdAt : -1 });
        return res.json(recipes);
    },
    store : async (req,res) => {
        const {title,description,ingredients} = req.body;
        const recipe = await Recipe.create({
            title,
            description,
            ingredients
        });
        return res.json(recipe);
    },
    show : async (req,res) => {
        try {
            let id = req.params.id;
            if(!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'not a valid id'});
            }
            let recipe = await Recipe.findById(id);
            if(!recipe) {
                return res.status(404).json({ msg : 'recipe not found'});
            }
            return res.json(recipe);
        }catch(e) {
            return res.status(500).json({ msg : 'internet server error'});
        }
    },
    destroy :async (req,res) => {
        try {
            let id = req.params.id;
            if(!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'not a valid id'});
            }
            let recipe = await Recipe.findByIdAndDelete(id);
            if(!recipe) {
                return res.status(404).json({ msg : 'recipe not found'});
            }
            return res.json(recipe);
        }catch(e) {
            return res.status(500).json({ msg : 'internet server error'});
        }
    },
    update : async (req,res) => {
        try {
            let id = req.params.id;
            if(!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'not a valid id'});
            }
            let recipe = await Recipe.findByIdAndUpdate(id, {
                ...req.body // title : "updated title value"
            });
            if(!recipe) {
                return res.status(404).json({ msg : 'recipe not found'});
            }
            return res.json(recipe);
        }catch(e) {
            return res.status(500).json({ msg : 'internet server error'});
        }
    },
};

module.exports = RecipeController;