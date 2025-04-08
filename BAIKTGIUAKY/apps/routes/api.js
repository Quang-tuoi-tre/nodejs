const express = require('express');
const router = express.Router();
const PetController = require('../controllers/petcontroller');
const CategoryController = require('../controllers/categorycontroller');  // Import controller cho category
const authController = require('../controllers/authcontroller');
const { checkAuthAndRole } = require('../middleware/authenticatetoken'); // Import hàm login và checkAuthAndRole




// API Thêm Pet mới
router.post('/insert-pet', PetController.insertPet);

// API Lấy danh sách Pet
router.get('/pet-list', PetController.listPet);

// API Lấy thông tin chi tiết của Pet
router.get('/pet/:id', PetController.getPet);

// API Cập nhật Pet
router.put('/update-pet/:id', PetController.updatePet);

// API Xóa Pet
router.delete('/delete-pet/:id', PetController.deletePet);

router.post('/insert-category', CategoryController.createCategory);

// API Lấy danh sách Category
router.get('/category-list', CategoryController.getCategoryList);

// API Lấy thông tin chi tiết Category
router.get('/category/:id', CategoryController.getCategoryById);

// API Cập nhật Category
router.put('/update-category/:id', CategoryController.updateCategory);

// API Xóa Category
router.delete('/delete-category/:id', CategoryController.deleteCategory);


router.post('/register', authController.registerUser);

// API Đăng nhập người dùng
router.post('/login', authController.loginUser); // Khi người dùng gửi yêu cầu đăng nhập, gọi hàm login

// Áp dụng middleware để kiểm tra đăng nhập và phân quyền
router.get('/admin-dashboard', checkAuthAndRole(['admin']), (req, res) => {
    res.json({ message: 'Welcome to the admin dashboard' });
});


// // Chỉ cho phép customer truy cập
router.get('/customer-dashboard', checkAuthAndRole(['customer', 'admin']), (req, res) => {
    res.json({ message: 'Welcome to the customer dashboard', user: req.user });
});
module.exports = router;
