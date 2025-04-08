const express = require('express');
const router = express.Router();

// Import middleware checkAuthAndRole
const {checkAuthAndRole} = require('../middleware/authenticatetoken')

// Các routes cho quản lý web
router.get('/login', (req, res) => {
    res.render('login.ejs');
});


router.get('/register', (req, res) => {
    res.render('register.ejs');
});

router.get('/petmanager',  (req, res) => {
    // Nếu là admin, hiển thị danh sách pets
    res.render('index');  // Render file index.ejs trong thư mục petmanager
});

router.get('/petmanager/create',  (req, res) => {
    // Hiển thị form tạo pet
    res.render('create');  // Render file create.ejs trong thư mục petmanager
});
router.get('/petmanager/detail/:id',  (req, res) => {
    // Hiển thị form tạo pet
    res.render('detailpet');  // Render file create.ejs trong thư mục petmanager
});


router.get('/petmanager/edit/:id',  (req, res) => {
    // Hiển thị form chỉnh sửa pet
    res.render('edit');  // Render file edit.ejs trong thư mục petmanager
});


router.get('/cate-list',  (req, res) => {
    // Nếu là admin, hiển thị danh sách pets
    res.render('catelist');  // Render file index.ejs trong thư mục petmanager
});

router.get('/catelist/create',  (req, res) => {
    // Hiển thị form tạo pet
    res.render('createcatelist');  // Render file create.ejs trong thư mục petmanager
});

router.get('/catelist/edit/:id',  (req, res) => {
    // Hiển thị form chỉnh sửa pet
    res.render('edit');  // Render file edit.ejs trong thư mục petmanager
});

module.exports = router; // Xuất router để sử dụng trong các file khác