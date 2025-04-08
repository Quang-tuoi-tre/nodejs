const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../../config/setting.json');
const { model } = require('mongoose');

// Đăng ký người dùng mới
const registerUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const newUser = new User({
            username,
            password,
            role // Lưu vai trò vào database
        });

        await newUser.save();
        res.status(201).json({
            message: 'User registered successfully'
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Đăng nhập người dùng
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Tạo JWT token chứa thông tin người dùng và vai trò
        const token = jwt.sign(
            { userId: user._id, username: user.username, role: user.role },
            config.jwt.secret,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Login successful',
            role: user.role,
            token: `${token}`
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
module.exports = {
    registerUser,
    loginUser
};