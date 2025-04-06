const Pet = require('../entity/pet');
const { ObjectId } = require('mongodb');

// API Thêm Pet mới
async function insertPet(req, res) {
    try {
        const { name, categoryId, description, price, age, breed, image, stock, isActive } = req.body;

        const newPet = new Pet({
            name,
            categoryId,
            description,
            price,
            age,
            breed,
            image,
            stock,
            isActive,
        });

        const result = await newPet.save();  // Sử dụng phương thức `save()` của mongoose để thêm mới Pet
        res.json({ status: true, message: "Pet created successfully", pet: result });
    } catch (error) {
        res.status(500).json({ status: false, message: "Error creating pet", error: error.message });
    }
}

// API Lấy danh sách Pet với phân trang
async function getPetList(req, res) {
    try {
        const pageIndex = Number(req.query.pageIndex);
        const pageSize = Number(req.query.pageSize);

        const petList = await Pet.find({})
            .skip((pageIndex - 1) * pageSize)
            .limit(pageSize);

        res.json({ status: true, petList });
    } catch (error) {
        res.status(500).json({ status: false, message: "Error fetching pet list", error: error.message });
    }
}

// API Lấy thông tin chi tiết của một Pet
async function getPet(req, res) {
    try {
        const petId = req.params.id;

        const pet = await Pet.findById(petId);

        if (!pet) {
            return res.status(404).json({ status: false, message: "Pet not found" });
        }

        res.json({ status: true, pet });
    } catch (error) {
        res.status(500).json({ status: false, message: "Error fetching pet", error: error.message });
    }
}

// API Cập nhật thông tin Pet
async function updatePet(req, res) {
    try {
        const petId = req.params.id;
        const updatedPetData = req.body;

        const updatedPet = await Pet.findByIdAndUpdate(petId, updatedPetData, { new: true });

        if (!updatedPet) {
            return res.status(404).json({ status: false, message: "Pet not found" });
        }

        res.json({ status: true, message: "Pet updated successfully", updatedPet });
    } catch (error) {
        res.status(500).json({ status: false, message: "Error updating pet", error: error.message });
    }
}

// API Xóa Pet
async function deletePet(req, res) {
    try {
        const petId = req.params.id;

        const result = await Pet.deleteOne({ _id: new ObjectId(petId) });

        if (!result.deletedCount) {
            return res.status(404).json({ status: false, message: "Pet not found" });
        }

        res.json({ status: true, message: "Pet deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: false, message: "Error deleting pet", error: error.message });
    }
}

module.exports = { insertPet, getPetList, getPet, updatePet, deletePet };
