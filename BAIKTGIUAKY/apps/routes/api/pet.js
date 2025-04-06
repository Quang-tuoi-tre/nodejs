const express = require('express');
const router = express.Router();
const PetController = require('../../controllers/petcontroller');

// API Thêm Pet mới
router.post('/insert-pet', PetController.insertPet);

// API Lấy danh sách Pet
router.get('/pet-list', PetController.getPetList);

// API Lấy thông tin chi tiết của Pet
router.get('/pet/:id', PetController.getPet);

// API Cập nhật Pet
router.put('/update-pet/:id', PetController.updatePet);

// API Xóa Pet
router.delete('/delete-pet/:id', PetController.deletePet);

module.exports = router;
