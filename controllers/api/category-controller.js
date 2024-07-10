const CategoryAddDTO = require('../../models/category/categoryAddDto');
const categoryService = require('../../services/category-service');

const getAllCategories = async (req,res) =>{
    const data = await categoryService.getAllCategories();
    res.json(data);
}

const getCategoryById = async (req,res) =>{
    const data = await categoryService.getCategoryById(req.params.id);
    res.json(data);
}

const getCategoryByHierarchy = async (req,res) =>{
    const data = await categoryService.getCategoryByHierarchy(req.params.id);
    res.json(data);
}

const addCategory = async(req,res) =>{
    const categoryAddDTO = new CategoryAddDTO(req.body);
    await categoryService.addCategory(categoryAddDTO);
    res.status(201).json({message:'Data Added Successfully'});

}

const deleteCategory = async(req,res) =>{
    const result = await categoryService.deleteCategory(req.params.id);
    res.json(result);
}

module.exports = {
    getAllCategories,
    getCategoryById,
    getCategoryByHierarchy,
    addCategory,
    deleteCategory
}