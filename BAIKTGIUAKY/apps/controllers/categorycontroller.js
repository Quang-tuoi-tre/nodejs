const Category = require('../models/category');  // Import model Category

// Thêm mới một Category
const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Kiểm tra nếu tên Category đã tồn tại
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ status: false, message: "Category already exists" });
        }

        // Tạo mới Category
        const newCategory = new Category({ name, description });
        await newCategory.save();
        res.status(201).json({ status: true, message: "Category created successfully", category: newCategory });
    } catch (error) {
        res.status(500).json({ status: false, message: "Error creating category", error: error.message });
    }
};

// Lấy danh sách tất cả Category
const getCategoryList = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ status: true, categories });
    } catch (error) {
        res.status(500).json({ status: false, message: "Error fetching categories", error: error.message });
    }
};

// Lấy thông tin một Category theo ID
const getCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({ status: false, message: "Category not found" });
        }

        res.status(200).json({ status: true, category });
    } catch (error) {
        res.status(500).json({ status: false, message: "Error fetching category", error: error.message });
    }
};

// Cập nhật thông tin Category
const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const { name, description } = req.body;

        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId,
            { name, description },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ status: false, message: "Category not found" });
        }

        res.status(200).json({ status: true, message: "Category updated successfully", category: updatedCategory });
    } catch (error) {
        res.status(500).json({ status: false, message: "Error updating category", error: error.message });
    }
};

// Xóa một Category theo ID
const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;

        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ status: false, message: "Category not found" });
        }

        res.status(200).json({ status: true, message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: false, message: "Error deleting category", error: error.message });
    }
};
module.exports = { createCategory, getCategoryList, getCategoryById, updateCategory, deleteCategory };
