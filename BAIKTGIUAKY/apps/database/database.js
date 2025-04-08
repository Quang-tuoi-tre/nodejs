const mongoose = require('mongoose');
const config = require('./../../config/setting.json');

class DatabaseConnection {
    static async connect() {
        const user = config.mongodb.username;
        const pass = config.mongodb.password;
        const database = config.mongodb.database;
        const url = `mongodb+srv://${user}:${pass}@cluster0.exwbe.mongodb.net/${database}?retryWrites=true&w=majority`;

        try {
            // Connect to MongoDB
            await mongoose.connect(url);
        } catch (error) {
            process.exit(1); // Exit the application if connection fails
        }
    }
}

module.exports = DatabaseConnection;
