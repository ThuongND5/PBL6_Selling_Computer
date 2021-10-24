const Category = require('../models/categoryModel')

const categoryCtrl = {
    getCategories: async(req, res) =>{
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    CreateCategory: async(req, res) =>{
        try {
            
        } catch (err) {
            return req.status(500).json({msg: err.message})
        }
    }
}

module.exports = categoryCtrl