const Recipe = require("../models/Recipe");

const RecipeController = {
    index : async (req,res) => {
        let recipes = await Recipe.find().sort({createdAt : -1 });
        return res.json(recipes);
    },
    store : async (req,res) => {
        try {
            const {title,description,ingredients} = req.body;
            const recipe = await Recipe.create({
                title,
                description,
                ingredients
            });
            return res.json(recipe);
        }catch(e) {
            return res.status(400).json({msg : "invalid fields"});
        }
    },
    show : async (req,res) => {
        try {
            let id = req.params.id;
            let recipe = await Recipe.findById(id);
            return res.json(recipe);
        }catch(e) {
            return res.status(404).json({ msg : 'recipe not found.'});
        }
    },
    destroy : (req,res) => {
        return res.json({ msg : "delete recipe"});
    },
    update : (req,res) => {
        return res.json({ msg : "update recipe"});
    },
};

module.exports = RecipeController;