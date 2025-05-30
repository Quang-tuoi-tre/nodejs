const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
}, {
    timestamps: true,
    collection: 'category' 
});

module.exports = mongoose.model('Category', CategorySchema);
