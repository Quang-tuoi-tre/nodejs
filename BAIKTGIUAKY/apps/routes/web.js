const express = require('express');
const router = express.Router();

const authenticate = require('../middleware/authenticatetoken');
const { model } = require('mongoose');
const { checkAuthAndRole } = require('../controllers/authcontroller'); // Import middleware kiểm tra quyền


// Các routes cho quản lý web

router.get('/login', (req, res) => {
    res.render('login.ejs');
});
router.get('/petmanager', checkAuthAndRole(['admin']), (req, res) => {
    // Nếu là admin, hiển thị danh sách pets
    res.render('admin/petmanager/index');  // Render file index.ejs trong thư mục petmanager
});

router.get('/petmanager/create', checkAuthAndRole(['admin']), (req, res) => {
    // Hiển thị form tạo pet
    res.render('admin/petmanager/create');  // Render file create.ejs trong thư mục petmanager
});

router.get('/petmanager/edit/:id', checkAuthAndRole(['admin']), (req, res) => {
    // Hiển thị form chỉnh sửa pet
    res.render('admin/petmanager/edit');  // Render file edit.ejs trong thư mục petmanager
});


model.exports = router; // Xuất router để sử dụng trong các file khác