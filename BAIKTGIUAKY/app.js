require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import Database connection
const DatabaseConnection = require('./apps/database/database');

// Import Routes
const petRoutes = require('./apps/routes/api');
const webRoutes = require('./apps/routes/web'); // Import routes cho web

// Tạo ứng dụng express
const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Body parser for JSON data
app.set('views',__dirname + '/apps/views');
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/public'));
app.use('/partical', express.static(__dirname + '/views/partical'));
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' })); // Tăng giới hạn lên 10MB

// Kết nối MongoDB thông qua DatabaseConnection
DatabaseConnection.connect()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the application on failure
  });

// Sử dụng routes
app.use('/api', petRoutes);
app.use('/web',webRoutes);  // Quản lý API cho pets

// Cấu hình server
var server = app.listen(3000, function(){
  console.log("server is running");
})

