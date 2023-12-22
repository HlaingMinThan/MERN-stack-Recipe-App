const RecipeController = {
    index : (req,res) => {
        return res.json({ msg : "Get all recipes"});
    },
    store : (req,res) => {
        return res.json({ msg : "store recipe"});
    },
    show : (req,res) => {
        return res.json({ msg : "get single recipe"});
    },
    destroy : (req,res) => {
        return res.json({ msg : "delete recipe"});
    },
    update : (req,res) => {
        return res.json({ msg : "update recipe"});
    },
};

module.exports = RecipeController;