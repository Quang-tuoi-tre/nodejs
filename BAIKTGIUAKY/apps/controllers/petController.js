const Pet = require('../models/pet');  // Import Pet Model

// API Thêm Pet mới
const insertPet = async (req, res) => {
    try {
        const { name, categoryId, description, price, age, breed, image, stock } = req.body;

        // Kiểm tra các trường bắt buộc
       

        const newPet = new Pet({
            name,
            categoryId,
            description,
            price,
            age,
            breed,
            image,
            stock,
            isActive: isActive || true
        });

        const pet = await newPet.save();
        res.status(200).json({ status: true, message: 'Pet created successfully', pet });
    } catch (error) {
        res.status(500).json({ status: false, message: 'Error creating pet', error: error.message });
    }
};

// API Lấy danh sách Pet với phân trang
const listPet = async (req,res)=>{

    Pet.find({})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json('Lấy dữ liệu thất bại!!!')
    })

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

module.exports = { insertPet, listPet, getPet, updatePet, deletePet };
